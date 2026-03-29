"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/programs", label: "Programs" },
    { href: "/schedule", label: "Schedule" },
    { href: "/tuition", label: "Tuition" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/announcements", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#1C1C1E]/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-25 max-w-7xl items-center px-8 lg:px-16">
        
        {/* Logo (left) */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="CREATE 308"
            className="h-18 w-auto brightness-0 invert"
          />
        </Link>

        {/* Centered Nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-base font-medium md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/programs" && pathname.startsWith("/programs"));

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

        {/* Right-aligned button */}
        <div className="ml-auto hidden md:block">
          <Link
            href="/parent-portal"
            className="rounded-full bg-[#C47A7A] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Parent Portal
          </Link>
        </div>
      </div>
    </header>
  );
}