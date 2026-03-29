import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-20 bg-[#1C1C1E] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-4 lg:gap-12 lg:px-16 lg:py-16">
        <div className="lg:pr-6">
          <img
            src={site.branding.logo}
            alt={site.name}
            className="mb-4 h-14 w-auto sm:h-16 lg:h-18"
          />
          <p className="max-w-sm text-sm leading-6 text-white/70">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.22em] text-white/55 sm:text-sm">
            Explore
          </h3>
          <div className="flex flex-col gap-2.5 text-sm text-white/70">
            {site.navigation.explore.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.22em] text-white/55 sm:text-sm">
            Support
          </h3>
          <div className="flex flex-col gap-2.5 text-sm text-white/70">
            {site.navigation.support.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.22em] text-white/55 sm:text-sm">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-white/70">
            <p>{site.location.display}</p>

            <p>
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="transition hover:text-white"
              >
                {site.contact.phone}
              </a>
            </p>

            <p>
              <a
                href={`mailto:${site.contact.email}`}
                className="transition hover:text-white"
              >
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs sm:px-6 sm:py-6 sm:text-sm text-white/50 lg:px-16">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}