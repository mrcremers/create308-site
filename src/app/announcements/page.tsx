import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import {
  announcementCategoryLabels,
  getAllAnnouncements,
  getFeaturedAnnouncements,
} from "@/data/announcements";

export default function AnnouncementsPage() {
  const featuredAnnouncements = getFeaturedAnnouncements();
  const allAnnouncements = getAllAnnouncements();

  return (
    <main>
      <PageHero
        title="Announcements"
        subtitle="Studio news, important updates, registration information, and upcoming highlights all in one place."
      />

      {featuredAnnouncements.length > 0 && (
        <Section className="bg-[#EFE8E3]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              Featured Updates
            </p>

            <h2 className="mb-4 text-4xl font-serif md:text-5xl">
              What families should know first
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-[#4B4B4B]">
              Start here for the most relevant and timely studio updates.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredAnnouncements.map((announcement) => (
              <article
                key={announcement.id}
                className="rounded-[28px] bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#EFE8E3] px-3 py-1 text-xs uppercase tracking-wide text-[#6E5A73]">
                    {announcementCategoryLabels[announcement.category]}
                  </span>
                  <span className="text-sm text-[#4B4B4B]">
                    {announcement.publishedAt}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-serif">
                  {announcement.title}
                </h3>

                <p className="mb-6 leading-7 text-[#4B4B4B]">
                  {announcement.excerpt}
                </p>

                <div className="space-y-4">
                  {announcement.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-7 text-[#4B4B4B]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            All Updates
          </p>

          <h2 className="mb-4 text-4xl font-serif md:text-5xl">
            Studio news and important information
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-[#4B4B4B]">
            A simple, organized place for families to check back for what is
            new and what matters most.
          </p>
        </div>

        <div className="grid gap-8">
          {allAnnouncements.map((announcement) => (
            <article
              key={announcement.id}
              className="rounded-[28px] bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#EFE8E3] px-3 py-1 text-xs uppercase tracking-wide text-[#6E5A73]">
                  {announcementCategoryLabels[announcement.category]}
                </span>
                <span className="text-sm text-[#4B4B4B]">
                  {announcement.publishedAt}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-serif">
                {announcement.title}
              </h3>

              <p className="mb-6 leading-7 text-[#4B4B4B]">
                {announcement.excerpt}
              </p>

              <div className="space-y-4">
                {announcement.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="leading-7 text-[#4B4B4B]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFE8E3]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            Looking for the Next Step?
          </p>

          <h2 className="mb-6 text-4xl font-serif md:text-5xl">
            Explore programs or get in touch
          </h2>

          <p className="mb-8 text-lg leading-8 text-[#4B4B4B]">
            Families who are new to CREATE 308 can explore programs, learn what
            to expect, and reach out directly with any questions.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="rounded-full bg-[#C47A7A] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore Programs
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