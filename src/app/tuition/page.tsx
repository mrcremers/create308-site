import Section from "@/components/Section";
import PageHero from "@/components/PageHero";

export default function TuitionPage() {
  return (
    <main>
      <PageHero
        title="Tuition"
        subtitle="Simple and transparent pricing for all programs."
      />

      <Section>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
              Pricing
            </p>
            <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
              Flexible options for families
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-lg text-[#4B4B4B]">
              A clean starting point for presenting tuition in a way that feels
              clear, elevated, and easy to compare.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {["1 Class", "2 Classes", "Unlimited"].map((tier) => (
              <div
                key={tier}
                className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 text-center shadow-sm"
              >
                <h3 className="mb-2 text-xl font-serif sm:text-2xl">{tier}</h3>
                <p className="mb-4 text-3xl sm:text-4xl font-serif text-[#1C1C1E]">
                  $XX
                </p>
                <p className="text-sm sm:text-base text-[#4B4B4B]">
                  Flexible options designed to fit your family.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}