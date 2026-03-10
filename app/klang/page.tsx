import Link from "next/link";
import { Calendar } from "lucide-react";

function ImagePlaceholder({ className = "", variant = "gold" }: { className?: string; variant?: "gold" | "warm" | "sand" | "rose" | "creme" }) {
  const gradients = {
    gold: "bg-gradient-to-br from-[#F5E6C8] via-[#E8C97A] to-[#C9A44A]",
    warm: "bg-gradient-to-br from-[#F7EED8] via-[#EDD9B0] to-[#D4AF7A]",
    creme: "bg-gradient-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#EAD9C0]",
    sand: "bg-gradient-to-br from-[#F5ECD8] via-[#E8D5B0] to-[#C8A87A]",
    rose: "bg-gradient-to-br from-[#F7EDEA] via-[#EDD5C8] to-[#C9A090]",
  };
  return <div className={`${gradients[variant]} ${className}`} />;
}

const angebote = [
  {
    title: "Soul Sound Healing",
    duration: "ca. 70 Minuten",
    price: "90€",
    variant: "gold" as const,
    text: "Beim Soul Sound Healing werden ausgewählte Klangschalen, Gongs und die Stimme eingesetzt, um deinen persönlichen Lebensthemen auf die Spur zu kommen. Im Klangraum entsteht ein einzigartiger Dialog zwischen Klang und Seelensprache – ein tief berührender Prozess, der dich zu dir selbst führt. Jede Session ist individuell auf dich abgestimmt.",
  },
  {
    title: "Klangliege und Körpermonochord",
    duration: "50 Minuten",
    price: "75€",
    variant: "warm" as const,
    text: "Auf der Klangliege wirst du von unten durch die Saiten des Körpermonochords und von oben durch Klangschalen und weitere Instrumente in eine tiefe Entspannung geführt. Du spürst die Schwingungen mit deinem ganzen Körper – eine ganzheitliche Klangerfahrung für Körper, Geist und Seele, die tief entspannt und regeneriert.",
  },
  {
    title: "Kristallpyramide",
    duration: "40 Minuten",
    price: "60€",
    variant: "sand" as const,
    text: "Die Bergkristall-Energie verbindet sich mit der besonderen geometrischen Form der Pyramide zu einer kraftvollen Klangerfahrung. Bergkristalle sind seit jeher bekannt für ihre reinigende und harmonisierende Wirkung auf Energiefelder. Diese Anwendung eignet sich ideal zur Energiearbeit und tiefen Entspannung.",
  },
  {
    title: "Klangschalen für Kinder",
    duration: "30 Minuten",
    price: "49€ / 6er Block: 270€",
    badge: "Ab 5 Jahren",
    variant: "creme" as const,
    text: "Kinder reagieren besonders sensibel und offen auf Klänge – ihre natürliche Neugier und Offenheit machen Klangschalensessions zu einem wunderschönen Erlebnis. In altersgerechten Sessions werden Klangschalen spielerisch eingesetzt, um Entspannung, Konzentration und emotionale Balance zu fördern.",
  },
];

export default function KlangPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96">
        <ImagePlaceholder variant="gold" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1
            className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            KLANG
          </h1>
          <p className="text-white/90 text-xl max-w-lg">
            Heilfrequenzen für Körper, Geist und Seele
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-stone-700 leading-relaxed mb-6">
            Unser Körper besteht zu etwa 70% aus Wasser – und Wasser ist ein hervorragender
            Schwingungsträger. Wenn Klangschalen und Gongs erklingen, übertragen sich ihre
            Heilfrequenzen direkt auf jede einzelne Zelle deines Körpers.
          </p>
          <p className="text-xl text-stone-700 leading-relaxed">
            Aus den Schwingungen sucht sich dein Körper jene Frequenzen heraus, die{" "}
            <strong>FÜR DICH</strong> in diesem Moment hilfreich sind. Klang ist eine der
            ältesten Heilmethoden der Menschheit – und wirkt auf allen Ebenen: körperlich,
            emotional, mental und spirituell.
          </p>
        </div>
      </section>

      {/* Angebote */}
      <section className="pb-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {angebote.map((angebot, i) => (
            <div
              key={angebot.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <ImagePlaceholder variant={angebot.variant} className="w-full h-72 rounded-3xl shadow-xl" />
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                {angebot.badge && (
                  <span className="inline-block bg-[#F5EDE0] text-[#B8860B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#E8D8C4]">
                    {angebot.badge}
                  </span>
                )}
                <h2
                  className="text-3xl font-bold text-stone-900 mb-3"
                  style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                >
                  {angebot.title}
                </h2>
                <div className="flex gap-4 mb-6">
                  <span className="text-[#B8860B] font-semibold text-lg">{angebot.price}</span>
                  <span className="text-stone-400">|</span>
                  <span className="text-stone-500">{angebot.duration}</span>
                </div>
                <p className="text-lg text-stone-700 leading-relaxed mb-8">{angebot.text}</p>
                <Link
                  href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                  className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
                >
                  <Calendar className="w-4 h-4" />
                  Termin vereinbaren
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hinweis */}
      <section className="py-10 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-600 text-base">
            <strong>Gesetzlicher Hinweis:</strong> Meine Anwendungen ersetzen keine ärztliche Therapie oder Psychotherapie.
          </p>
        </div>
      </section>
    </>
  );
}
