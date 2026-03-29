import Link from "next/link";
import { homepageProgramCards } from "@/data/programs";
import {
  announcementCategoryLabels,
  getAllAnnouncements,
} from "@/data/announcements";

export default function Home() {
  const latestAnnouncements = getAllAnnouncements().slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F7F6F4] text-[#1C1C1E]">
      {/* HERO */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] w-full overflow-hidden bg-[#1C1C1E] text-white">
        <div className="absolute inset-0">
          <img
            src="/hero.jpeg"
            alt="CREATE 308 dancer"
            className="h-full w-full object-cover opacity-70"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

        <div className="relative z-10 flex min-h-[75vh] sm:min-h-[80vh] items-center px-5 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-16 lg:pl-24 xl:pl-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/70 sm:text-sm">
              Dance • Theatre • Music
            </p>

            <h1 className="mb-6 text-4xl font-serif leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              A Studio Where Passion Takes the Stage
            </h1>

            <p className="mb-8 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Training, creativity, and confidence through dance, theatre, and
              music in a welcoming environment where students can grow at every
              stage.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/programs"
                className="rounded-full bg-[#C47A7A] px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore All Programs
              </Link>

              <Link
                href="/schedule"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-[#F7F6F4] px-5 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
              Programs
            </p>
            <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
              Choose your creative path
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#4B4B4B] sm:text-lg">
              Already know what your student is interested in? Start with a
              program area below.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {homepageProgramCards.map((program) => (
              <Link
                key={program.key}
                href={program.href}
                className="block overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-48 sm:h-56 w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="mb-3 text-xl font-serif sm:text-2xl">
                    {program.title}
                  </h3>
                  <p className="text-[#4B4B4B]">{program.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <p className="mb-4 text-base text-[#4B4B4B] sm:text-lg">
              Still exploring? Use our guided programs page to find the right
              fit by age, interest, and experience.
            </p>
            <Link
              href="/programs"
              className="rounded-full border border-[#1C1C1E]/15 px-7 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-[#EFE8E3] px-5 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] sm:rounded-[32px]">
            <img
              src="/stockstudio1.jpeg"
              alt="Students in studio"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
              Why CREATE 308
            </p>

            <h2 className="mb-6 text-3xl font-serif leading-tight sm:text-4xl md:text-5xl">
              A welcoming place to grow, perform, and belong
            </h2>

            <p className="mb-8 max-w-xl text-base leading-7 text-[#4B4B4B] sm:text-lg sm:leading-8">
              CREATE 308 offers high-quality instruction in a supportive
              environment where students can build confidence, creativity, and
              skill at every level.
            </p>

            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-serif sm:text-xl">
                  Quality Instruction
                </h3>
                <p className="text-[#4B4B4B]">
                  Thoughtful training that builds strong fundamentals.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-serif sm:text-xl">
                  Welcoming Community
                </h3>
                <p className="text-[#4B4B4B]">
                  A place where students and families feel supported.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-serif sm:text-xl">
                  Creative Growth
                </h3>
                <p className="text-[#4B4B4B]">
                  Opportunities for expression and development.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-serif sm:text-xl">
                  Meaningful Experience
                </h3>
                <p className="text-[#4B4B4B]">
                  Confidence that extends beyond the studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY STEPS */}
      <section className="bg-[#F7F6F4] px-5 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
              For Families
            </p>
            <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
              Clear steps for a confident start
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[1, 2, 3].map((num, i) => {
              const links = [
                "/what-to-expect",
                "/programs",
                "/contact",
              ];
              const titles = [
                "What to Expect",
                "Explore Available Programs",
                "Reach Out and Get Started",
              ];
              const desc = [
                "Learn how the studio experience works.",
                "Explore options by age and interest.",
                "Connect and take the next step.",
              ];

              return (
                <Link
                  key={num}
                  href={links[i]}
                  className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-6 text-4xl font-serif text-[#6E5A73]/80 sm:text-5xl">
                    {String(num).padStart(2, "0")}
                  </div>
                  <h3 className="mb-3 text-xl font-serif sm:text-2xl">
                    {titles[i]}
                  </h3>
                  <p className="leading-7 text-[#4B4B4B]">{desc[i]}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="bg-[#EFE8E3] px-5 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
              Latest News
            </p>
            <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
              Stay connected
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {latestAnnouncements.map((announcement) => (
              <Link
                key={announcement.id}
                href="/announcements"
                className="block rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="rounded-full bg-[#EFE8E3] px-3 py-1 text-xs uppercase tracking-wide text-[#6E5A73]">
                    {announcementCategoryLabels[announcement.category]}
                  </span>
                  <span className="text-sm text-[#4B4B4B]">
                    {announcement.publishedAt}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-serif sm:text-2xl">
                  {announcement.title}
                </h3>

                <p className="mb-4 sm:mb-5 leading-7 text-[#4B4B4B]">
                  {announcement.excerpt}
                </p>

                <span className="text-sm font-medium text-[#6E5A73]">
                  View Updates →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}