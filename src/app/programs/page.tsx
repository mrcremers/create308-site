"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PageHero from "@/components/PageHero";

import {
  programCategories,
  guidedCategoryConfigs,
  ageGroups,
  getGuidedResults,
  type GuidedCategoryKey,
} from "@/data/programs";

export default function ProgramsPage() {
  const [active, setActive] = useState<GuidedCategoryKey | null>(null);
  const [displayed, setDisplayed] = useState<GuidedCategoryKey | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);

  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedFocus, setSelectedFocus] = useState<string | null>(null);

  const [showPrograms, setShowPrograms] = useState(false);
  const [programsVisible, setProgramsVisible] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const activeConfig = guidedCategoryConfigs.find((c) => c.key === displayed);

  const programCards =
    displayed && showPrograms
      ? getGuidedResults(displayed, selectedAge as any, selectedFocus)
      : [];

  useEffect(() => {
    if (active === null) {
      setPanelVisible(false);
      return;
    }

    setSelectedAge(null);
    setSelectedFocus(null);
    setShowPrograms(false);
    setProgramsVisible(false);

    if (displayed === null) {
      setDisplayed(active);
      requestAnimationFrame(() => setPanelVisible(true));
      return;
    }

    if (active !== displayed) {
      setPanelVisible(false);

      const timeout = setTimeout(() => {
        setDisplayed(active);
        requestAnimationFrame(() => setPanelVisible(true));
      }, 180);

      return () => clearTimeout(timeout);
    }
  }, [active, displayed]);

  useEffect(() => {
    if (!displayed || !panelVisible || !panelRef.current) return;

    const timeout = setTimeout(() => {
      panelRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);

    return () => clearTimeout(timeout);
  }, [displayed, panelVisible]);

  useEffect(() => {
    if (!showPrograms) {
      setProgramsVisible(false);
      return;
    }

    const first = setTimeout(() => setProgramsVisible(true), 60);

    const second = setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
    };
  }, [showPrograms]);

  return (
    <main className="min-h-screen bg-[#F7F6F4] text-[#1C1C1E]">
      <PageHero
        title="Programs"
        subtitle="Browse by program or use the guided experience below to find the right path."
      />

      {/* BROWSE */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
              Browse by Program
            </p>
            <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
              Start where your interest already is
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {programCategories.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 sm:h-56 w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="mb-3 text-xl font-serif sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-[#4B4B4B]">
                    {item.shortDescription}
                  </p>
                  <span className="text-sm font-medium text-[#6E5A73]">
                    {item.browseLabel}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDED SELECT */}
      <section className="px-5 pb-10 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-3xl font-serif sm:text-4xl md:text-5xl">
              Not sure where to start?
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {guidedCategoryConfigs.map((item) => (
              <div
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`relative h-48 sm:h-56 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                  active === item.key
                    ? "ring-4 ring-[#C47A7A] shadow-xl"
                    : "hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                {item.image && (
                  <img
                    src={item.image}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 p-5 sm:p-6 text-white">
                  <h3 className="mb-2 text-xl sm:text-2xl font-serif">
                    {item.cardTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    {item.cardSubtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL */}
      <section
        ref={panelRef}
        className="scroll-mt-32 px-5 pb-12 sm:px-6 lg:px-16"
      >
        <div className="mx-auto max-w-5xl min-h-[280px]">
          {activeConfig && (
            <div
              className={`rounded-2xl sm:rounded-3xl border bg-white p-6 sm:p-10 shadow-sm transition-all duration-300 ${
                panelVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <div className="mb-6 sm:mb-8">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
                  {activeConfig.panelEyebrow}
                </p>

                <h2 className="mb-4 text-2xl sm:text-3xl font-serif">
                  {activeConfig.panelHeading}
                </h2>

                <p className="text-sm sm:text-base text-[#4B4B4B] leading-6 sm:leading-7">
                  {activeConfig.panelDescription}
                </p>
              </div>

              {/* AGE */}
              <div className="mb-6 sm:mb-8">
                <p className="mb-3 text-xs uppercase tracking-wide text-[#6E5A73] sm:text-sm">
                  Select Age Group
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {ageGroups.map((age) => (
                    <button
                      key={age}
                      onClick={() => {
                        setSelectedAge(age);
                        setShowPrograms(false);
                      }}
                      className={`rounded-full px-4 py-2 text-xs sm:text-sm ${
                        selectedAge === age
                          ? "bg-[#6E5A73] text-white"
                          : "bg-[#F7F6F4] hover:bg-[#6E5A73] hover:text-white"
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              {/* FOCUS */}
              <div className="mb-8 sm:mb-10">
                <p className="mb-3 text-xs uppercase tracking-wide text-[#6E5A73] sm:text-sm">
                  {activeConfig.focusPrompt}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {activeConfig.focusOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedFocus(option);
                        setShowPrograms(false);
                      }}
                      className={`rounded-full px-4 py-2 text-xs sm:text-sm ${
                        selectedFocus === option
                          ? "bg-[#6E5A73] text-white"
                          : "bg-[#F7F6F4] hover:bg-[#6E5A73] hover:text-white"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowPrograms(true)}
                className="w-full sm:w-auto rounded-full bg-[#C47A7A] px-6 py-3 text-sm text-white"
              >
                Show Programs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RESULTS */}
      {showPrograms && (
        <section
          ref={resultsRef}
          className={`px-5 pb-20 sm:px-6 lg:px-16 transition-all duration-300 ${
            programsVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
                Suggested starting points
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {programCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm"
                >
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="text-xs text-[#6E5A73]">
                      {card.tag}
                    </span>
                    <span className="text-sm text-[#4B4B4B]">
                      {card.ageLabel}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl sm:text-2xl font-serif">
                    {card.title}
                  </h3>

                  <p className="mb-5 text-[#4B4B4B]">
                    {card.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={card.href}
                      className="rounded-full bg-[#C47A7A] px-5 py-2 text-sm text-white text-center"
                    >
                      Learn More
                    </Link>

                    <Link
                      href="/contact"
                      className="rounded-full border px-5 py-2 text-sm text-center"
                    >
                      Ask About This Program
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}