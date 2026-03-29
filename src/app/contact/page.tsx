import Link from "next/link";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact CREATE 308"
        subtitle="Questions about programs, getting started, or finding the right fit? We’d love to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
              Send a Message
            </p>

            <h2 className="mb-6 text-4xl font-serif leading-tight md:text-5xl">
              We’d love to hear from you
            </h2>

            <p className="mb-6 text-lg leading-8 text-[#4B4B4B]">
              Have a question about programs, scheduling, or where to begin?
              Send us a message and we’ll be in touch.
            </p>

            <p className="mb-10 text-lg leading-8 text-[#4B4B4B]">
              Whether you are exploring options for the first time or looking
              for the right fit for your student, we are happy to help.
            </p>

            <div className="flex h-full flex-col rounded-[32px] bg-white p-8 shadow-sm">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
                Studio Information
              </p>

              <h3 className="mb-6 text-3xl font-serif">How to reach us</h3>

              <div className="space-y-6 text-[#4B4B4B]">
                <div>
                  <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#6E5A73]">
                    Location
                  </p>
                  <p className="text-lg">{site.location.display}</p>
                </div>

                <div>
                  <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#6E5A73]">
                    Phone
                  </p>
                  <a
                    href={`tel:${site.contact.phoneRaw}`}
                    className="text-lg transition hover:text-[#6E5A73]"
                  >
                    {site.contact.phone}
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#6E5A73]">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-lg transition hover:text-[#6E5A73]"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col rounded-[32px] bg-white p-8 shadow-sm">
            <form className="flex flex-1 flex-col space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E5A73]"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-2xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-[#1C1C1E] outline-none transition focus:border-[#6E5A73]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E5A73]"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-2xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-[#1C1C1E] outline-none transition focus:border-[#6E5A73]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E5A73]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-[#1C1C1E] outline-none transition focus:border-[#6E5A73]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E5A73]"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(308) 000-0000"
                    className="w-full rounded-2xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-[#1C1C1E] outline-none transition focus:border-[#6E5A73]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E5A73]"
                >
                  Interested In
                </label>
                <select
                  id="interest"
                  className="w-full rounded-2xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-[#1C1C1E] outline-none transition focus:border-[#6E5A73]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a program area
                  </option>
                  <option value="dance">Dance</option>
                  <option value="theatre">Musical Theatre</option>
                  <option value="music">Music</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#6E5A73]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us a little about what you’re looking for."
                  className="w-full rounded-2xl border border-black/10 bg-[#F7F6F4] px-4 py-3 text-[#1C1C1E] outline-none transition focus:border-[#6E5A73]"
                />
              </div>

              <div className="mt-auto pt-4">
                <button
                  type="button"
                  className="rounded-full bg-[#C47A7A] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <Section className="bg-[#EFE8E3]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#6E5A73]">
            Need a Starting Point?
          </p>

          <h2 className="mb-6 text-4xl font-serif md:text-5xl">
            Explore programs before you reach out
          </h2>

          <p className="mb-8 text-lg leading-8 text-[#4B4B4B]">
            Families who want a clearer picture before contacting the studio can
            start by exploring programs or reading through what to expect.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="rounded-full bg-[#C47A7A] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore Programs
            </Link>

            <Link
              href="/what-to-expect"
              className="rounded-full border border-[#1C1C1E]/15 px-8 py-3 text-sm font-medium text-[#1C1C1E] transition hover:bg-white"
            >
              What to Expect
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}