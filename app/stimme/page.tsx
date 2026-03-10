import Link from "next/link";
import { Calendar } from "lucide-react";

function ImagePlaceholder({ className = "", variant = "lila" }: { className?: string; variant?: "gold" | "lila" | "creme" | "mixed" }) {
  const gradients = {
    gold: "bg-gradient-to-br from-[#F5E6C8] via-[#E8C97A] to-[#C9A44A]",
    lila: "bg-gradient-to-br from-[#E8DEFF] via-[#C4A8E0] to-[#9B7CB9]",
    creme: "bg-gradient-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#EAD9C0]",
    mixed: "bg-gradient-to-br from-[#F5E6C8] via-[#D4B8E8] to-[#9B7CB9]",
  };
  return <div className={`${gradients[variant]} ${className}`} />;
}

export default function StimmePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96">
        <ImagePlaceholder variant="lila" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1
            className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            STIMME
          </h1>
          <p className="text-white/90 text-xl max-w-lg">
            Das älteste Heilinstrument der Menschheit
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-stone-700 leading-relaxed mb-6">
            Die Stimme ist das älteste Heilinstrument der Menschheit. Das Singen von Tönen,
            die gleichsam <strong>AUS UNS SELBST</strong> heraus entstehen, ist evolutionär
            tief in unserer Biologie verankert.
          </p>
          <p className="text-xl text-stone-700 leading-relaxed">
            Wenn wir singen, produzieren wir heilsame Schwingungen, die unser gesamtes System
            auf tiefe Weise berühren. Studien belegen: Singen stärkt das Immunsystem, reduziert
            Stress, fördert die Ausschüttung von Glückshormonen und verbindet uns mit unserem
            innersten Wesen.
          </p>
        </div>
      </section>

      {/* Angebote */}
      <section className="pb-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Magie der Stimme */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder variant="lila" className="w-full h-72 rounded-3xl shadow-xl" />
            </div>
            <div>
              <h2
                className="text-3xl font-bold text-stone-900 mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Magie der Stimme
              </h2>
              <div className="flex gap-4 mb-6">
                <span className="text-[#B8860B] font-semibold text-lg">90€</span>
                <span className="text-stone-400">|</span>
                <span className="text-stone-500">60 Minuten</span>
              </div>
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Auf der Spurensuche nach deiner authentischen Persönlichkeit begleite ich dich
                dabei, Zugang zu deiner inneren Stimme zu finden. In dieser Einzelstunde
                erkunden wir gemeinsam, was deine Stimme dir sagen möchte – weit über Töne
                und Klang hinaus. Ein zutiefst persönlicher und transformativer Prozess.
              </p>
              <Link
                href="mailto:antonia@braditsch.at?subject=Termin vereinbaren - Magie der Stimme"
                className="inline-flex items-center gap-2 bg-[#9B7CB9] hover:bg-[#8264A8] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
              >
                <Calendar className="w-4 h-4" />
                Termin vereinbaren
              </Link>
            </div>
          </div>

          {/* Heilsames Singen */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:col-start-2 lg:row-start-1">
              <ImagePlaceholder variant="mixed" className="w-full h-72 rounded-3xl shadow-xl" />
            </div>
            <div className="lg:col-start-1 lg:row-start-1">
              <span className="inline-block bg-[#F5EDE0] text-[#9B7CB9] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-[#E8D8C4]">
                Offene Gruppe
              </span>
              <h2
                className="text-3xl font-bold text-stone-900 mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Heilsames Singen
              </h2>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="text-[#B8860B] font-semibold text-lg">25€ pro Abend</span>
                <span className="text-stone-400">|</span>
                <span className="text-stone-500">Jeden 3. Mittwoch im Monat</span>
              </div>
              <div className="bg-[#F5EDE0] rounded-2xl p-5 mb-8 border border-[#E8D8C4]">
                <p className="text-stone-700 font-semibold mb-1">Nächste Termine:</p>
                <p className="text-stone-600">Jeden 3. Mittwoch, 18:30 – 20:00 Uhr</p>
                <p className="text-stone-600">VIVARIUM, Angergasse 7, 2493 Lichtenwörth</p>
              </div>
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                In dieser offenen Gruppe kommen wir gemeinsam zusammen, um die heilsame Kraft
                des Singens zu erleben. Keine Vorkenntnisse nötig – jede Stimme ist willkommen.
                Gemeinsames Singen verbindet, heilt und macht Freude!
              </p>
              <Link
                href="mailto:antonia@braditsch.at?subject=Anmeldung Heilsames Singen"
                className="inline-flex items-center gap-2 bg-[#9B7CB9] hover:bg-[#8264A8] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
              >
                <Calendar className="w-4 h-4" />
                Jetzt anmelden
              </Link>
            </div>
          </div>

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
