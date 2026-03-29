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
      <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#1C1C1E] text-white">
        <div className="absolute inset-0">
          <img
            src="/hero.jpeg"
            alt="CREATE 308 dancer"
            className="h-full w-full object-cover opacity-70"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

        <div className="relative z-10 flex min-h-[88vh] items-center px-8 pt-28 pb-20 lg:px-16 lg:pl-24 xl:pl-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/70">
              Dance • Theatre • Music
            </p>

            <h1 className="mb-6 text-5xl font-serif leading-tight md:text-6xl lg:text-7xl">
              A Studio Where Passion Takes the Stage
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-white/80">
              Training, creativity, and confidence through dance, theatre, and
              music in a welcoming environment where students can grow at every
              stage.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs"
                className="rounded-full bg-[#C47A7A] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore All Programs
              </Link>

              <Link
                href="/schedule"
                className="rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F4] px-8 py-24 text-[#1C1C1E] lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              Programs
            </p>
            <h2 className="mb-4 text-4xl font-serif md:text-5xl">
              Choose your creative path
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#4B4B4B]">
              Already know what your student is interested in? Start with a
              program area below.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {homepageProgramCards.map((program) => (
              <Link
                key={program.key}
                href={program.href}
                className="block overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-serif">{program.title}</h3>
                  <p className="text-[#4B4B4B]">{program.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-lg text-[#4B4B4B]">
              Still exploring? Use our guided programs page to find the right
              fit by age, interest, and experience.
            </p>
            <Link
              href="/programs"
              className="rounded-full border border-[#1C1C1E]/15 px-8 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE8E3] px-8 py-24 text-[#1C1C1E] lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src="/stockstudio1.jpeg"
              alt="Students in studio"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              Why CREATE 308
            </p>

            <h2 className="mb-6 text-4xl font-serif leading-tight md:text-5xl">
              A welcoming place to grow, perform, and belong
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-[#4B4B4B]">
              CREATE 308 offers high-quality instruction in a supportive
              environment where students can build confidence, creativity, and
              skill at every level. Whether they are just beginning or ready for
              more advanced opportunities, students are encouraged to grow in a
              way that feels inspiring and personal.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-serif">Quality Instruction</h3>
                <p className="text-[#4B4B4B]">
                  Thoughtful training that builds strong fundamentals and
                  artistry.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-serif">
                  Welcoming Community
                </h3>
                <p className="text-[#4B4B4B]">
                  A place where students and families feel supported from the
                  start.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-serif">Creative Growth</h3>
                <p className="text-[#4B4B4B]">
                  Opportunities to explore movement, performance, and self
                  expression.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-serif">
                  Meaningful Experience
                </h3>
                <p className="text-[#4B4B4B]">
                  Programs designed to inspire confidence both on stage and
                  beyond it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F4] px-8 py-24 text-[#1C1C1E] lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              For Families
            </p>
            <h2 className="mb-4 text-4xl font-serif md:text-5xl">
              Clear steps for a confident start
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#4B4B4B]">
              From understanding the experience to finding the right fit and
              taking the next step, CREATE 308 is designed to make the process
              simple, welcoming, and easy to follow.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Link
              href="/what-to-expect"
              className="rounded-[28px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 text-5xl font-serif text-[#6E5A73]/80">
                01
              </div>
              <h3 className="mb-3 text-2xl font-serif">What to Expect</h3>
              <p className="leading-7 text-[#4B4B4B]">
                Learn how the studio experience works, what families can expect,
                and how students are supported as they grow in confidence,
                creativity, and skill.
              </p>
            </Link>

            <Link
              href="/programs"
              className="rounded-[28px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 text-5xl font-serif text-[#6E5A73]/80">
                02
              </div>
              <h3 className="mb-3 text-2xl font-serif">
                Explore Available Programs
              </h3>
              <p className="leading-7 text-[#4B4B4B]">
                Use the guided programs page to explore options by age,
                interests, and goals.
              </p>
            </Link>

            <Link
              href="/contact"
              className="rounded-[28px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 text-5xl font-serif text-[#6E5A73]/80">
                03
              </div>
              <h3 className="mb-3 text-2xl font-serif">
                Reach Out and Get Started
              </h3>
              <p className="leading-7 text-[#4B4B4B]">
                Connect with the studio, ask questions, and take the next step
                toward finding the right fit for your student.
              </p>
            </Link>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="rounded-full bg-[#C47A7A] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore All Programs
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-[#1C1C1E]/15 px-8 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE8E3] px-8 py-24 text-[#1C1C1E] lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              Latest News
            </p>
            <h2 className="mb-4 text-4xl font-serif md:text-5xl">
              Stay connected with what’s happening
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#4B4B4B]">
              Important updates, registration information, and seasonal studio
              news all in one place.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {latestAnnouncements.map((announcement) => (
              <Link
                key={announcement.id}
                href="/announcements"
                className="block rounded-[28px] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#EFE8E3] px-3 py-1 text-xs uppercase tracking-wide text-[#6E5A73]">
                    {announcementCategoryLabels[announcement.category]}
                  </span>
                  <span className="text-sm text-[#4B4B4B]">
                    {announcement.publishedAt}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-serif">
                  {announcement.title}
                </h3>

                <p className="mb-5 leading-7 text-[#4B4B4B]">
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