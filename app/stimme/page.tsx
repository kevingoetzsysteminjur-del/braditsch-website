import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Stimmarbeit | Antonia Braditsch",
  description:
    "Stimmarbeit und heilsames Singen mit Antonia Braditsch. Einzelstunden 'Magie der Stimme' und offene Gruppe 'Heilsames Singen' – jeden 3. Mittwoch in Lichtenwörth.",
};

const angebote = [
  {
    title: "Magie der Stimme",
    duration: "60 Minuten",
    price: "90€",
    mesh: "mesh-rose",
    cta: "Termin vereinbaren",
    subject: "Termin vereinbaren – Magie der Stimme",
    text: "Auf der Spurensuche nach deiner authentischen Persönlichkeit begleite ich dich dabei, Zugang zu deiner inneren Stimme zu finden. In dieser Einzelstunde erkunden wir gemeinsam, was deine Stimme dir sagen möchte – weit über Töne und Klang hinaus. Ein zutiefst persönlicher und transformativer Prozess.",
    info: null,
    badge: null,
  },
  {
    title: "Heilsames Singen",
    duration: "18:30 – 20:00 Uhr",
    price: "25€ pro Abend",
    mesh: "mesh-warm",
    cta: "Jetzt anmelden",
    subject: "Anmeldung Heilsames Singen",
    badge: "Offene Gruppe · Jeden 3. Mittwoch",
    info: "VIVARIUM, Angergasse 7, 2493 Lichtenwörth",
    text: "In dieser offenen Gruppe kommen wir gemeinsam zusammen, um die heilsame Kraft des Singens zu erleben. Keine Vorkenntnisse nötig – jede Stimme ist willkommen. Gemeinsames Singen verbindet, heilt und macht Freude!",
  },
];

export default function StimmePage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "55vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto pt-32 pb-20">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-6"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
          >
            Angebote
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              letterSpacing: "0.2em",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Stimme
          </h1>
          <span className="gold-line mb-8 block" />
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Die Stimme ist das älteste Heilinstrument der Menschheit. Das Singen von Tönen,
            die aus uns selbst heraus entstehen, ist tief in unserer Biologie verankert.
          </p>
        </div>
      </section>

      {/* Offers */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-5xl mx-auto">
          {angebote.map((angebot, i) => (
            <div key={angebot.title}>
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center py-20 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Mesh placeholder */}
                <div className="flex justify-center">
                  <div
                    className={`${angebot.mesh} grain shadow-lg`}
                    style={{
                      width: "clamp(200px, 30vw, 280px)",
                      height: "clamp(200px, 30vw, 280px)",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* Text */}
                <div>
                  {angebot.badge && (
                    <p
                      className="text-[10px] uppercase tracking-[0.2em] mb-4"
                      style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
                    >
                      {angebot.badge}
                    </p>
                  )}
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-heading), Georgia, serif",
                      fontWeight: 400,
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      letterSpacing: "0.04em",
                      color: "var(--text)",
                    }}
                  >
                    {angebot.title}
                  </h2>

                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="text-lg font-light"
                      style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", letterSpacing: "0.04em" }}
                    >
                      {angebot.price}
                    </span>
                    <span style={{ color: "rgba(166,137,77,0.3)" }}>·</span>
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
                    >
                      {angebot.duration}
                    </span>
                  </div>

                  {angebot.info && (
                    <p
                      className="text-sm mb-6 italic"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
                    >
                      {angebot.info}
                    </p>
                  )}

                  <p
                    className="mb-8 leading-relaxed text-base"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
                  >
                    {angebot.text}
                  </p>

                  <Link
                    href="/termine"
                    className="btn-gold-outline"
                  >
                    {angebot.cta} <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {i < angebote.length - 1 && (
                <div style={{ height: "1px", backgroundColor: "rgba(166,137,77,0.2)" }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="italic text-lg sm:text-xl leading-relaxed mb-8"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading), Georgia, serif", letterSpacing: "0.02em" }}
          >
            Wenn wir singen, produzieren wir heilsame Schwingungen, die unser gesamtes System
            auf tiefe Weise berühren.
          </p>
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
