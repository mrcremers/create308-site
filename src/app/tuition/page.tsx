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
        <div className="grid md:grid-cols-3 gap-6">
          {["1 Class", "2 Classes", "Unlimited"].map((tier) => (
            <div
              key={tier}
              className="bg-white p-8 rounded-2xl shadow-sm text-center"
            >
              <h2 className="text-xl font-serif mb-2">{tier}</h2>
              <p className="text-3xl mb-4">$XX</p>
              <p className="text-sm text-[#4B4B4B]">
                Flexible options designed to fit your family.
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}