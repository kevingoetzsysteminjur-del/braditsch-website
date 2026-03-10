import Link from "next/link";
import { ChevronRight } from "lucide-react";

const angebote = [
  {
    title: "Soul Sound Healing",
    duration: "ca. 70 Minuten",
    price: "90€",
    mesh: "mesh-gold",
    text: "Beim Soul Sound Healing werden ausgewählte Klangschalen, Gongs und die Stimme eingesetzt, um deinen persönlichen Lebensthemen auf die Spur zu kommen. Im Klangraum entsteht ein einzigartiger Dialog zwischen Klang und Seelensprache – ein tief berührender Prozess, der dich zu dir selbst führt.",
  },
  {
    title: "Klangliege und Körpermonochord",
    duration: "50 Minuten",
    price: "75€",
    mesh: "mesh-warm",
    text: "Auf der Klangliege wirst du von unten durch die Saiten des Körpermonochords und von oben durch Klangschalen in eine tiefe Entspannung geführt. Du spürst die Schwingungen mit deinem ganzen Körper – eine ganzheitliche Klangerfahrung, die tief entspannt und regeneriert.",
  },
  {
    title: "Kristallpyramide",
    duration: "40 Minuten",
    price: "60€",
    mesh: "mesh-sage",
    text: "Die Bergkristall-Energie verbindet sich mit der besonderen geometrischen Form der Pyramide zu einer kraftvollen Klangerfahrung. Bergkristalle sind seit jeher bekannt für ihre reinigende und harmonisierende Wirkung auf Energiefelder.",
  },
  {
    title: "Klangschalen für Kinder",
    duration: "30 Minuten",
    price: "49€ · 6er Block: 270€",
    mesh: "mesh-rose",
    badge: "Ab 5 Jahren",
    text: "Kinder reagieren besonders sensibel und offen auf Klänge. In altersgerechten Sessions werden Klangschalen spielerisch eingesetzt, um Entspannung, Konzentration und emotionale Balance zu fördern.",
  },
];

export default function KlangPage() {
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
            Klang
          </h1>
          <span className="gold-line mb-8 block" />
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Aus den Schwingungen der Klangschalen, Gongs und anderen obertonreichen Instrumenten
            sucht sich dein Körper jene Heilfrequenzen heraus, die für dich in diesem Moment hilfreich sind.
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

                  <div className="flex items-center gap-4 mb-6">
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
                    Termin vereinbaren <ChevronRight className="w-3 h-3" />
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

      {/* Intro text */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Unser Körper besteht zu etwa 70% aus Wasser – und Wasser ist ein hervorragender
            Schwingungsträger. Wenn Klangschalen und Gongs erklingen, übertragen sich ihre
            Heilfrequenzen direkt auf jede einzelne Zelle.
          </p>
          <span className="gold-line" />
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
