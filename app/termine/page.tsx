import Link from "next/link";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import PastEvents from "./PastEvents";

// ── Sub-cards for Einzelbehandlungen ────────────────────────────────────────

const einzelItems = [
  { title: "Soul Sound Healing", price: "90€", duration: "ca. 70 Min" },
  { title: "Klangliege & Körpermonochord", price: "75€", duration: "ca. 50 Min" },
  { title: "Kristallpyramide", price: "60€", duration: "ca. 40 Min" },
  { title: "Klangschalen für Kinder", price: "49€", duration: "ca. 30 Min · 6er Block 270€" },
  { title: "Magie der Stimme", price: "90€", duration: "ca. 60 Min" },
];

// ── Shared styles ────────────────────────────────────────────────────────────

const LABEL = {
  fontFamily: "var(--font-body), Georgia, serif",
  color: "var(--gold)" as const,
  fontSize: "10px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.25em",
};

const BODY = {
  fontFamily: "var(--font-body), Georgia, serif",
  color: "var(--text-muted)" as const,
};

export default function TerminePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "45vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto pt-32 pb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={BODY}>
            Veranstaltungskalender
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 7vw, 4.8rem)",
              letterSpacing: "0.15em",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Termine &amp;<br />Veranstaltungen
          </h1>
          <span className="gold-line mt-8 block" />
        </div>
      </section>

      {/* ── EVENTS ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-4xl mx-auto space-y-8">

          {/* ── EVENT 1: Training Intuition & Hellsinne ───────────────────── */}
          <article style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.2)" }}>
            {/* Image placeholder */}
            <div className="mesh-gold grain relative w-full" style={{ height: "220px" }} />

            <div className="px-8 pt-8 pb-10">
              {/* Label + Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span style={LABEL}>Training</span>
                <span
                  className="text-[10px] uppercase tracking-[0.1em] px-3 py-1"
                  style={{ border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
                >
                  Frühbucherpreis bis 27.2.2026
                </span>
              </div>

              <h2
                className="mb-1"
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  letterSpacing: "0.04em",
                  color: "var(--text)",
                }}
              >
                Intuition &amp; Hellsinne
              </h2>
              <p
                className="italic text-sm mb-6"
                style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text-muted)", letterSpacing: "0.03em" }}
              >
                Klarheit durch innere Führung
              </p>

              <p className="text-sm leading-relaxed mb-8" style={BODY}>
                Intuition und Hellsinne sind wertvolle Schlüssel, über die jeder von uns verfügt,
                die aber oft unbewusst in uns schlummern. Als ausgebildetes Medium und feinfühliger
                Mensch biete ich dir eine herzliche und achtsame Zugangsweise. Du erhältst klare
                Werkzeuge und effektive Übungen, um deine intuitive Seite zu stärken und
                feinstoffliche Eindrücke bewusst zu erleben.
              </p>

              {/* Meta grid */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8 pt-6" style={{ borderTop: "1px solid rgba(166,137,77,0.15)" }}>
                <div>
                  <p className="mb-1" style={LABEL}>Termin</p>
                  <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>
                    Ab 28. März 2026
                  </p>
                  <p className="text-xs mt-0.5" style={BODY}>
                    Monatlich jeden 3. Samstag<br />
                    9:30 – 13:30 Uhr<br />
                    (außer August)
                  </p>
                </div>
                <div>
                  <p className="mb-1" style={LABEL}>Ort</p>
                  <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>VIVARIUM</p>
                  <p className="text-xs mt-0.5" style={BODY}>Lichtenwörth</p>
                </div>
                <div>
                  <p className="mb-1" style={LABEL}>Preis</p>
                  <p className="text-sm" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.1rem", fontWeight: 400 }}>
                    495€
                  </p>
                  <p className="text-xs mt-0.5" style={BODY}>
                    Frühbucher: 450€ bis 27.2.2026<br />
                    Teilzahlung möglich
                  </p>
                </div>
              </div>

              <Link
                href="mailto:antonia@braditsch.at?subject=Training Intuition & Hellsinne"
                className="btn-gold-outline"
              >
                Jetzt anmelden <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </article>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(166,137,77,0.15)" }} />

          {/* ── EVENT 2: Heilsames Singen ─────────────────────────────────── */}
          <article style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.2)" }}>
            <div className="mesh-rose grain relative w-full" style={{ height: "180px" }} />

            <div className="px-8 pt-8 pb-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span style={LABEL}>Offene Gruppe</span>
                <span
                  className="text-[10px] uppercase tracking-[0.1em] px-3 py-1"
                  style={{ border: "1px solid rgba(166,137,77,0.4)", color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
                >
                  Jeden 3. Mittwoch
                </span>
              </div>

              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  letterSpacing: "0.04em",
                  color: "var(--text)",
                }}
              >
                Heilsames Singen
              </h2>

              <p className="text-sm leading-relaxed mb-8" style={BODY}>
                Singen steigert nachweislich das Selbstbewusstsein, setzt Glückshormone frei,
                entspannt, schenkt Freude und gute Laune. Beim heilsamen Singen gibt es keine
                falschen Töne. Eingeladen sind gerade jene Menschen, die glauben nicht singen
                zu können.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8 pt-6" style={{ borderTop: "1px solid rgba(166,137,77,0.15)" }}>
                <div>
                  <p className="mb-1" style={LABEL}>Termin</p>
                  <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>
                    Jeden 3. Mittwoch
                  </p>
                  <p className="text-xs mt-0.5" style={BODY}>18:30 – 20:00 Uhr</p>
                </div>
                <div>
                  <p className="mb-1" style={LABEL}>Ort</p>
                  <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>VIVARIUM</p>
                  <p className="text-xs mt-0.5" style={BODY}>Angergasse 7, 2493 Lichtenwörth</p>
                </div>
                <div>
                  <p className="mb-1" style={LABEL}>Preis</p>
                  <p className="text-sm" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.1rem", fontWeight: 400 }}>
                    25€
                  </p>
                  <p className="text-xs mt-0.5" style={BODY}>pro Abend</p>
                </div>
              </div>

              <Link
                href="mailto:antonia@braditsch.at?subject=Heilsames Singen"
                className="btn-gold-outline"
              >
                Jetzt anmelden <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </article>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(166,137,77,0.15)" }} />

          {/* ── EVENT 3: Einzelbehandlungen ───────────────────────────────── */}
          <article style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.2)" }}>
            <div className="mesh-warm grain relative w-full" style={{ height: "180px" }} />

            <div className="px-8 pt-8 pb-10">
              <div className="mb-5">
                <span style={LABEL}>Immer verfügbar</span>
              </div>

              <h2
                className="mb-2"
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  letterSpacing: "0.04em",
                  color: "var(--text)",
                }}
              >
                Einzelbehandlungen
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={BODY}>
                Individuelle Klang-, Stimm- und mediale Sitzungen nach Vereinbarung.
              </p>

              {/* Sub-cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {einzelItems.map((item) => (
                  <div
                    key={item.title}
                    className="px-5 py-4"
                    style={{ border: "1px solid rgba(166,137,77,0.18)", backgroundColor: "var(--sage)" }}
                  >
                    <p
                      className="text-sm mb-2"
                      style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
                    >
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <span
                        style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1rem", fontWeight: 400 }}
                      >
                        {item.price}
                      </span>
                      <span style={{ color: "rgba(166,137,77,0.3)" }}>·</span>
                      <span className="text-xs" style={BODY}>{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(166,137,77,0.15)" }}>
                <div className="flex items-center gap-2 text-xs" style={BODY}>
                  <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--gold)" }} />
                  VIVARIUM, Angergasse 7, 2493 Lichtenwörth
                </div>
                <div className="flex items-center gap-2 text-xs" style={BODY}>
                  <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--gold)" }} />
                  Nach Vereinbarung
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                  className="btn-gold-outline"
                >
                  Termin vereinbaren <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>

          {/* ── PAST EVENTS ACCORDION ─────────────────────────────────────── */}
          <PastEvents />

        </div>
      </section>

      {/* ── CONTACT FOOTER ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="gold-line mb-8 block" />
          <p className="text-sm leading-relaxed" style={BODY}>
            Weitere Infos &amp; Anmeldung unter{" "}
            <a
              href="mailto:antonia@braditsch.at"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              antonia@braditsch.at
            </a>
            {" "}oder{" "}
            <a
              href="tel:+436767516188"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              0676 7516188
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
