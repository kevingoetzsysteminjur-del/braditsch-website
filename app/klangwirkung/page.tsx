import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Wirkungsweise der Klangmeditationen | Antonia Braditsch",
  description:
    "Wie wirken Klangmeditationen und Heilfrequenzen? Erfahre mehr über die wissenschaftlichen und spirituellen Grundlagen der Klangtherapie von Antonia Braditsch.",
};

/* Text von Antonia ergänzen */

const sections = [
  {
    title: "Frequenz & Resonanz",
    text: "Jede Zelle unseres Körpers schwingt in ihrer eigenen Frequenz. Wenn Klangschalen erklingen, senden sie präzise Schwingungen aus, die mit den Eigenfrequenzen unserer Zellen in Resonanz treten. Durch dieses Prinzip der Resonanz können blockierte Energiemuster gelöst und das natürliche Gleichgewicht wiederhergestellt werden.",
  },
  {
    title: "Das Nervensystem & Entspannung",
    text: "Klangmeditationen aktivieren den Parasympathikus – unser «Rest and Digest»-System. Herzfrequenz und Atemrhythmus verlangsamen sich, Stresshormone sinken. Der Körper tritt in einen Zustand tiefer Entspannung ein, der natürliche Heilungsprozesse ermöglicht.",
  },
  {
    title: "Gehirnwellen & Bewusstsein",
    text: "Die Klänge führen das Gehirn sanft aus dem Beta-Zustand (aktives Denken) in Alpha- und Theta-Wellen. In diesem Zustand – zwischen Wachen und Schlafen – öffnet sich der Zugang zu tiefen Schichten des Unterbewusstseins, wo Transformation und Heilung möglich werden.",
  },
  {
    title: "Wasser als Schwingungsträger",
    text: "Unser Körper besteht zu etwa 70 % aus Wasser – und Wasser ist ein hervorragender Schwingungsträger. Die Heilfrequenzen der Klangschalen übertragen sich direkt auf das Körperwasser und damit auf jede einzelne Zelle.",
  },
];

export default function KlangwirkungPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "50vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto pt-32 pb-16">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-6"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
          >
            Hintergrundwissen
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 7vw, 4.5rem)",
              letterSpacing: "0.15em",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Wirkungsweise der<br />Klangmeditationen
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Wie Klang und Heilfrequenzen auf Körper, Geist und Seele wirken.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((section, i) => (
            <div key={i}>
              <div style={{ height: "1px", backgroundColor: "rgba(166,137,77,0.2)", marginBottom: "40px" }} />
              <p
                className="text-[10px] uppercase tracking-[0.25em] mb-4"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  letterSpacing: "0.06em",
                  color: "var(--text)",
                }}
              >
                {section.title}
              </h2>
              <p
                className="text-base leading-[1.9]"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                {section.text}
              </p>
            </div>
          ))}

          <div style={{ height: "1px", backgroundColor: "rgba(166,137,77,0.2)" }} />

          {/* Placeholder note */}
          <div
            className="p-6"
            style={{ border: "1px dashed rgba(166,137,77,0.4)", backgroundColor: "var(--bg)" }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-2"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Hinweis
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              {/* Text von Antonia ergänzen */}
              Weitere persönliche Erfahrungsberichte und wissenschaftliche Hintergründe werden hier demnächst von Antonia Braditsch ergänzt.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Erlebe die Wirkung der Klänge selbst – mit einer Klangmeditation aus dem Audio Shop.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/audio-shop" className="btn-gold-outline">
              Zum Audio Shop <ChevronRight className="w-3 h-3" />
            </Link>
            <Link
              href="/klang"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Klangtherapie buchen <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Legal */}
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
