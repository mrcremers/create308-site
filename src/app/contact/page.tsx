import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact CREATE 308"
        subtitle="Questions about programs or getting started? We’d love to help."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
              Send a Message
            </p>

            <h2 className="mb-5 text-3xl font-serif leading-tight sm:text-4xl md:text-5xl">
              We’d love to hear from you
            </h2>

            <p className="mb-5 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
              Have a question about programs, scheduling, or where to begin?
              Send us a message and we’ll be in touch.
            </p>

            <p className="mb-8 text-sm sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B]">
              Whether you are exploring options for the first time or looking
              for the right fit, we are happy to help.
            </p>

            {/* INFO CARD */}
            <div className="rounded-[24px] sm:rounded-[32px] bg-white p-6 sm:p-8 shadow-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#6E5A73] sm:text-sm">
                Studio Information
              </p>

              <h3 className="mb-5 text-2xl sm:text-3xl font-serif">
                How to reach us
              </h3>

              <div className="space-y-5 text-[#4B4B4B]">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                    Location
                  </p>
                  <p className="text-base sm:text-lg">
                    {site.location.display}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                    Phone
                  </p>
                  <a
                    href={`tel:${site.contact.phoneRaw}`}
                    className="text-base sm:text-lg hover:text-[#6E5A73]"
                  >
                    {site.contact.phone}
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-base sm:text-lg hover:text-[#6E5A73]"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[24px] sm:rounded-[32px] bg-white p-6 sm:p-8 shadow-sm">
            <form className="flex flex-col space-y-5 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-sm sm:text-base outline-none focus:border-[#6E5A73]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-sm sm:text-base outline-none focus:border-[#6E5A73]"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-sm sm:text-base outline-none focus:border-[#6E5A73]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(308) 000-0000"
                    className="w-full rounded-xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-sm sm:text-base outline-none focus:border-[#6E5A73]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                  Interested In
                </label>
                <select
                  className="w-full rounded-xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-sm sm:text-base outline-none focus:border-[#6E5A73]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  <option value="dance">Dance</option>
                  <option value="theatre">Musical Theatre</option>
                  <option value="music">Music</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#6E5A73]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us a little about what you’re looking for."
                  className="w-full rounded-xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-sm sm:text-base outline-none focus:border-[#6E5A73]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="w-full rounded-full bg-[#C47A7A] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#EFE8E3]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-serif">
            Want to explore first?
          </h2>

          <p className="mb-6 text-sm sm:text-lg text-[#4B4B4B]">
            Browse programs or learn what to expect before reaching out.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/programs"
              className="rounded-full bg-[#C47A7A] px-6 py-3 text-sm text-white"
            >
              Explore Programs
            </Link>

            <Link
              href="/what-to-expect"
              className="rounded-full border px-6 py-3 text-sm"
            >
              What to Expect
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}