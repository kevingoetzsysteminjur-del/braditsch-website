"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] px-5 py-4 sm:py-5"
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid rgba(166,137,77,0.25)",
        boxShadow: "0 -4px 24px rgba(61,50,41,0.08)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm text-center sm:text-left"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
        >
          Diese Website verwendet technisch notwendige Cookies.{" "}
          <Link
            href="/datenschutz"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--gold)", textDecoration: "underline" }}
          >
            Mehr erfahren
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 text-[11px] uppercase tracking-[0.18em] px-6 py-2.5 transition-all duration-200 hover:opacity-80"
          style={{
            backgroundColor: "var(--gold)",
            color: "#fff",
            fontFamily: "var(--font-body), Georgia, serif",
          }}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
