"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AnmeldenPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("E-Mail oder Passwort ist falsch.");
      setLoading(false);
      return;
    }

    router.refresh();
    router.push("/");
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "var(--bg)" }}
    >
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
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
            Anmelden
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
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
            <label
              className="block text-[10px] uppercase tracking-[0.2em] mb-2"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              E-Mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="deine@email.at"
              className="w-full px-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid rgba(166,137,77,0.3)",
                color: "var(--text)",
                fontFamily: "var(--font-body), Georgia, serif",
              }}
            />
          </div>

          <div>
            <label
              className="block text-[10px] uppercase tracking-[0.2em] mb-2"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Passwort
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid rgba(166,137,77,0.3)",
                color: "var(--text)",
                fontFamily: "var(--font-body), Georgia, serif",
              }}
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/passwort-vergessen"
              className="text-[10px] uppercase tracking-[0.15em] transition-opacity hover:opacity-60"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Passwort vergessen?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-gold-outline justify-center"
            style={{ opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "Anmelden…" : "Anmelden"}
          </button>
        </form>

        <p
          className="text-center mt-8 text-sm"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
        >
          Noch kein Konto?{" "}
          <Link
            href="/registrieren"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--gold)" }}
          >
            Jetzt registrieren
          </Link>
        </p>
      </div>
    </section>
  );
}
