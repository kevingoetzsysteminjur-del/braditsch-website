"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function PasswortVergessenPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/callback?next=/passwort-neu-setzen`,
    });

    if (error) {
      setError("Fehler beim Senden der E-Mail. Bitte versuche es erneut.");
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "var(--bg)" }}
    >
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-8 transition-opacity hover:opacity-60">
            <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Antonia Braditsch
            </p>
          </Link>
          <h1 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 300, fontSize: "clamp(1.8rem, 5vw, 2.8rem)", letterSpacing: "0.15em", color: "var(--text)" }}>
            Passwort zurücksetzen
          </h1>
          <span className="gold-line block mt-5" />
        </div>

        {sent ? (
          <div className="text-center">
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Wir haben dir eine E-Mail mit einem Link zum Zurücksetzen deines Passworts gesendet.
            </p>
            <Link href="/anmelden" className="btn-gold-outline">Zur Anmeldung</Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-center mb-8" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Gib deine E-Mail-Adresse ein. Wir senden dir einen Link zum Zurücksetzen deines Passworts.
            </p>
            <form onSubmit={handleReset} className="space-y-5">
              {error && (
                <div className="px-4 py-3 text-sm text-center" style={{ border: "1px solid rgba(180,60,60,0.3)", backgroundColor: "rgba(180,60,60,0.05)", color: "#8B3A3A", fontFamily: "var(--font-body), Georgia, serif" }}>
                  {error}
                </div>
              )}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  E-Mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="deine@email.at"
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.3)", color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
                />
              </div>
              <button type="submit" disabled={loading} className="w-full btn-gold-outline justify-center" style={{ opacity: loading ? 0.6 : 1 }}>
                {loading ? "Senden…" : "Link senden"}
              </button>
            </form>
            <p className="text-center mt-8 text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              <Link href="/anmelden" className="transition-opacity hover:opacity-60" style={{ color: "var(--gold)" }}>
                Zurück zur Anmeldung
              </Link>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
