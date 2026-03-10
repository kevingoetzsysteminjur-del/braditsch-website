import Link from "next/link";
import { Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";

export default function TerminePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5E6C8] via-[#E8D0A0] to-[#B8860B] py-24 text-center">
        <h1
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Termine
        </h1>
        <p className="text-white/90 text-xl">Ich freue mich auf deine Anfrage</p>
      </section>

      {/* Kontakt */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Kontaktinfo */}
            <div>
              <h2
                className="text-4xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Terminvereinbarung
              </h2>
              <div className="w-16 h-1 bg-[#B8860B] mb-8 rounded-full" />
              <p className="text-xl text-stone-700 leading-relaxed mb-10">
                Terminvereinbarungen gerne telefonisch oder per E-Mail. Ich antworte
                so schnell wie möglich und freue mich darauf, dich kennenzulernen.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+436767516188"
                  className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-[#E8D8C4] shadow-sm hover:border-[#B8860B] hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-[#F5EDE0] rounded-2xl flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
                    <Phone className="w-6 h-6 text-[#B8860B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-sm font-medium mb-1">Telefon</p>
                    <p className="text-stone-900 text-xl font-bold">+43 (0) 676 7516188</p>
                  </div>
                </a>

                <a
                  href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                  className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-[#E8D8C4] shadow-sm hover:border-[#B8860B] hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-[#F5EDE0] rounded-2xl flex items-center justify-center group-hover:bg-[#B8860B] transition-colors">
                    <Mail className="w-6 h-6 text-[#B8860B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-sm font-medium mb-1">E-Mail</p>
                    <p className="text-stone-900 text-xl font-bold">antonia@braditsch.at</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-[#E8D8C4] shadow-sm">
                  <div className="w-14 h-14 bg-[#F5EDE0] rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-sm font-medium mb-1">Praxis</p>
                    <p className="text-stone-900 text-xl font-bold">VIVARIUM</p>
                    <p className="text-stone-600">Angergasse 7, 2493 Lichtenwörth</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                  className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-8 py-4 rounded-xl transition-colors min-h-[56px] text-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Termin anfragen
                </Link>
              </div>
            </div>

            {/* Termine & Veranstaltungen */}
            <div>
              <h2
                className="text-4xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
              >
                Regelmäßige Termine
              </h2>
              <div className="w-16 h-1 bg-[#B8860B] mb-8 rounded-full" />

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-[#E8D8C4] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FAF0DC] rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#B8860B]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-1">Heilsames Singen</h3>
                      <p className="text-[#B8860B] font-semibold mb-2">Offene Gruppe · 25€</p>
                      <p className="text-stone-600">Jeden 3. Mittwoch im Monat</p>
                      <p className="text-stone-600">18:30 – 20:00 Uhr</p>
                      <p className="text-stone-500 text-sm mt-2">VIVARIUM, Lichtenwörth</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F5EDE0] rounded-2xl p-6 border border-[#E8D8C4]">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-[#B8860B]" />
                    <h3 className="text-lg font-bold text-stone-900">Workshops & Sonderveranstaltungen</h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Für aktuelle Workshop-Termine und Sonderveranstaltungen (Hildegard von
                    Bingen Lesungen, Klangabende etc.) kontaktiere mich bitte direkt.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#E8D8C4] shadow-sm text-center">
                  <p className="text-stone-600 text-lg mb-4">
                    Einzeltermine für alle Angebote nach Vereinbarung.
                  </p>
                  <Link
                    href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
                    className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
