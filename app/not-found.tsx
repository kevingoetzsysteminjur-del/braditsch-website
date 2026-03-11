import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ minHeight: "100vh", backgroundColor: "var(--bg)" }}
    >
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Subtle background number */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontFamily: "var(--font-heading), Georgia, serif",
            fontSize: "clamp(12rem, 40vw, 28rem)",
            color: "var(--text)",
            opacity: 0.03,
            fontWeight: 300,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          404
        </span>
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        <p
          className="text-[10px] uppercase tracking-[0.3em] mb-8"
          style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
        >
          Seite nicht gefunden
        </p>

        <h1
          className="mb-6"
          style={{
            fontFamily: "var(--font-heading), Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(2.4rem, 7vw, 4.5rem)",
            letterSpacing: "0.12em",
            color: "var(--text)",
            lineHeight: 1.1,
          }}
        >
          Diese Seite wurde<br />nicht gefunden.
        </h1>

        <p
          className="text-base leading-relaxed mb-12"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
        >
          Vielleicht wurde die Seite verschoben oder der Link ist nicht mehr gültig.
          Kehre zur Startseite zurück und entdecke die Welt der Heilfrequenzen.
        </p>

        <Link href="/" className="btn-gold-outline">
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}
