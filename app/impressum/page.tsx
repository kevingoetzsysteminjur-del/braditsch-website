export default function ImpressumPage() {
  return (
    <section className="py-24 bg-[#FFF8F0] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-bold text-stone-900 mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Impressum
        </h1>
        <div className="w-16 h-1 bg-[#B8860B] mb-10 rounded-full" />

        <div className="bg-white rounded-3xl p-8 border border-[#E8D8C4] shadow-sm space-y-8 text-stone-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Angaben gemäß § 5 ECG
            </h2>
            <p>Antonia Braditsch</p>
            <p>Angergasse 7</p>
            <p>2493 Lichtenwörth</p>
            <p>Österreich</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a href="tel:+436767516188" className="text-[#B8860B] hover:underline">
                +43 (0) 676 7516188
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:antonia@braditsch.at" className="text-[#B8860B] hover:underline">
                antonia@braditsch.at
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="https://braditsch.at" className="text-[#B8860B] hover:underline">
                www.braditsch.at
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Unternehmensgegenstand
            </h2>
            <p>Klangtherapie, Stimmarbeit, mediale Begleitung</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Zuständige Behörde
            </h2>
            <p>Bezirkshauptmannschaft Wiener Neustadt-Land</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
              keine Gewähr übernommen werden.
            </p>
          </div>

          <div className="bg-[#F5EDE0] rounded-2xl p-6 border border-[#E8D8C4]">
            <p className="text-stone-600">
              <strong>Hinweis:</strong> Dieses Impressum ist ein Platzhalter. Bitte lasse
              das vollständige Impressum von einem österreichischen Rechtsanwalt prüfen und
              an deine spezifische Situation anpassen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
