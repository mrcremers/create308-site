import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import {
  featuredInstructors,
  getAllInstructors,
  type InstructorDiscipline,
} from "@/data/instructors";

function formatDisciplines(disciplines: InstructorDiscipline[]) {
  return disciplines
    .map((discipline) => {
      if (discipline === "theatre") return "Musical Theatre";
      return discipline.charAt(0).toUpperCase() + discipline.slice(1);
    })
    .join(" • ");
}

export default function AboutPage() {
  const featuredInstructor = featuredInstructors[0];
  const allInstructors = getAllInstructors({ includeFeatured: false });

  return (
    <main>
      <PageHero
        title="About CREATE 308"
        subtitle="A welcoming studio centered on creative growth, strong instruction, and meaningful experiences for students and families."
      />

      <Section>
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[28px] sm:rounded-[32px]">
            <img
              src="/stockstudio1.jpeg"
              alt="Students at CREATE 308"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
              Our Studio
            </p>

            <h2 className="mb-5 text-3xl font-serif sm:text-4xl md:text-5xl">
              Elevated training in a supportive environment
            </h2>

            <p className="mb-5 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
              CREATE 308 is designed to be a place where students can build
              confidence, creativity, and skill through dance, musical theatre,
              and music.
            </p>

            <p className="mb-5 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
              The goal is to offer high quality instruction in an environment
              that still feels personal, welcoming, and grounded for families.
              Whether a student is just beginning or continuing to grow,
              CREATE 308 is built to support that journey with care and intention.
            </p>

            <p className="text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
              We believe strong arts training should develop more than skill
              alone. It should also help students grow in discipline,
              self-expression, confidence, and connection.
            </p>
          </div>
        </div>
      </Section>

      {featuredInstructor && (
        <Section className="bg-[#EFE8E3]">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
                Studio Leadership
              </p>

              <h2 className="mb-5 text-3xl font-serif sm:text-4xl md:text-5xl">
                Meet the director
              </h2>

              <p className="mb-2 text-lg font-serif sm:text-xl text-[#1C1C1E]">
                {featuredInstructor.name}
              </p>

              <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6E5A73]">
                {featuredInstructor.role}
              </p>

              <p className="mb-5 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6E5A73]">
                Teaches: {formatDisciplines(featuredInstructor.disciplines)}
              </p>

              {featuredInstructor.fullBio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-5 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B] last:mb-0"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {featuredInstructor.specialties.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-3 py-2 text-xs sm:text-sm text-[#6E5A73] shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] sm:rounded-[32px]">
              <img
                src={featuredInstructor.image}
                alt={featuredInstructor.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Section>
      )}

      <Section>
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
            Instructors
          </p>

          <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
            Meet the teaching team
          </h2>

          <p className="mx-auto max-w-3xl text-sm sm:text-lg text-[#4B4B4B]">
            Our instructors bring experience, encouragement, and a genuine
            commitment to helping students grow in confidence, creativity, and skill.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allInstructors.map((instructor) => (
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
                <h3 className="mb-2 text-xl font-serif sm:text-2xl">
                  {instructor.name}
                </h3>

                <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6E5A73]">
                  {instructor.role}
                </p>

                <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6E5A73]">
                  Teaches: {formatDisciplines(instructor.disciplines)}
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
      </Section>

      <Section className="bg-[#EFE8E3]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
            Ready to Learn More?
          </p>

          <h2 className="mb-5 text-3xl font-serif sm:text-4xl md:text-5xl">
            Find the right path for your student
          </h2>

          <p className="mb-6 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
            Explore programs, learn what to expect, and reach out with any
            questions as you decide what feels like the best fit.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/programs"
              className="rounded-full bg-[#C47A7A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore Programs
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#1C1C1E]/15 px-6 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
            >
              Contact the Studio
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}