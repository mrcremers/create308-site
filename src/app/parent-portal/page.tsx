import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";

export default function ParentPortalPage() {
  return (
    <main>
      <PageHero
        title="Parent Portal"
        subtitle="This area is planned for returning studio families and is still being developed."
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            In Development
          </p>

          <h2 className="mb-6 text-4xl font-serif md:text-5xl">
            This page is coming soon
          </h2>

          <p className="mb-6 text-lg leading-8 text-[#4B4B4B]">
            The Parent Portal is planned as a place for studio families to
            access important information, updates, and future account tools.
          </p>

          <p className="mb-10 text-lg leading-8 text-[#4B4B4B]">
            For now, this section is still in development as the site structure
            continues to come together.
          </p>

        

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/announcements"
              className="rounded-full bg-[#C47A7A] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View Announcements
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#1C1C1E]/15 px-8 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
            >
              Contact the Studio
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}