import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#1C1C1E] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-16 lg:grid-cols-4 lg:px-16">
        <div>
          <img
            src={site.branding.logo}
            alt={site.name}
            className="mb-4 h-20 w-auto"
          />
          <p className="text-sm leading-6 text-white/70">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-white/60">
            Explore
          </h3>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            {site.navigation.explore.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-white/60">
            Support
          </h3>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            {site.navigation.support.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-white/60">
            Contact
          </h3>
          <p className="text-sm text-white/70">{site.location.display}</p>
          <p className="mt-2 text-sm text-white/70">
            <a href={`tel:${site.contact.phoneRaw}`}>{site.contact.phone}</a>
          </p>
          <p className="mt-2 text-sm text-white/70">
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}