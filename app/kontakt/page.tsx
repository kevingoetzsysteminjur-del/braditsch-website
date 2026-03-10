import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function KontaktPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "45vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto pt-32 pb-16">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-6"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
          >
            Kontakt
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2.8rem, 8vw, 5rem)",
              letterSpacing: "0.2em",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Schreib mir
          </h1>
          <span className="gold-line block" />
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-3xl mx-auto">

          {/* Email – most prominent */}
          <a
            href="mailto:antonia@braditsch.at"
            className="flex items-center gap-6 p-8 mb-4 transition-all duration-300 group"
            style={{ border: "1px solid rgba(166,137,77,0.3)", backgroundColor: "var(--bg)" }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-300"
              style={{ border: "1px solid rgba(166,137,77,0.3)" }}
            >
              <Mail className="w-5 h-5" style={{ color: "var(--gold)" }} />
            </div>
            <div className="flex-1">
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-1"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                E-Mail
              </p>
              <p
                className="text-xl sm:text-2xl font-light transition-opacity duration-300 group-hover:opacity-60"
                style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.04em" }}
              >
                antonia@braditsch.at
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+436767516188"
            className="flex items-center gap-6 p-8 mb-4 transition-all duration-300 group"
            style={{ border: "1px solid rgba(166,137,77,0.3)", backgroundColor: "var(--bg)" }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center shrink-0"
              style={{ border: "1px solid rgba(166,137,77,0.3)" }}
            >
              <Phone className="w-5 h-5" style={{ color: "var(--gold)" }} />
            </div>
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-1"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                Telefon
              </p>
              <p
                className="text-xl sm:text-2xl font-light transition-opacity duration-300 group-hover:opacity-60"
                style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.04em" }}
              >
                +43 (0) 676 7516188
              </p>
            </div>
          </a>

          {/* Address */}
          <div
            className="flex items-start gap-6 p-8 mb-12"
            style={{ border: "1px solid rgba(166,137,77,0.3)", backgroundColor: "var(--bg)" }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center shrink-0 mt-1"
              style={{ border: "1px solid rgba(166,137,77,0.3)" }}
            >
              <MapPin className="w-5 h-5" style={{ color: "var(--gold)" }} />
            </div>
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-1"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                Praxis
              </p>
              <p
                className="text-xl sm:text-2xl font-light"
                style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.04em" }}
              >
                VIVARIUM
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                Angergasse 7 · 2493 Lichtenwörth · Österreich
              </p>
            </div>
          </div>

          {/* CTA to booking */}
          <div className="text-center">
            <span className="gold-line mb-8 block" />
            <p
              className="text-sm mb-6"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Oder buche deinen Termin direkt online:
            </p>
            <Link href="/termine" className="btn-gold-outline">
              Zur Terminbuchung
            </Link>
          </div>
        </div>
      </section>

      {/* Legal note */}
      <section className="py-8 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
            <span style={{ fontStyle: "italic" }}>Gesetzlicher Hinweis:</span>{" "}
            Meine Anwendungen ersetzen keine ärztliche Therapie oder Psychotherapie.
          </p>
        </div>
      </section>
    </>
  );
}
