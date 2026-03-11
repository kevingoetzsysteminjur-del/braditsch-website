"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function RegistrierenPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password.length < 6) {
      setError("Das Passwort muss mindestens 6 Zeichen lang sein.");
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message === "User already registered"
        ? "Diese E-Mail-Adresse ist bereits registriert."
        : "Registrierung fehlgeschlagen. Bitte versuche es erneut.");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <section
        className="relative flex flex-col items-center justify-center px-6 overflow-hidden text-center"
        style={{ minHeight: "100vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-md">
          <div className="mb-6" style={{ fontSize: "2.5rem" }}>✉️</div>
          <h1
            className="mb-4"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              letterSpacing: "0.1em",
              color: "var(--text)",
            }}
          >
            Bitte bestätige deine E-Mail
          </h1>
          <span className="gold-line block mb-6" />
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Wir haben eine Bestätigungs-E-Mail an{" "}
            <strong style={{ color: "var(--text)" }}>{email}</strong> gesendet.
            Bitte klicke auf den Link in der E-Mail, um dein Konto zu aktivieren.
          </p>
          <Link href="/anmelden" className="btn-gold-outline">
            Zur Anmeldung
          </Link>
        </div>
      </section>
    );
  }

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
          <h1
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 6vw, 3rem)",
              letterSpacing: "0.15em",
              color: "var(--text)",
            }}
          >
            Registrieren
          </h1>
          <span className="gold-line block mt-5" />
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          {error && (
            <div
              className="px-4 py-3 text-sm text-center"
              style={{
                border: "1px solid rgba(180,60,60,0.3)",
                backgroundColor: "rgba(180,60,60,0.05)",
                color: "#8B3A3A",
                fontFamily: "var(--font-body), Georgia, serif",
              }}
            >
              {error}
            </div>
          )}

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Dein Name"
              className="w-full px-4 py-3 text-sm outline-none"
              style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.3)", color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
            />
          </div>

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

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Passwort
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Mindestens 6 Zeichen"
              className="w-full px-4 py-3 text-sm outline-none"
              style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.3)", color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-gold-outline justify-center"
            style={{ opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "Registrieren…" : "Konto erstellen"}
          </button>
        </form>

        <p className="text-center mt-8 text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
          Bereits registriert?{" "}
          <Link href="/anmelden" className="transition-opacity hover:opacity-60" style={{ color: "var(--gold)" }}>
            Anmelden
          </Link>
        </p>
      </div>
    </section>
  );
}
