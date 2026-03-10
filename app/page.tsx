import Link from "next/link";
import { Leaf, Calendar, Music, ChevronRight } from "lucide-react";

// Alle Platzhalter: nur warme Beige/Gold-Töne, kein Lila
function ImagePlaceholder({
  className = "",
  variant = "warm",
}: {
  className?: string;
  variant?: "warm" | "gold" | "sand" | "rose";
}) {
  const gradients = {
    warm: "bg-gradient-to-br from-[#F7EED8] via-[#EDD9B0] to-[#D4AF7A]",
    gold: "bg-gradient-to-br from-[#FAF0DC] via-[#E8CC88] to-[#C9A44A]",
    sand: "bg-gradient-to-br from-[#F5ECD8] via-[#E8D5B0] to-[#C8A87A]",
    rose: "bg-gradient-to-br from-[#F7EDEA] via-[#EDD5C8] to-[#C9A090]",
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
    variant: "rose" as const,
    text: "Die Stimme ist das älteste Heilinstrument der Menschheit. Das Singen von Tönen, die gleichsam AUS UNS SELBST heraus entstehen, ist evolutionär tief in unserer Biologie verankert und hat nachweislich positiven Einfluss auf Körper und Seele.",
  },
  {
    title: "Medialität",
    href: "/medialitaet",
    variant: "sand" as const,
    text: "In der medialen Arbeit bin ich Vermittlerin zwischen der materiellen und der geistigen Welt. Mit dieser Fähigkeit kann ich lichtvolle Energien wahrnehmen und damit in Kontakt treten, sodass personalisierte Nachrichten FÜR DICH genau zur richtigen Zeit als Unterstützung aus der geistigen Welt zu dir kommen.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Hintergrundbild als warmer Gradient */}
        <ImagePlaceholder
          variant="warm"
          className="absolute inset-0 w-full h-full"
        />
        {/* Sehr leichter weißer Schleier für Lesbarkeit */}
        <div className="absolute inset-0 bg-white/50" />

        {/* Inhalt – zentriert */}
        <div className="relative z-10 text-center px-6 sm:px-10 max-w-3xl mx-auto py-32">
          <h1 className="hero-name text-[#2D2A26] mb-4">
            Antonia Braditsch
          </h1>

          <p
            className="text-base sm:text-lg text-[#B8860B] mb-14 tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
          >
            Klangtherapie &amp; Heilfrequenzen
          </p>

          {/* Support-Liste: kein Box, nur goldene linke Linie */}
          <div className="text-left mb-14">
            <p
              className="text-[#2D2A26] mb-8 italic text-xl"
              style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
            >
              Ich unterstütze Menschen wie dich, wenn…
            </p>
            <ul className="space-y-5 border-l-2 border-[#B8860B]/40 pl-7">
              {supportPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Leaf className="w-4 h-4 text-[#B8860B] shrink-0 mt-1 opacity-70" />
                  <span
                    className="text-[#2D2A26] leading-relaxed"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)" }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg min-h-[56px] shadow-md tracking-wide"
            style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
          >
            <Calendar className="w-5 h-5" />
            Termin vereinbaren
          </Link>
        </div>
      </section>

      {/* ── DREI ANGEBOTE ───────────────────────────────────── */}
      <section className="py-28 bg-[#FFFAF5]" id="angebote">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#2D2A26] mb-5">Meine Angebote</h2>
            <div className="w-12 h-px bg-[#B8860B] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(45,42,38,0.07)] hover:shadow-[0_8px_32px_rgba(45,42,38,0.12)] transition-shadow group"
              >
                <ImagePlaceholder variant={offer.variant} className="h-52 w-full" />
                <div className="p-8">
                  <h3 className="text-[#2D2A26] mb-4">{offer.title}</h3>
                  <p
                    className="text-stone-500 leading-relaxed mb-6"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.05rem)" }}
                  >
                    {offer.text}
                  </p>
                  <Link
                    href={offer.href}
                    className="inline-flex items-center gap-1 text-[#B8860B] font-medium text-sm tracking-wide uppercase hover:gap-2 transition-all"
                    style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
                  >
                    Weiterlesen <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÜBER MICH ───────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <ImagePlaceholder
                variant="sand"
                className="w-full h-[500px] rounded-2xl shadow-[0_8px_40px_rgba(45,42,38,0.10)]"
              />
            </div>
            <div>
              <p
                className="text-[#B8860B] uppercase tracking-widest text-xs mb-5"
                style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
              >
                Über mich
              </p>
              <h2 className="text-[#2D2A26] mb-6">Antonia Braditsch</h2>
              <div className="w-10 h-px bg-[#B8860B] mb-8" />
              <p className="text-stone-600 leading-relaxed mb-6">
                In der Praxis verbinde ich meine achtsame Zugangsweise mit den
                Schwerpunkten Klang, Stimme und Medialität. All meine Methoden dienen
                dazu, dich Schritt für Schritt zu dir selbst zu begleiten, dabei
                Hinderliches zu transformieren.
              </p>
              <p className="text-stone-600 leading-relaxed mb-10">
                Ich möchte <em>dich</em> mit Klängen, Worten, Gesang und Musik
                inspirieren und zu deiner wahren Größe und Strahlkraft begleiten,
                damit du dein Leben bewusst, selbstbestimmt und erfüllt genießen mögest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                  className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-semibold px-7 py-3.5 rounded-full transition-colors min-h-[52px] shadow-sm"
                  style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
                >
                  <Calendar className="w-4 h-4" />
                  Termin vereinbaren
                </Link>
                <Link
                  href="/ueber-mich"
                  className="inline-flex items-center gap-2 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-colors min-h-[52px]"
                  style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
                >
                  Weiterlesen <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HILDEGARD VON BINGEN ────────────────────────────── */}
      <section className="py-28 bg-[#FFFAF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p
                className="text-[#B8860B] uppercase tracking-widest text-xs mb-5"
                style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
              >
                Historisch &amp; Inspirierend
              </p>
              <h2 className="text-[#2D2A26] mb-6">Hildegard von Bingen</h2>
              <div className="w-10 h-px bg-[#B8860B] mb-8" />
              <p className="text-stone-600 leading-relaxed mb-10">
                Hildegard von Bingen ist eine faszinierende und inspirierende
                Persönlichkeit. Mit ihrem liebevollen Menschenverständnis und der
                ausgeprägten Naturverbundenheit ist sie heute aktueller denn je. Über
                ihr Leben, Werk und Wirken spreche ich in Workshops und stelle es in
                szenischen Lesungen mit ihren Originalgesängen sowie Musik auf
                mittelalterlichen Instrumenten dar.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/hildegard-von-bingen#podcast"
                  className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-semibold px-7 py-3.5 rounded-full transition-colors min-h-[52px] shadow-sm"
                  style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
                >
                  <Music className="w-4 h-4" />
                  Vale Retro Podcast
                </Link>
                <Link
                  href="/hildegard-von-bingen#music"
                  className="inline-flex items-center gap-2 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-colors min-h-[52px]"
                  style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
                >
                  Modern Mystic Music
                </Link>
              </div>
            </div>
            <div>
              <ImagePlaceholder
                variant="rose"
                className="w-full h-[420px] rounded-2xl shadow-[0_8px_40px_rgba(45,42,38,0.10)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GESETZLICHER HINWEIS ────────────────────────────── */}
      <section className="py-10 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-500 text-sm leading-relaxed">
            <strong className="text-stone-600">Verpflichtender gesetzlicher Hinweis:</strong>{" "}
            Ich weise ausdrücklich darauf hin, dass meine Anwendungen keine ärztliche
            Therapie oder Psychotherapie ersetzen.
          </p>
        </div>
      </section>
    </>
  );
}
