"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import {
  categoryMeta,
  danceStyleFilters,
  getStyleMeta,
  scheduleClasses,
  scheduleDays,
  studioMeta,
  type DanceStyle,
  type ProgramCategory,
  type ScheduleClass,
} from "@/data/schedule";
import { getInstructorBySlug } from "@/data/instructors";

function formatClosedTitle(item: ScheduleClass) {
  return `${item.style} • Level ${item.level}`;
}

function formatTime(item: ScheduleClass) {
  return `${item.startTime}–${item.endTime}`;
}

export default function SchedulePage() {
  const [openClassId, setOpenClassId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<ProgramCategory>("dance");
  const [activeDanceStyle, setActiveDanceStyle] = useState<DanceStyle | "all">(
    "all"
  );

  const classesByDay = useMemo(() => {
    return scheduleDays.reduce<Record<string, ScheduleClass[]>>((acc, day) => {
      acc[day] = scheduleClasses.filter((item) => {
        if (item.day !== day) return false;
        if (item.category !== activeCategory) return false;
        if (activeCategory === "dance" && activeDanceStyle !== "all") {
          return item.style === activeDanceStyle;
        }
        return true;
      });

      return acc;
    }, {});
  }, [activeCategory, activeDanceStyle]);

  return (
    <main>
      <PageHero
        title="Schedule"
        subtitle="Browse the weekly schedule by category and day, then click any class for more information about the instructor, studio, and fit."
      />

      <Section className="bg-[#EFE8E3]">
        <div className="mb-10 flex flex-col gap-6">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              Weekly Schedule
            </p>
            <h2 className="mb-4 text-4xl font-serif md:text-5xl">
              Monday through Thursday
            </h2>
            <p className="max-w-3xl text-lg text-[#4B4B4B]">
              Scan the week at a glance, then click any class tile to view more
              details.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {(["dance", "theatre", "music"] as const).map((category) => {
              const meta = categoryMeta[category];

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenClassId(null);
                    if (category !== "dance") {
                      setActiveDanceStyle("all");
                    }
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-[#6E5A73] text-white"
                      : "bg-white text-[#1C1C1E] hover:bg-[#DDD4CF]"
                  }`}
                >
                  {meta.label}
                </button>
              );
            })}
          </div>

          {activeCategory === "dance" && (
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveDanceStyle("all");
                  setOpenClassId(null);
                }}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeDanceStyle === "all"
                    ? "bg-[#6E5A73] text-white"
                    : "bg-white text-[#1C1C1E] hover:bg-[#DDD4CF]"
                }`}
              >
                View All
              </button>

              {danceStyleFilters.map((style) => {
                const styleMeta = getStyleMeta({
                  id: "",
                  day: "Monday",
                  studio: "Grey",
                  category: "dance",
                  style,
                  level: "",
                  startTime: "",
                  endTime: "",
                  instructorId: "",
                  shortDescription: "",
                  experienceNeeded: "",
                });

                return (
                  <button
                    key={style}
                    type="button"
                    onClick={() => {
                      setActiveDanceStyle(style);
                      setOpenClassId(null);
                    }}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                      activeDanceStyle === style
                        ? "bg-white text-[#1C1C1E] shadow-sm"
                        : "bg-white/70 text-[#1C1C1E] hover:bg-white"
                    }`}
                  >
                    <span
                      className={`h-3 w-3 rounded-full ${styleMeta.dotClass}`}
                    />
                    <span>{style}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-4">
          {scheduleDays.map((day) => (
            <div key={day} className="rounded-[28px] bg-[#F7F6F4] p-4">
              <div className="mb-4 border-b border-black/10 pb-4 text-center">
                <h3 className="text-3xl font-serif">{day}</h3>
              </div>

              <div className="space-y-4">
                {classesByDay[day].length === 0 ? (
                  <div className="rounded-[24px] bg-white px-4 py-5 text-sm text-[#4B4B4B] shadow-sm">
                    No classes shown for this day.
                  </div>
                ) : (
                  classesByDay[day].map((item) => {
                    const isOpen = openClassId === item.id;
                    const instructor = getInstructorBySlug(item.instructorId);
                    const studioInfo = studioMeta[item.studio];
                    const styleMeta = getStyleMeta(item);

                    return (
                      <div
                        key={item.id}
                        className={`overflow-hidden rounded-[24px] bg-white shadow-sm transition ${
                          isOpen ? "ring-1 ring-[#C47A7A]/30" : ""
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenClassId(isOpen ? null : item.id)
                          }
                          className={`w-full cursor-pointer rounded-[24px] border-l-[3px] bg-white px-4 py-4 text-left transition hover:-translate-y-[2px] hover:shadow-md ${styleMeta.accent}`}
                        >
                          <div className="mb-2">
                            <h4 className="text-xl font-serif leading-tight text-[#1C1C1E]">
                              {formatClosedTitle(item)}
                            </h4>
                          </div>

                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-[#4B4B4B]">
                              {formatTime(item)}
                            </p>

                            <span className="text-xs font-medium text-[#6E5A73]">
                              {isOpen ? "−" : "+"}
                            </span>
                          </div>

                          <p className="mt-2 text-xs text-[#6E5A73]">
                            {isOpen ? "Hide details" : "View details"}
                          </p>
                        </button>

                        {isOpen && (
                          <div className="space-y-4 px-4 pb-4 pt-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`rounded-full px-3 py-1 text-xs uppercase tracking-wide ${styleMeta.chipClass}`}
                              >
                                {item.style}
                              </span>
                              <span
                                className={`rounded-full bg-[#F7F6F4] px-3 py-1 text-xs uppercase tracking-wide ${studioInfo.textClass}`}
                              >
                                {studioInfo.label}
                              </span>
                            </div>

                            {instructor && (
                              <div className="flex items-center gap-3">
                                <img
                                  src={instructor.image}
                                  alt={instructor.name}
                                  className="h-14 w-14 rounded-2xl object-cover"
                                />
                                <div>
                                  <p className="text-base font-medium text-[#1C1C1E]">
                                    {instructor.name}
                                  </p>
                                  <p className="text-sm text-[#4B4B4B]">
                                    {instructor.role}
                                  </p>
                                </div>
                              </div>
                            )}

                            <p className="text-sm leading-6 text-[#4B4B4B]">
                              {item.shortDescription}
                            </p>

                            <p className="text-sm leading-6 text-[#4B4B4B]">
                              <span className="font-medium text-[#1C1C1E]">
                                Recommended experience:
                              </span>{" "}
                              {item.experienceNeeded}
                            </p>

                            <Link
                              href="/contact"
                              className="inline-flex rounded-full bg-[#C47A7A] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                            >
                              Ask About This Class
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8 lg:hidden">
          {scheduleDays.map((day) => (
            <div key={day} className="rounded-[28px] bg-[#F7F6F4] p-4">
              <div className="mb-4 border-b border-black/10 pb-4">
                <h3 className="text-3xl font-serif">{day}</h3>
              </div>

              <div className="space-y-4">
                {classesByDay[day].length === 0 ? (
                  <div className="rounded-[24px] bg-white px-4 py-5 text-sm text-[#4B4B4B] shadow-sm">
                    No classes shown for this day.
                  </div>
                ) : (
                  classesByDay[day].map((item) => {
                    const isOpen = openClassId === item.id;
                    const instructor = getInstructorBySlug(item.instructorId);
                    const studioInfo = studioMeta[item.studio];
                    const styleMeta = getStyleMeta(item);

                    return (
                      <div
                        key={item.id}
                        className={`overflow-hidden rounded-[24px] bg-white shadow-sm transition ${
                          isOpen ? "ring-1 ring-[#C47A7A]/30" : ""
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenClassId(isOpen ? null : item.id)
                          }
                          className={`w-full cursor-pointer rounded-[24px] border-l-[3px] bg-white px-4 py-4 text-left transition hover:-translate-y-[2px] hover:shadow-md ${styleMeta.accent}`}
                        >
                          <div className="mb-2">
                            <h4 className="text-xl font-serif leading-tight text-[#1C1C1E]">
                              {formatClosedTitle(item)}
                            </h4>
                          </div>

                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-[#4B4B4B]">
                              {formatTime(item)}
                            </p>

                            <span className="text-xs font-medium text-[#6E5A73]">
                              {isOpen ? "−" : "+"}
                            </span>
                          </div>

                          <p className="mt-2 text-xs text-[#6E5A73]">
                            {isOpen ? "Hide details" : "View details"}
                          </p>
                        </button>

                        {isOpen && (
                          <div className="space-y-4 px-4 pb-4 pt-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`rounded-full px-3 py-1 text-xs uppercase tracking-wide ${styleMeta.chipClass}`}
                              >
                                {item.style}
                              </span>
                              <span
                                className={`rounded-full bg-[#F7F6F4] px-3 py-1 text-xs uppercase tracking-wide ${studioInfo.textClass}`}
                              >
                                {studioInfo.label}
                              </span>
                            </div>

                            {instructor && (
                              <div className="flex items-center gap-3">
                                <img
                                  src={instructor.image}
                                  alt={instructor.name}
                                  className="h-14 w-14 rounded-2xl object-cover"
                                />
                                <div>
                                  <p className="text-base font-medium text-[#1C1C1E]">
                                    {instructor.name}
                                  </p>
                                  <p className="text-sm text-[#4B4B4B]">
                                    {instructor.role}
                                  </p>
                                </div>
                              </div>
                            )}

                            <p className="text-sm leading-6 text-[#4B4B4B]">
                              {item.shortDescription}
                            </p>

                            <p className="text-sm leading-6 text-[#4B4B4B]">
                              <span className="font-medium text-[#1C1C1E]">
                                Recommended experience:
                              </span>{" "}
                              {item.experienceNeeded}
                            </p>

                            <Link
                              href="/contact"
                              className="inline-flex rounded-full bg-[#C47A7A] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                            >
                              Ask About This Class
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            Need Help Choosing?
          </p>

          <h2 className="mb-6 text-4xl font-serif md:text-5xl">
            We can help with placement and fit
          </h2>

          <p className="mb-8 text-lg leading-8 text-[#4B4B4B]">
            If you are unsure which class level or style is right for your
            student, reach out. We can help guide you toward a confident
            starting point.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#C47A7A] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Contact the Studio
            </Link>

            <Link
              href="/programs"
              className="rounded-full border border-[#1C1C1E]/15 px-8 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}