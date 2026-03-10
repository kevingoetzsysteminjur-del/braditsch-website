"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";

const navItems = [
  {
    label: "Über mich",
    href: "/ueber-mich",
    dropdown: [
      { label: "Werdegang", href: "/ueber-mich#werdegang" },
      { label: "Laufbahn", href: "/ueber-mich#laufbahn" },
    ],
  },
  {
    label: "Angebote",
    href: "#angebote",
    dropdown: [
      { label: "Klang", href: "/klang" },
      { label: "Stimme", href: "/stimme" },
      { label: "Medialität", href: "/medialitaet" },
    ],
  },
  {
    label: "Podcast",
    href: "/podcast",
    dropdown: [{ label: "Blog", href: "/podcast#blog" }],
  },
  {
    label: "Audio Shop",
    href: "/audio-shop",
    dropdown: [{ label: "Klangwirkung", href: "/audio-shop#klangwirkung" }],
  },
  {
    label: "Termine",
    href: "/termine",
    dropdown: [{ label: "Galerie", href: "/galerie" }],
  },
  {
    label: "Hildegard von Bingen",
    href: "/hildegard-von-bingen",
    dropdown: [
      { label: "Vale Retro Podcast", href: "/hildegard-von-bingen#podcast" },
      { label: "Modern Mystic Music", href: "/hildegard-von-bingen#music" },
    ],
  },
  {
    label: "Kontakt",
    href: "/termine",
    dropdown: [],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-sm border-b border-[#E8D8C4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span
              className="text-xl font-bold text-stone-900 group-hover:text-[#B8860B] transition-colors"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Antonia Braditsch
            </span>
            <span className="text-xs text-stone-500 tracking-widest uppercase">
              Klangtherapie · Heilfrequenzen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-stone-700 hover:text-[#B8860B] transition-colors rounded-md hover:bg-[#F5EDE0] font-medium"
                >
                  {item.label}
                  {item.dropdown.length > 0 && (
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  )}
                </Link>
                {item.dropdown.length > 0 && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-[#E8D8C4] py-2 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-stone-700 hover:text-[#B8860B] hover:bg-[#FFF8F0] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
              className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              Termin vereinbaren
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-[#F5EDE0] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#E8D8C4] py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-stone-800 hover:text-[#B8860B] hover:bg-[#F5EDE0] rounded-lg font-medium transition-colors text-base"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown.length > 0 && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-stone-600 hover:text-[#B8860B] hover:bg-[#F5EDE0] rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 px-4">
              <Link
                href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                className="flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-semibold px-5 py-3 rounded-xl transition-colors min-h-[48px] w-full"
                onClick={() => setMobileOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                Termin vereinbaren
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
