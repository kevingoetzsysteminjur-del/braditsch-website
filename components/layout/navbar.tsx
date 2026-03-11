"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, ShoppingBag, User, LogOut, Settings, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { createClient } from "@/utils/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";

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

const ADMIN_EMAIL = "antonia@braditsch.at";

function AuthMenu({ user }: { user: SupabaseUser | null }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!user) {
    return (
      <Link
        href="/anmelden"
        className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] px-4 py-2 transition-all duration-200 hover:opacity-70"
        style={{
          border: "1px solid rgba(166,137,77,0.4)",
          color: "var(--gold)",
          fontFamily: "var(--font-body), Georgia, serif",
        }}
      >
        <User className="w-3 h-3" />
        Anmelden
      </Link>
    );
  }

  const displayName = user.user_metadata?.name || user.email?.split("@")[0] || "Konto";
  const isAdmin = user.email === ADMIN_EMAIL;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] px-3 py-2 transition-opacity hover:opacity-70"
        style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
      >
        <div
          className="w-6 h-6 flex items-center justify-center text-[10px]"
          style={{ backgroundColor: "var(--gold)", color: "#fff", borderRadius: "50%" }}
        >
          {displayName[0].toUpperCase()}
        </div>
        <span className="hidden sm:inline max-w-[100px] truncate">{displayName}</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-48 py-1 z-[60]"
          style={{
            backgroundColor: "var(--bg)",
            border: "1px solid rgba(166,137,77,0.2)",
            boxShadow: "0 8px 24px rgba(61,50,41,0.1)",
          }}
        >
          <div className="px-4 py-2 border-b" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
            <p className="text-[10px] uppercase tracking-[0.12em] truncate" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              {user.email}
            </p>
          </div>

          {isAdmin && (
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm transition-opacity hover:opacity-60 w-full"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              <Settings className="w-3.5 h-3.5" />
              Admin-Panel
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 text-sm transition-opacity hover:opacity-60 w-full"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            <LogOut className="w-3.5 h-3.5" />
            Abmelden
          </button>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const { totalItems, setCartOpen, bouncing } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
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
        <div className="mx-auto flex items-center justify-between" style={{ maxWidth: "1400px", padding: "0 40px", height: "72px" }}>
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

          {/* Desktop Nav */}
          <nav className="nav-desktop hidden items-center" style={{ gap: "28px", marginLeft: "40px", flex: 1, justifyContent: "center" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--text)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none", whiteSpace: "nowrap", transition: "opacity 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.45"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3" style={{ marginLeft: "24px" }}>
            {/* Auth menu */}
            <AuthMenu user={user} />

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center justify-center transition-opacity hover:opacity-60"
              style={{ color: "var(--text)", width: "40px", height: "40px" }}
              aria-label="Warenkorb"
            >
              <ShoppingBag className={`w-5 h-5 transition-transform duration-200 ${bouncing ? "scale-125" : "scale-100"}`} />
              {totalItems > 0 && (
                <span
                  className="absolute rounded-full flex items-center justify-center"
                  style={{ top: "2px", right: "2px", width: "15px", height: "15px", backgroundColor: "var(--gold)", color: "#fff", fontSize: "9px", fontFamily: "var(--font-body), Georgia, serif" }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="nav-hamburger flex items-center justify-center transition-opacity hover:opacity-60"
              aria-label="Menü öffnen"
              style={{ color: "var(--text)", width: "40px", height: "40px" }}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className="fixed inset-0 z-[100] flex flex-col transition-all duration-500"
        style={{
          backgroundColor: "var(--bg)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(-16px)",
        }}
      >
        <div className="flex items-center justify-between shrink-0" style={{ padding: "0 24px", height: "72px" }}>
          <Image src="/images/braditsch-logo.png" alt="Antonia Braditsch" width={180} height={60} className="object-contain" style={{ maxWidth: "180px", width: "auto", height: "36px" }} />
          <button onClick={() => setMobileOpen(false)} className="flex items-center justify-center transition-opacity hover:opacity-60" aria-label="Menü schließen" style={{ color: "var(--text)", width: "44px", height: "44px" }}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div style={{ height: "1px", backgroundColor: "var(--gold)", opacity: 0.2, margin: "0 24px" }} />

        <nav className="flex-1 flex flex-col items-center justify-center overflow-y-auto" style={{ gap: "24px", padding: "40px 24px" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center transition-opacity hover:opacity-50"
              style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", fontSize: "clamp(1.6rem, 6vw, 2.4rem)", fontWeight: 300, letterSpacing: "0.06em", minHeight: "48px", textDecoration: "none", transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/termine" onClick={() => setMobileOpen(false)} className="btn-gold-outline" style={{ marginTop: "16px" }}>
            Termin vereinbaren
          </Link>

          {!user ? (
            <Link href="/anmelden" onClick={() => setMobileOpen(false)} className="text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Anmelden
            </Link>
          ) : (
            <button
              onClick={async () => { const s = createClient(); await s.auth.signOut(); window.location.href = "/"; }}
              className="text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Abmelden
            </button>
          )}
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
