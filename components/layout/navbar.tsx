"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Klang", href: "/klang" },
  { label: "Stimme", href: "/stimme" },
  { label: "Medialität", href: "/medialitaet" },
  { label: "Hildegard", href: "/hildegard-von-bingen" },
  { label: "Audio Shop", href: "/audio-shop" },
  { label: "Termine", href: "/termine" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setCartOpen, bouncing } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(166,137,77,0.12)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-10 flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              color: "var(--text)",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              letterSpacing: "0.14em",
              textDecoration: "none",
            }}
          >
            Antonia Braditsch
          </Link>

          {/* Desktop Nav – only on xl (1280px+) */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.1em] transition-opacity hover:opacity-50 whitespace-nowrap"
                style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--text)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* CTA – only desktop */}
            <Link
              href="/termine"
              className="hidden xl:inline-flex btn-gold-outline"
              style={{ padding: "10px 22px", fontSize: "10px", minHeight: "40px" }}
            >
              Termin vereinbaren
            </Link>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-60"
              style={{ color: "var(--text)" }}
              aria-label="Warenkorb"
            >
              <ShoppingBag
                className={`w-5 h-5 transition-transform duration-200 ${bouncing ? "scale-125" : "scale-100"}`}
              />
              {totalItems > 0 && (
                <span
                  className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full text-[9px] flex items-center justify-center"
                  style={{ backgroundColor: "var(--gold)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger – below xl */}
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-60"
              aria-label="Menü öffnen"
              style={{ color: "var(--text)" }}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Full-Screen Overlay */}
      <div
        className="fixed inset-0 z-[100] flex flex-col transition-all duration-500"
        style={{
          backgroundColor: "var(--bg)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(-16px)",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 h-20 shrink-0">
          <span
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              color: "var(--text)",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              letterSpacing: "0.14em",
            }}
          >
            Antonia Braditsch
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-11 h-11 transition-opacity hover:opacity-60"
            aria-label="Menü schließen"
            style={{ color: "var(--text)" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gold divider */}
        <div className="mx-5 sm:mx-8" style={{ height: "1px", backgroundColor: "var(--gold)", opacity: 0.25 }} />

        {/* Links */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-10 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl sm:text-4xl font-light tracking-[0.06em] transition-opacity hover:opacity-50 min-h-[48px] flex items-center"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                color: "var(--text)",
                transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/termine"
            onClick={() => setMobileOpen(false)}
            className="btn-gold-outline mt-6"
          >
            Termin vereinbaren
          </Link>
        </nav>

        {/* Bottom */}
        <div className="px-6 pb-10 text-center shrink-0">
          <p className="text-[11px] uppercase tracking-[0.15em] opacity-40"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--text)" }}>
            antonia@braditsch.at
          </p>
        </div>
      </div>
    </>
  );
}
