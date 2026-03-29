import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import { getProgramDetailPage } from "@/data/programs";
import { getInstructorsByDiscipline } from "@/data/instructors";

export default function DancePage() {
  const page = getProgramDetailPage("dance");
  const instructors = getInstructorsByDiscipline("dance");

  return (
    <main>
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} />

      <Section>
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] sm:rounded-[32px]">
            <img
              src={page.image}
              alt={page.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              {page.introEyebrow}
            </p>

            <h2 className="mb-5 text-3xl font-serif sm:text-4xl md:text-5xl">
              {page.introHeading}
            </h2>

            {page.introBody.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B] last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            {page.focusSectionEyebrow}
          </p>

          <h2 className="text-3xl font-serif sm:text-4xl md:text-5xl">
            {page.focusSectionHeading}
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {page.focusAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-serif sm:text-2xl">{item.title}</h3>
              <p className="leading-7 text-[#4B4B4B]">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {page.infoCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-serif sm:text-2xl">{item.title}</h3>
              <p className="leading-7 text-[#4B4B4B]">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFE8E3]">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            Dance Faculty
          </p>

          <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
            Meet the dance instructors
          </h2>

          <p className="mx-auto max-w-3xl text-sm sm:text-lg text-[#4B4B4B]">
            Our dance instructors help students build strong fundamentals,
            confidence, artistry, and joy through thoughtful training.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white shadow-sm"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="h-56 sm:h-64 w-full object-cover"
              />

              <div className="p-6 sm:p-8">
                <h3 className="mb-2 text-xl font-serif sm:text-2xl">{instructor.name}</h3>
                <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6E5A73]">
                  {instructor.role}
                </p>
                <p className="mb-5 leading-7 text-[#4B4B4B]">
                  {instructor.shortBio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#1C1C1E]/10 px-3 py-1 text-xs text-[#4B4B4B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row">
          <Link
            href="/schedule"
            className="rounded-full bg-[#C47A7A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            View Schedule
          </Link>

          <Link
            href="/programs"
            className="rounded-full border border-[#1C1C1E]/15 px-6 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
          >
            Back to Programs
          </Link>
        </div>
      </Section>
    </main>
  );
}