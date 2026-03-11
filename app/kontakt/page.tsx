import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | Antonia Braditsch",
  description:
    "Kontaktiere Antonia Braditsch – Klangtherapie, Stimmarbeit und mediale Begleitung im VIVARIUM, Angergasse 7, 2493 Lichtenwörth. Termine nach Vereinbarung.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "40vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto pt-32 pb-12">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-8"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)", paddingLeft: "0.3em" }}
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

      {/* Kontaktinfos + Formular */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16">

          {/* Links: Kontaktdaten */}
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] mb-8" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Erreichbarkeit
            </p>

            {/* Email */}
            <a
              href="mailto:antonia@braditsch.at"
              className="flex items-center gap-5 p-6 transition-all duration-300 group"
              style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--bg)" }}
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(166,137,77,0.3)" }}>
                <Mail className="w-4 h-4" style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>E-Mail</p>
                <p className="text-base font-light transition-opacity group-hover:opacity-60" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.03em" }}>
                  antonia@braditsch.at
                </p>
              </div>
            </a>

            {/* Telefon */}
            <a
              href="tel:+436767516188"
              className="flex items-center gap-5 p-6 transition-all duration-300 group"
              style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--bg)" }}
            >
              <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(166,137,77,0.3)" }}>
                <Phone className="w-4 h-4" style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Telefon</p>
                <p className="text-base font-light transition-opacity group-hover:opacity-60" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.03em" }}>
                  +43 (0) 676 7516188
                </p>
              </div>
            </a>

            {/* Adresse */}
            <div className="flex items-start gap-5 p-6" style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--bg)" }}>
              <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5" style={{ border: "1px solid rgba(166,137,77,0.3)" }}>
                <MapPin className="w-4 h-4" style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Praxis</p>
                <p className="text-base font-light" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.03em" }}>VIVARIUM</p>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Angergasse 7 · 2493 Lichtenwörth · Österreich
                </p>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="flex items-start gap-5 p-6" style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--bg)" }}>
              <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(166,137,77,0.3)" }}>
                <Clock className="w-4 h-4" style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Öffnungszeiten</p>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Nach Vereinbarung
                </p>
              </div>
            </div>
          </div>

          {/* Rechts: Formular */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-8" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Nachricht senden
            </p>
            <form
              action="mailto:antonia@braditsch.at"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Dein Name"
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "var(--bg)",
                      border: "1px solid rgba(166,137,77,0.3)",
                      color: "var(--text)",
                      fontFamily: "var(--font-body), Georgia, serif",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="deine@email.at"
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      backgroundColor: "var(--bg)",
                      border: "1px solid rgba(166,137,77,0.3)",
                      color: "var(--text)",
                      fontFamily: "var(--font-body), Georgia, serif",
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Betreff
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Worum geht es?"
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
                <label className="block text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Nachricht
                </label>
                <textarea
                  name="body"
                  required
                  rows={6}
                  placeholder="Deine Nachricht…"
                  className="w-full px-4 py-3 text-sm outline-none resize-none"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: "1px solid rgba(166,137,77,0.3)",
                    color: "var(--text)",
                    fontFamily: "var(--font-body), Georgia, serif",
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn-gold-outline w-full justify-center"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section style={{ backgroundColor: "var(--bg)" }}>
        <div style={{ height: "380px", overflow: "hidden" }}>
          <iframe
            src="https://www.google.com/maps?q=Angergasse+7,+2493+Lichtenwörth,+Austria&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, display: "block", filter: "sepia(20%) contrast(90%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VIVARIUM Lichtenwörth"
          />
        </div>
      </section>

      {/* Legal note */}
      <section className="py-8 px-6" style={{ backgroundColor: "var(--sage)" }}>
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
