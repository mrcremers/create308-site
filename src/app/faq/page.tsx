import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import {
  faqCategoryMeta,
  getFeaturedFaqs,
  getFaqsByCategory,
  type FAQCategory,
} from "@/data/faqs";

const categoryOrder: FAQCategory[] = [
  "getting-started",
  "classes-and-programs",
  "policies-and-logistics",
  "performances-and-growth",
];

export default function FAQPage() {
  const featuredFaqs = getFeaturedFaqs();

  return (
    <main>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Helpful answers for families exploring dance, musical theatre, and music at CREATE 308."
      />

      <Section className="bg-[#EFE8E3]">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
            Quick Answers
          </p>

          <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
            Common questions families ask first
          </h2>

          <p className="mx-auto max-w-3xl text-sm sm:text-lg text-[#4B4B4B]">
            These are some of the most helpful starting points for families who
            are new to the studio.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {featuredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-serif sm:text-2xl">
                {faq.question}
              </h3>
              <p className="leading-7 text-[#4B4B4B]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {categoryOrder.map((category, index) => {
        const meta = faqCategoryMeta[category];
        const items = getFaqsByCategory(category);

        return (
          <Section
            key={category}
            className={index % 2 === 1 ? "bg-[#EFE8E3]" : ""}
          >
            <div className="mb-10 text-center sm:mb-12">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
                {meta.label}
              </p>

              <h2 className="mb-4 text-3xl font-serif sm:text-4xl md:text-5xl">
                {meta.heading}
              </h2>

              <p className="mx-auto max-w-3xl text-sm sm:text-lg text-[#4B4B4B]">
                {meta.description}
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6">
              {items.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-8 shadow-sm"
                >
                  <h3 className="mb-4 text-xl font-serif sm:text-2xl">
                    {faq.question}
                  </h3>
                  <p className="leading-7 text-[#4B4B4B]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Section>
        );
      })}

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
            Still Have Questions?
          </p>

          <h2 className="mb-5 text-3xl font-serif sm:text-4xl md:text-5xl">
            We’re happy to help you find the right fit
          </h2>

          <p className="mb-6 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
            Every student and family is different. If you are still unsure where
            to start, reaching out directly is the best way to get guidance.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#C47A7A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Contact the Studio
            </Link>

            <Link
              href="/programs"
              className="rounded-full border border-[#1C1C1E]/15 px-6 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}