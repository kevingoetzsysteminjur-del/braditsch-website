import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medialität | Antonia Braditsch",
  description:
    "Mediale Begleitung mit Antonia Braditsch – lichtvolle Verbindung zwischen materieller und geistiger Welt. Personalisierte Botschaften für Klarheit und innere Orientierung.",
};

const qualities = [
  "Lichtvolle, liebevolle Kommunikation",
  "Personalisierte Botschaften für dich",
  "Orientierung und innere Klarheit",
  "Verbindung mit der geistigen Welt",
];

export default function MedialitaetPage() {
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
            Medialität
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            In der medialen Arbeit bin ich Vermittlerin zwischen der materiellen und der geistigen Welt –
            lichtvolle Energien, die genau zur richtigen Zeit zu dir kommen.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-20 items-center">

          {/* Text */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
            >
              Was ist mediale Arbeit?
            </p>
            <h2
              className="mb-3"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                letterSpacing: "0.04em",
                color: "var(--text)",
              }}
            >
              Zwischen den Welten
            </h2>
            <span className="block w-12 h-px mb-10" style={{ backgroundColor: "var(--gold)", opacity: 0.6 }} />

            <p
              className="mb-6 leading-relaxed text-base"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Mit dieser Fähigkeit kann ich lichtvolle Energien wahrnehmen und damit in Kontakt treten.
              Personalisierte Nachrichten kommen für dich genau zur richtigen Zeit als Unterstützung
              aus der geistigen Welt.
            </p>
            <p
              className="mb-10 leading-relaxed text-base"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Diese Begegnungen sind immer liebevoll, nährend und aufbauend. Die mediale Arbeit kann dir
              helfen, Klarheit zu finden, Orientierung zu bekommen und dich mit deiner eigenen Seele
              zu verbinden.
            </p>

            <div className="space-y-4 mb-12">
              {qualities.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="w-px h-4 shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                  <span
                    className="text-sm"
                    style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="mailto:antonia@braditsch.at?subject=Termin vereinbaren – Medialität"
              className="btn-gold-outline"
            >
              Termin vereinbaren <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Visual */}
          <div className="flex flex-col gap-8">
            <div className="flex justify-center">
              <div
                className="relative overflow-hidden shadow-lg"
                style={{
                  width: "clamp(200px, 28vw, 280px)",
                  height: "clamp(200px, 28vw, 280px)",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/MEDIALITÄT.avif"
                  alt="Medialität – Antonia Braditsch"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
            </div>

            {/* Note card */}
            <div
              className="p-8"
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid rgba(166,137,77,0.2)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-3"
                style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
              >
                Hinweis
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                Die mediale Arbeit ist eine spirituelle Praxis und ersetzt keine medizinische
                oder psychologische Behandlung. Sie dient der persönlichen Orientierung und
                dem inneren Wachstum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="italic text-lg sm:text-xl leading-relaxed mb-8"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading), Georgia, serif", letterSpacing: "0.02em" }}
          >
            Lichtvolle Energien, die genau zur richtigen Zeit zu dir kommen.
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
