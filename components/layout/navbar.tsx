"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Klang", href: "/klang" },
  { label: "Stimme", href: "/stimme" },
  { label: "Medialität", href: "/medialitaet" },
  { label: "Hildegard", href: "/hildegard-von-bingen" },
  { label: "Audio Shop", href: "/audio-shop" },
  { label: "Galerie", href: "/galerie" },
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
      <style>{`
        @media (min-width: 1100px) {
          .nav-desktop { display: flex !important; }
          .nav-hamburger { display: none !important; }
          .nav-cta { display: inline-flex !important; }
        }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(250,247,242,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(166,137,77,0.12)" : "1px solid transparent",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: "1400px", padding: "0 40px", height: "72px" }}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-70">
            <Image
              src="/images/braditsch-logo.png"
              alt="Antonia Braditsch"
              width={180}
              height={60}
              className="object-contain"
              style={{ maxWidth: "180px", width: "auto", height: "36px" }}
              priority
            />
          </Link>

          {/* Desktop Nav – 1100px+ */}
          <nav
            className="nav-desktop hidden items-center"
            style={{ gap: "28px", marginLeft: "40px", flex: 1, justifyContent: "center" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  color: "var(--text)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                  opacity: 1,
                  whiteSpace: "nowrap",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.45"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center" style={{ gap: "0", marginLeft: "40px" }}>
            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center justify-center transition-opacity hover:opacity-60"
              style={{ color: "var(--text)", width: "40px", height: "40px", marginLeft: "8px" }}
              aria-label="Warenkorb"
            >
              <ShoppingBag
                className={`w-5 h-5 transition-transform duration-200 ${bouncing ? "scale-125" : "scale-100"}`}
              />
              {totalItems > 0 && (
                <span
                  className="absolute rounded-full flex items-center justify-center"
                  style={{
                    top: "2px", right: "2px",
                    width: "15px", height: "15px",
                    backgroundColor: "var(--gold)", color: "#fff",
                    fontSize: "9px",
                    fontFamily: "var(--font-body), Georgia, serif",
                  }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger – below 1100px */}
            <button
              onClick={() => setMobileOpen(true)}
              className="nav-hamburger flex items-center justify-center transition-opacity hover:opacity-60"
              aria-label="Menü öffnen"
              style={{ color: "var(--text)", width: "40px", height: "40px", marginLeft: "4px" }}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet Overlay */}
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
        <div className="flex items-center justify-between shrink-0" style={{ padding: "0 24px", height: "72px" }}>
          <Image
            src="/images/braditsch-logo.png"
            alt="Antonia Braditsch"
            width={180}
            height={60}
            className="object-contain"
            style={{ maxWidth: "180px", width: "auto", height: "36px" }}
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center transition-opacity hover:opacity-60"
            aria-label="Menü schließen"
            style={{ color: "var(--text)", width: "44px", height: "44px" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div style={{ height: "1px", backgroundColor: "var(--gold)", opacity: 0.2, margin: "0 24px" }} />

        {/* Links */}
        <nav className="flex-1 flex flex-col items-center justify-center overflow-y-auto" style={{ gap: "24px", padding: "40px 24px" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center transition-opacity hover:opacity-50"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                color: "var(--text)",
                fontSize: "clamp(1.6rem, 6vw, 2.4rem)",
                fontWeight: 300,
                letterSpacing: "0.06em",
                minHeight: "48px",
                textDecoration: "none",
                transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/termine"
            onClick={() => setMobileOpen(false)}
            className="btn-gold-outline"
            style={{ marginTop: "16px" }}
          >
            Termin vereinbaren
          </Link>
        </nav>

        <div className="shrink-0 text-center" style={{ padding: "0 24px 32px" }}>
          <p style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--text)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.35 }}>
            antonia@braditsch.at
          </p>
        </div>
      </div>
    </>
  );
}
