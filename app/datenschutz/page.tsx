export default function DatenschutzPage() {
  return (
    <section className="py-24 bg-[#FFF8F0] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-bold text-stone-900 mb-4"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Datenschutzerklärung
        </h1>
        <div className="w-16 h-1 bg-[#B8860B] mb-10 rounded-full" />

        <div className="bg-white rounded-3xl p-8 border border-[#E8D8C4] shadow-sm space-y-8 text-stone-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich
              verarbeite Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen
              Bestimmungen (DSGVO, TKG 2003).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              2. Verantwortliche Person
            </h2>
            <p>Antonia Braditsch</p>
            <p>Angergasse 7, 2493 Lichtenwörth, Österreich</p>
            <p>E-Mail: antonia@braditsch.at</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              3. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie per E-Mail oder Telefon Kontakt mit mir aufnehmen, werden Ihre
              angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen gespeichert. Diese Daten gebe ich nicht ohne Ihre
              Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              4. Ihre Rechte
            </h2>
            <p className="mb-4">Ihnen stehen grundsätzlich folgende Rechte zu:</p>
            <ul className="space-y-2 ml-4">
              {[
                "Recht auf Auskunft (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruchsrecht (Art. 21 DSGVO)",
              ].map((right) => (
                <li key={right} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#B8860B] shrink-0" />
                  {right}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              5. Beschwerderecht
            </h2>
            <p>
              Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
              In Österreich ist dies die Datenschutzbehörde (dsb.gv.at).
            </p>
          </div>

          <div className="bg-[#F5EDE0] rounded-2xl p-6 border border-[#E8D8C4]">
            <p className="text-stone-600">
              <strong>Hinweis:</strong> Dies ist eine vereinfachte Datenschutzerklärung als
              Platzhalter. Bitte lasse eine vollständige, rechtssichere Datenschutzerklärung
              gemäß österreichischer DSGVO von einem Rechtsexperten erstellen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
