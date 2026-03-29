"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/programs", label: "Programs" },
    { href: "/schedule", label: "Schedule" },
    { href: "/tuition", label: "Tuition" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/announcements", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActiveLink = (href: string) => {
    return (
      pathname === href || (href === "/programs" && pathname.startsWith("/programs"))
    );
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#1C1C1E]/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-5 sm:px-6 lg:h-24 lg:px-16">
        <Link href="/" className="relative z-20 flex items-center">
          <img
            src="/logo.png"
            alt="CREATE 308"
            className="h-12 w-auto brightness-0 invert sm:h-14 lg:h-18"
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-base font-medium md:flex">
          {navItems.map((item) => {
            const active = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden md:block">
          <Link
            href="/parent-portal"
            className="rounded-full bg-[#C47A7A] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Parent Portal
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">
            {mobileMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#1C1C1E]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "max-h-[85vh] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-white/10 py-4 text-base transition ${
                    active ? "text-white" : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-5">
            <Link
              href="/parent-portal"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#C47A7A] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Parent Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}