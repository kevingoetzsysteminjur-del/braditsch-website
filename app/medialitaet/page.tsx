import Link from "next/link";
import { Calendar, Star } from "lucide-react";

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div className={`bg-gradient-to-br from-[#F5E6C8] via-[#E8D0A0] to-[#B8860B] ${className}`} />;
}

export default function MedialitaetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96">
        <ImagePlaceholder className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1
            className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            MEDIALITÄT
          </h1>
          <p className="text-white/90 text-xl max-w-lg">
            Vermittlerin zwischen den Welten
          </p>
        </div>
      </section>

      {/* Inhalt */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-4xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Was ist mediale Arbeit?
              </h2>
              <div className="w-16 h-1 bg-[#B8860B] mb-8 rounded-full" />

              <p className="text-xl text-stone-700 leading-relaxed mb-6">
                In der medialen Arbeit bin ich Vermittlerin zwischen der materiellen und der
                geistigen Welt. Mit dieser Fähigkeit kann ich lichtvolle Energien wahrnehmen
                und damit in Kontakt treten.
              </p>
              <p className="text-xl text-stone-700 leading-relaxed mb-6">
                Personalisierte Nachrichten kommen <strong>FÜR DICH</strong> genau zur richtigen
                Zeit als Unterstützung aus der geistigen Welt. Diese Begegnungen sind immer
                liebevoll, nährend und aufbauend.
              </p>
              <p className="text-xl text-stone-700 leading-relaxed mb-10">
                Die mediale Arbeit kann dir helfen, Klarheit zu finden, Orientierung zu bekommen,
                Trauer zu verarbeiten und dich mit deiner eigenen Seele und mit geliebten
                Menschen auf der anderen Seite zu verbinden.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Lichtvolle, liebevolle Kommunikation",
                  "Personalisierte Botschaften für dich",
                  "Orientierung und innere Klarheit",
                  "Verbindung mit der geistigen Welt",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-[#B8860B] shrink-0" fill="currentColor" />
                    <span className="text-stone-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="mailto:antonia@braditsch.at?subject=Termin vereinbaren - Medialität"
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-8 py-4 rounded-xl transition-colors min-h-[56px] text-lg"
              >
                <Calendar className="w-5 h-5" />
                Termin vereinbaren
              </Link>
            </div>

            <div className="space-y-6">
              <ImagePlaceholder className="w-full h-80 rounded-3xl shadow-xl" />

              <div className="bg-white rounded-3xl p-8 border border-[#E8D8C4] shadow-sm">
                <h3
                  className="text-2xl font-bold text-stone-900 mb-4"
                  style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                >
                  Wichtiger Hinweis
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Die mediale Arbeit ist eine spirituelle Praxis und ersetzt keine medizinische
                  oder psychologische Behandlung. Sie dient der persönlichen Orientierung und
                  dem inneren Wachstum. Alle Informationen sind als inspirative Impulse zu
                  verstehen.
                </p>
              </div>
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
