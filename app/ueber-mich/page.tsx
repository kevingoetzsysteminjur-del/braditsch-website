import Link from "next/link";
import { Calendar, Heart, Star, Leaf } from "lucide-react";

function ImagePlaceholder({ className = "", variant = "warm" }: { className?: string; variant?: "gold" | "warm" | "sand" | "rose" | "creme" }) {
  const gradients = {
    gold: "bg-gradient-to-br from-[#F5E6C8] via-[#E8C97A] to-[#C9A44A]",
    warm: "bg-gradient-to-br from-[#F7EED8] via-[#EDD9B0] to-[#D4AF7A]",
    creme: "bg-gradient-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#EAD9C0]",
    sand: "bg-gradient-to-br from-[#F5ECD8] via-[#E8D5B0] to-[#C8A87A]",
    rose: "bg-gradient-to-br from-[#F7EDEA] via-[#EDD5C8] to-[#C9A090]",
  };
  return <div className={`${gradients[variant]} ${className}`} />;
}

const values = [
  { icon: Heart, label: "Herzlichkeit", text: "Jeder Mensch wird mit offensem Herz und voller Wertschätzung empfangen." },
  { icon: Leaf, label: "Sanftheit", text: "Alle Methoden sind behutsam und respektvoll gegenüber deinem inneren Tempo." },
  { icon: Star, label: "Authentizität", text: "Ich stehe für das, was ich tue – mit ganzer Überzeugung und innerer Wahrhaftigkeit." },
];

export default function UeberMichPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96">
        <ImagePlaceholder variant="warm" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1
            className="text-5xl sm:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Über mich
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ImagePlaceholder variant="rose" className="w-full h-[500px] rounded-3xl shadow-2xl" />
            </div>
            <div>
              <h2
                className="text-4xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Antonia Braditsch
              </h2>
              <p className="text-[#B8860B] font-semibold uppercase tracking-widest text-sm mb-6">
                Klangtherapeutin · Stimmarbeit · Medialität
              </p>
              <div className="w-16 h-1 bg-[#B8860B] mb-8 rounded-full" />

              <p className="text-xl text-stone-700 leading-relaxed mb-6">
                In der Praxis verbinde ich meine achtsame Zugangsweise mit den Schwerpunkten
                Klang, Stimme und Medialität. All meine Methoden dienen dazu, dich Schritt für
                Schritt zu dir selbst zu begleiten.
              </p>
              <p className="text-xl text-stone-700 leading-relaxed mb-6">
                Dabei geht es darum, Hinderliches zu transformieren, damit du Zugang zu deinen
                Fähigkeiten und Potentialen erhältst – zu dem, wer du wirklich bist.
              </p>
              <p className="text-xl text-stone-700 leading-relaxed mb-10">
                Ich möchte <strong>DICH</strong> mit Klängen, Worten, Gesang und Musik
                inspirieren und dich zu deiner wahren Größe und Strahlkraft begleiten, damit
                du dein Leben bewusst, selbstbestimmt und erfüllt genießen mögest.
              </p>

              <Link
                href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
              >
                <Calendar className="w-4 h-4" />
                Termin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Werdegang */}
      <section className="py-24 bg-white" id="werdegang">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-stone-900 mb-6 text-center"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Werdegang
          </h2>
          <div className="w-16 h-1 bg-[#B8860B] mx-auto mb-12 rounded-full" />

          <div className="space-y-8">
            {[
              { year: "Ausbildung", text: "Ausbildung in Klangtherapie und Klangschalenarbeit bei renommierten Lehrern in Österreich und Deutschland." },
              { year: "Stimmarbeit", text: "Vertiefende Studien in der therapeutischen Stimmarbeit und im heilsamen Singen." },
              { year: "Medialität", text: "Intensive Auseinandersetzung mit medialen Fähigkeiten und spiritueller Entwicklung." },
              { year: "Hildegard", text: "Leidenschaftliche Beschäftigung mit dem Werk und Leben der Hildegard von Bingen." },
              { year: "VIVARIUM", text: "Eröffnung der eigenen Praxis im VIVARIUM in Lichtenwörth, Niederösterreich." },
            ].map((item) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="w-32 shrink-0">
                  <span className="text-[#B8860B] font-bold text-lg">{item.year}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-[#E8D8C4] last:border-0">
                  <p className="text-stone-700 text-xl leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-24 bg-[#FFF8F0]" id="laufbahn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-stone-900 mb-6 text-center"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Meine Werte
          </h2>
          <div className="w-16 h-1 bg-[#B8860B] mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.label} className="bg-white rounded-3xl p-8 border border-[#E8D8C4] text-center shadow-sm">
                <div className="w-16 h-16 bg-[#F5EDE0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#B8860B]" />
                </div>
                <h3
                  className="text-2xl font-bold text-stone-900 mb-4"
                  style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                >
                  {value.label}
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
