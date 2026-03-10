import Link from "next/link";
import { Leaf, Calendar, Music, ChevronRight } from "lucide-react";

function ImagePlaceholder({
  className = "",
  variant = "mixed",
}: {
  className?: string;
  variant?: "gold" | "lila" | "creme" | "mixed";
}) {
  const gradients = {
    gold: "bg-gradient-to-br from-[#F5E6C8] via-[#E8C97A] to-[#C9A44A]",
    lila: "bg-gradient-to-br from-[#E8DEFF] via-[#C4A8E0] to-[#9B7CB9]",
    creme: "bg-gradient-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#EAD9C0]",
    mixed: "bg-gradient-to-br from-[#F5E6C8] via-[#D4B8E8] to-[#9B7CB9]",
  };
  return <div className={`${gradients[variant]} ${className}`} />;
}

const supportPoints = [
  "...deine Lebensenergie aus dem Gleichgewicht gekommen ist.",
  "...du die Hilfe deines Unterbewusstseins zu Hilfe nehmen möchtest.",
  "...du dich auf sanfte und behutsame Art mit deinem Inneren verbinden willst.",
  "...Stress reduziert und das Immunsystem gestärkt werden sollen.",
  "...du dein Leben bewusst in Freude und Fülle genießen möchtest.",
];

const offers = [
  {
    title: "Klang",
    href: "/klang",
    variant: "gold" as const,
    text: "Aus den Schwingungen der Klangschalen, Gongs und anderen obertonreichen Instrumenten sucht sich dein Körper jene Heilfrequenzen heraus, die FÜR DICH hilfreich sind. Durch das aufmerksame Hören und Spüren der Vibrationen wird das natürliche Harmoniebestreben des Körpers auf allen Ebenen angeregt.",
  },
  {
    title: "Stimme",
    href: "/stimme",
    variant: "lila" as const,
    text: "Die Stimme ist das älteste Heilinstrument der Menschheit. Das Singen von Tönen, die gleichsam AUS UNS SELBST heraus entstehen, ist evolutionär tief in unserer Biologie verankert und hat nachweislich positiven Einfluss auf Körper und Seele.",
  },
  {
    title: "Medialität",
    href: "/medialitaet",
    variant: "mixed" as const,
    text: "In der medialen Arbeit bin ich Vermittlerin zwischen der materiellen und der geistigen Welt. Mit dieser Fähigkeit kann ich lichtvolle Energien wahrnehmen und damit in Kontakt treten, sodass personalisierte Nachrichten FÜR DICH genau zur richtigen Zeit als Unterstützung aus der geistigen Welt zu dir kommen.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center">
        <ImagePlaceholder variant="mixed" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="hero-name text-stone-900 mb-3">
              Antonia Braditsch
            </h1>
            <p
              className="text-xl text-[#B8860B] mb-8 tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
            >
              Klangtherapie &amp; Heilfrequenzen
            </p>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-[#E8D8C4]">
              <p
                className="text-lg text-stone-700 mb-4 italic"
                style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
              >
                Ich unterstütze Menschen wie dich, wenn…
              </p>
              <ul className="space-y-3">
                {supportPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-lg leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
              className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg min-h-[56px] shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Termin vereinbaren
            </Link>
          </div>

          <div className="hidden lg:block">
            <ImagePlaceholder variant="gold" className="w-full h-[520px] rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* DREI ANGEBOTE */}
      <section className="py-24 bg-white" id="angebote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Meine Angebote
            </h2>
            <div className="w-16 h-1 bg-[#B8860B] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="bg-[#FFFAF4] rounded-3xl overflow-hidden border border-[#E8D8C4] shadow-sm hover:shadow-md transition-shadow group"
              >
                <ImagePlaceholder variant={offer.variant} className="h-48 w-full" />
                <div className="p-8">
                  <h3
                    className="text-2xl font-bold text-stone-900 mb-4"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {offer.title}
                  </h3>
                  <p className="text-stone-600 text-lg leading-relaxed mb-6">{offer.text}</p>
                  <Link
                    href={offer.href}
                    className="inline-flex items-center gap-1 text-[#B8860B] font-semibold hover:gap-2 transition-all"
                  >
                    Weiterlesen <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÜBER MICH */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ImagePlaceholder variant="lila" className="w-full h-[480px] rounded-3xl shadow-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2
                className="text-4xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Über mich
              </h2>
              <div className="w-16 h-1 bg-[#B8860B] mb-8 rounded-full" />
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                In der Praxis verbinde ich meine achtsame Zugangsweise mit den Schwerpunkten
                Klang, Stimme und Medialität. All meine Methoden dienen dazu, dich Schritt für
                Schritt zu dir selbst zu begleiten, dabei Hinderliches zu transformieren, damit
                du Zugang zu deinen Fähigkeiten und Potentialen erhältst.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mb-10">
                Ich möchte <strong>DICH</strong> mit Klängen, Worten, Gesang und Musik
                inspirieren und dich zu deiner wahren Größe und Strahlkraft begleiten, damit du
                dein Leben bewusst, selbstbestimmt und erfüllt genießen mögest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                  className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
                >
                  <Calendar className="w-4 h-4" />
                  Termin vereinbaren
                </Link>
                <Link
                  href="/ueber-mich"
                  className="inline-flex items-center gap-2 border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
                >
                  Weiterlesen <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HILDEGARD VON BINGEN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#9B7CB9] font-semibold uppercase tracking-widest text-sm mb-3">
                Historisch &amp; Inspirierend
              </p>
              <h2
                className="text-4xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Hildegard von Bingen
              </h2>
              <div className="w-16 h-1 bg-[#9B7CB9] mb-8 rounded-full" />
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Hildegard von Bingen ist eine faszinierende und inspirierende Persönlichkeit.
                Mit ihrem liebevollen Menschenverständnis und der ausgeprägten Naturverbundenheit
                ist sie heute aktueller denn je. Über ihr Leben, Werk und Wirken spreche ich in
                Workshops und stelle es in szenischen Lesungen mit ihren Originalgesängen sowie
                Musik auf mittelalterlichen Instrumenten dar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/hildegard-von-bingen#podcast"
                  className="inline-flex items-center gap-2 bg-[#9B7CB9] hover:bg-[#8264A8] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
                >
                  <Music className="w-4 h-4" />
                  Vale Retro Podcast
                </Link>
                <Link
                  href="/hildegard-von-bingen#music"
                  className="inline-flex items-center gap-2 border-2 border-[#9B7CB9] text-[#9B7CB9] hover:bg-[#9B7CB9] hover:text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
                >
                  Modern Mystic Music
                </Link>
              </div>
            </div>
            <div>
              <ImagePlaceholder variant="creme" className="w-full h-[400px] rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* GESETZLICHER HINWEIS */}
      <section className="py-10 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-600 text-base leading-relaxed">
            <strong>Verpflichtender gesetzlicher Hinweis:</strong> Ich weise ausdrücklich darauf
            hin, dass meine Anwendungen keine ärztliche Therapie oder Psychotherapie ersetzen.
          </p>
        </div>
      </section>
    </>
  );
}
