import Link from "next/link";
import { Youtube, Music, Mic } from "lucide-react";

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div className={`bg-gradient-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#EAD9C0] ${className}`} />;
}

export default function HildegardPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#C9A44A]" />
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-[#B8860B] font-semibold uppercase tracking-widest text-sm mb-3">
            1098 – 1179
          </p>
          <h1
            className="text-4xl sm:text-6xl font-bold text-stone-900 mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Hildegard von Bingen
          </h1>
          <p className="text-stone-700 text-xl max-w-xl">
            Äbtissin · Heilerin · Komponistin · Mystikerin
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Eine Visionärin für unsere Zeit
              </h2>
              <div className="w-16 h-1 bg-[#B8860B] mb-8 rounded-full" />
              <p className="text-xl text-stone-700 leading-relaxed mb-6">
                Hildegard von Bingen ist eine faszinierende und inspirierende Persönlichkeit.
                Mit ihrem liebevollen Menschenverständnis und der ausgeprägten Naturverbundenheit
                ist sie heute aktueller denn je.
              </p>
              <p className="text-xl text-stone-700 leading-relaxed mb-6">
                Als Benediktiner-Äbtissin, Heilerin, Naturforscherin, Komponistin und Mystikerin
                hat sie ein Lebenswerk hinterlassen, das bis heute begeistert und inspiriert.
                Ihre Heilkunde, ihre Musik und ihre visionären Schriften berühren Menschen
                quer durch alle Zeiten und Kulturen.
              </p>
              <p className="text-xl text-stone-700 leading-relaxed">
                Über ihr Leben, Werk und Wirken spreche ich in Workshops und stelle es in
                szenischen Lesungen mit ihren <strong>Originalgesängen</strong> sowie Musik
                auf mittelalterlichen Instrumenten dar.
              </p>
            </div>
            <div>
              <ImagePlaceholder className="w-full h-[480px] rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vale Retro Podcast */}
      <section className="py-24 bg-white" id="podcast">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#F5EDE0] rounded-3xl p-10 border border-[#E8D8C4]">
              <div className="w-20 h-20 bg-[#B8860B] rounded-2xl flex items-center justify-center mb-6">
                <Mic className="w-10 h-10 text-white" />
              </div>
              <h2
                className="text-3xl font-bold text-stone-900 mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Vale Retro Podcast
              </h2>
              <p className="text-stone-700 text-lg leading-relaxed mb-8">
                Im Podcast „Vale Retro" tauche ich tief in die Welt der Hildegard von Bingen
                ein. Ich erzähle von ihrem Leben, erkläre ihre Heilmethoden und lasse ihre
                Weisheit für unsere heutige Zeit lebendig werden. Ein Podcast für alle, die
                sich von dieser außergewöhnlichen Frau inspirieren lassen möchten.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
              >
                <Youtube className="w-5 h-5" />
                Zum Podcast auf YouTube
              </Link>
            </div>

            <div>
              <h3
                className="text-2xl font-bold text-stone-900 mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Themen im Podcast
              </h3>
              <div className="space-y-4">
                {[
                  "Das Leben und Wirken der Hildegard von Bingen",
                  "Ihre Heilpflanzen und Naturheilkunde",
                  "Visionen und mystische Erfahrungen",
                  "Die Musik der Hildegard – Klang und Heilung",
                  "Hildegards Aktualität für unsere Zeit",
                  "Szenische Lesungen und Originalgesänge",
                ].map((thema) => (
                  <div key={thema} className="flex items-center gap-3 text-stone-700 text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#B8860B] shrink-0" />
                    {thema}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Mystic Music */}
      <section className="py-24 bg-[#FFF8F0]" id="music">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Modern Mystic Music
              </h2>
              <div className="w-16 h-1 bg-[#9B7CB9] mb-8 rounded-full" />
              <p className="text-xl text-stone-700 leading-relaxed mb-6">
                „Modern Mystic Music" vereint die alte Weisheit der Hildegard von Bingen
                mit zeitgenössischen Klängen. Originalgesänge aus dem Mittelalter werden
                neu interpretiert und mit modernen Elementen verbunden.
              </p>
              <p className="text-xl text-stone-700 leading-relaxed mb-8">
                Eine einzigartige musikalische Reise, die Vergangenheit und Gegenwart
                verbindet und die zeitlose Kraft der Hildegard-Musik erlebbar macht.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#9B7CB9] hover:bg-[#8264A8] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
              >
                <Music className="w-5 h-5" />
                Videos auf YouTube ansehen
              </Link>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#E8DEFF] via-[#C4A8E0] to-[#9B7CB9] rounded-3xl p-10 flex items-center justify-center h-72">
                <div className="text-center">
                  <Music className="w-16 h-16 text-white mx-auto mb-4" />
                  <p className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    Modern Mystic Music
                  </p>
                  <p className="text-white/80 mt-2">Videos demnächst verfügbar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
