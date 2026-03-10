export default function AgbPage() {
  return (
    <section className="py-24 bg-[#FFF8F0] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-bold text-stone-900 mb-4"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          AGBs &amp; Kundeninfo
        </h1>
        <div className="w-16 h-1 bg-[#B8860B] mb-10 rounded-full" />

        <div className="bg-white rounded-3xl p-8 border border-[#E8D8C4] shadow-sm space-y-8 text-stone-700 text-lg leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              1. Terminvereinbarung & Absagen
            </h2>
            <p className="mb-3">
              Termine können telefonisch oder per E-Mail vereinbart werden. Bitte sage
              deinen Termin mindestens <strong>48 Stunden im Voraus</strong> ab, wenn du
              verhindert bist.
            </p>
            <p>
              Bei kurzfristigen Absagen (weniger als 24 Stunden) behalte ich mir vor,
              50% des Sitzungspreises in Rechnung zu stellen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              2. Zahlung
            </h2>
            <p>
              Die Zahlung erfolgt bar nach der Sitzung. Auf Wunsch ist auch Überweisung
              möglich. Bitte sprich dies bei der Terminvereinbarung an.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              3. Gesundheitlicher Hinweis
            </h2>
            <p className="font-semibold text-stone-900 mb-2">Wichtig:</p>
            <p>
              Meine Angebote sind komplementäre Methoden zur Entspannung und Unterstützung
              des Wohlbefindens. Sie ersetzen <strong>keine ärztliche Behandlung,
              Psychotherapie oder medizinische Diagnose</strong>.
            </p>
            <p className="mt-3">
              Bei gesundheitlichen Beschwerden wende dich bitte immer zuerst an einen Arzt
              oder eine Ärztin deines Vertrauens.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              4. Vertraulichkeit
            </h2>
            <p>
              Alle persönlichen Informationen, die du in einer Sitzung teilst, werden
              streng vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-3" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
              5. Kontakt bei Fragen
            </h2>
            <p>
              Bei Fragen zu diesen Bedingungen erreichst du mich unter{" "}
              <a href="mailto:antonia@braditsch.at" className="text-[#B8860B] hover:underline">
                antonia@braditsch.at
              </a>{" "}
              oder{" "}
              <a href="tel:+436767516188" className="text-[#B8860B] hover:underline">
                +43 676 7516188
              </a>
              .
            </p>
          </div>

          <div className="bg-[#F5EDE0] rounded-2xl p-6 border border-[#E8D8C4]">
            <p className="text-stone-600">
              <strong>Hinweis:</strong> Dies ist ein vereinfachter Platzhalter. Für vollständige,
              rechtssichere AGBs gemäß österreichischem Recht empfehle ich, einen Rechtsexperten
              hinzuzuziehen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
