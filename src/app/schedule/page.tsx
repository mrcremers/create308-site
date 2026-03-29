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
        subtitle="Browse by category and day, then tap any class for details."
      />

      <Section className="bg-[#EFE8E3]">
        {/* HEADER */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
            Weekly Schedule
          </p>
          <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
            Monday through Thursday
          </h2>
          <p className="max-w-2xl text-sm sm:text-lg text-[#4B4B4B]">
            Tap any class to view details and instructor information.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-5 flex flex-wrap gap-2 sm:gap-3">
          {(["dance", "theatre", "music"] as const).map((category) => {
            const meta = categoryMeta[category];

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenClassId(null);
                  if (category !== "dance") setActiveDanceStyle("all");
                }}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm ${
                  activeCategory === category
                    ? "bg-[#6E5A73] text-white"
                    : "bg-white hover:bg-[#DDD4CF]"
                }`}
              >
                {meta.label}
              </button>
            );
          })}
        </div>

        {/* STYLE FILTER */}
        {activeCategory === "dance" && (
          <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => {
                setActiveDanceStyle("all");
                setOpenClassId(null);
              }}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm ${
                activeDanceStyle === "all"
                  ? "bg-[#6E5A73] text-white"
                  : "bg-white hover:bg-[#DDD4CF]"
              }`}
            >
              All
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
                  onClick={() => {
                    setActiveDanceStyle(style);
                    setOpenClassId(null);
                  }}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm ${
                    activeDanceStyle === style
                      ? "bg-white shadow-sm"
                      : "bg-white/70 hover:bg-white"
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${styleMeta.dotClass}`} />
                  {style}
                </button>
              );
            })}
          </div>
        )}

        {/* MOBILE + DESKTOP SHARED STRUCTURE */}
        <div className="space-y-6 lg:grid lg:grid-cols-4 lg:gap-6 lg:space-y-0">
          {scheduleDays.map((day) => (
            <div key={day} className="rounded-[24px] bg-[#F7F6F4] p-4">
              <div className="mb-3 border-b border-black/10 pb-3">
                <h3 className="text-xl sm:text-2xl font-serif">{day}</h3>
              </div>

              <div className="space-y-3">
                {classesByDay[day].length === 0 ? (
                  <div className="rounded-[20px] bg-white px-4 py-4 text-sm text-[#4B4B4B]">
                    No classes.
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
                        className={`rounded-[20px] bg-white ${
                          isOpen ? "ring-1 ring-[#C47A7A]/30" : ""
                        }`}
                      >
                        <button
                          onClick={() =>
                            setOpenClassId(isOpen ? null : item.id)
                          }
                          className={`w-full text-left px-4 py-3 border-l-[3px] ${styleMeta.accent}`}
                        >
                          <h4 className="text-base sm:text-lg font-serif">
                            {formatClosedTitle(item)}
                          </h4>

                          <div className="flex justify-between mt-1 text-xs sm:text-sm text-[#4B4B4B]">
                            <span>{formatTime(item)}</span>
                            <span>{isOpen ? "−" : "+"}</span>
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 pt-2 space-y-3">
                            <div className="flex flex-wrap gap-2 text-xs">
                              <span className={`px-3 py-1 rounded-full ${styleMeta.chipClass}`}>
                                {item.style}
                              </span>
                              <span className="px-3 py-1 rounded-full bg-[#F7F6F4]">
                                {studioInfo.label}
                              </span>
                            </div>

                            {instructor && (
                              <div className="flex items-center gap-3">
                                <img
                                  src={instructor.image}
                                  className="h-12 w-12 rounded-xl object-cover"
                                />
                                <div>
                                  <p className="text-sm font-medium">
                                    {instructor.name}
                                  </p>
                                  <p className="text-xs text-[#4B4B4B]">
                                    {instructor.role}
                                  </p>
                                </div>
                              </div>
                            )}

                            <p className="text-sm text-[#4B4B4B]">
                              {item.shortDescription}
                            </p>

                            <p className="text-sm text-[#4B4B4B]">
                              <span className="font-medium">
                                Experience:
                              </span>{" "}
                              {item.experienceNeeded}
                            </p>

                            <Link
                              href="/contact"
                              className="block text-center rounded-full bg-[#C47A7A] px-4 py-2 text-sm text-white"
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

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-serif">
            Need help choosing?
          </h2>

          <p className="mb-6 text-sm sm:text-lg text-[#4B4B4B]">
            We can help guide you toward the right class and level.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-[#C47A7A] px-6 py-3 text-white text-sm"
            >
              Contact the Studio
            </Link>

            <Link
              href="/programs"
              className="rounded-full border px-6 py-3 text-sm"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}