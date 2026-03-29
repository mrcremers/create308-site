import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";

export default function WhatToExpectPage() {
  return (
    <main>
      <PageHero
        title="What to Expect"
        subtitle="A welcoming guide for families who are new to dance, musical theatre, and music lessons."
      />

      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
            Starting something new can feel exciting and overwhelming at the
            same time. Whether your child is interested in dance, musical
            theatre, or music lessons, CREATE 308 is designed to help families
            feel informed, supported, and confident from the very beginning.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-[28px] sm:rounded-[32px]">
            <img
              src="/stockstudio1.jpeg"
              alt="Students in studio"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              First Things First
            </p>
            <h2 className="mb-5 text-3xl font-serif sm:text-4xl md:text-5xl">
              You do not need to know everything before you begin
            </h2>
            <p className="mb-5 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
              Many families come in with questions like: What class is right for
              my child? Do they need experience? What should they wear? What if
              they are nervous?
            </p>
            <p className="text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
              That is completely normal. Most students begin with curiosity, not
              expertise. The goal at the start is not perfection. It is helping
              students feel comfortable, supported, and excited to learn.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            The Basics
          </p>
          <h2 className="text-3xl font-serif sm:text-4xl md:text-5xl">
            What these programs are really about
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-serif sm:text-2xl">Dance</h3>
            <p className="leading-7 text-[#4B4B4B]">
              Dance classes help students develop coordination, musicality,
              confidence, and movement skills. Some students come for fun and
              exploration. Others grow into more serious training over time.
            </p>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-serif sm:text-2xl">Musical Theatre</h3>
            <p className="leading-7 text-[#4B4B4B]">
              Musical theatre blends acting, singing, movement, and
              performance. It is a strong fit for students who enjoy creativity,
              expression, and being part of something collaborative.
            </p>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-serif sm:text-2xl">Music Lessons</h3>
            <p className="leading-7 text-[#4B4B4B]">
              Music instruction helps students build skill, discipline,
              confidence, and expression over time. Lessons are often more
              individualized and can grow with the student’s goals.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            New Family Guide
          </p>
          <h2 className="text-3xl font-serif sm:text-4xl md:text-5xl">
            What your first experience may look like
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-5 text-4xl sm:text-5xl font-serif text-[#6E5A73]/80">01</div>
            <h3 className="mb-3 text-xl font-serif sm:text-2xl">Explore</h3>
            <p className="leading-7 text-[#4B4B4B]">
              Start by learning about programs, age groups, and options that
              feel like a good fit.
            </p>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-5 text-4xl sm:text-5xl font-serif text-[#6E5A73]/80">02</div>
            <h3 className="mb-3 text-xl font-serif sm:text-2xl">Ask Questions</h3>
            <p className="leading-7 text-[#4B4B4B]">
              Reach out if you are unsure where to begin. It is normal to need
              guidance at the start.
            </p>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-5 text-4xl sm:text-5xl font-serif text-[#6E5A73]/80">03</div>
            <h3 className="mb-3 text-xl font-serif sm:text-2xl">Attend the First Class</h3>
            <p className="leading-7 text-[#4B4B4B]">
              The first class is often about getting comfortable, learning the
              environment, and beginning to build confidence.
            </p>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-5 text-4xl sm:text-5xl font-serif text-[#6E5A73]/80">04</div>
            <h3 className="mb-3 text-xl font-serif sm:text-2xl">Grow Over Time</h3>
            <p className="leading-7 text-[#4B4B4B]">
              Students develop at different speeds. Progress is not about doing
              everything perfectly on day one.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              For Dance and Theatre
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl font-serif">What students may need</h2>
            <ul className="space-y-3 text-[#4B4B4B] leading-7">
              <li>• Comfortable clothing that allows movement</li>
              <li>• Appropriate shoes depending on class type</li>
              <li>• Water bottle and a positive attitude</li>
              <li>• Time to adjust if the environment feels new</li>
            </ul>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              For Music Lessons
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl font-serif">What students may need</h2>
            <ul className="space-y-3 text-[#4B4B4B] leading-7">
              <li>• A willingness to learn and practice consistently</li>
              <li>• Patience as skills build over time</li>
              <li>• Materials or books depending on instruction</li>
              <li>• Encouragement at home without pressure</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-4 text-2xl sm:text-3xl font-serif">About competitive dance</h2>
            <p className="leading-7 text-[#4B4B4B]">
              Some dance studios offer both recreational and competitive paths.
              Recreational programs are often focused on learning, enjoyment,
              growth, and performance opportunities without the same level of
              time commitment. Competitive programs usually involve additional
              rehearsals, performances, training expectations, and travel.
            </p>
          </div>

          <div className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-4 text-2xl sm:text-3xl font-serif">
              It is okay to start simple
            </h2>
            <p className="leading-7 text-[#4B4B4B]">
              Families do not need to jump into the most advanced or demanding
              option right away. In many cases, the best first step is simply
              finding a welcoming class where a student can build confidence and
              discover what they enjoy.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            The Goal
          </p>
          <h2 className="mb-5 text-3xl font-serif sm:text-4xl md:text-5xl">
            A confident start matters
          </h2>
          <p className="mb-6 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
            The best beginning is one where students feel welcomed, families
            feel informed, and everyone understands that growth comes with time,
            practice, and encouragement.
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
              Ask a Question
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}