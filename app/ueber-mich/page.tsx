import Link from "next/link";
import Image from "next/image";
import { Calendar, Heart, Star, Leaf, ChevronRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const values = [
  { icon: Heart, label: "Herzlichkeit", text: "Jeder Mensch wird mit offenem Herz und voller Wertschätzung empfangen." },
  { icon: Leaf, label: "Sanftheit", text: "Alle Methoden sind behutsam und respektvoll gegenüber deinem inneren Tempo." },
  { icon: Star, label: "Authentizität", text: "Ich stehe für das, was ich tue – mit ganzer Überzeugung und innerer Wahrhaftigkeit." },
];

const werdegang = [
  { label: "Ausbildung", text: "Ausbildung in Klangtherapie und Klangschalenarbeit bei renommierten Lehrern in Österreich und Deutschland." },
  { label: "Stimmarbeit", text: "Vertiefende Studien in der therapeutischen Stimmarbeit und im heilsamen Singen." },
  { label: "Medialität", text: "Intensive Auseinandersetzung mit medialen Fähigkeiten und spiritueller Entwicklung." },
  { label: "Hildegard", text: "Leidenschaftliche Beschäftigung mit dem Werk und Leben der Hildegard von Bingen." },
  { label: "VIVARIUM", text: "Eröffnung der eigenen Praxis im VIVARIUM in Lichtenwörth, Niederösterreich." },
];

export default function UeberMichPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "55vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto pt-32 pb-20">
          <AnimateIn>
            <p
              className="text-[10px] uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
            >
              Über mich
            </p>
          </AnimateIn>
          <AnimateIn delay={150}>
            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                letterSpacing: "0.2em",
                color: "var(--text)",
                lineHeight: 1.1,
              }}
            >
              Antonia Braditsch
            </h1>
          </AnimateIn>
          <AnimateIn delay={280}>
            <span className="gold-line mb-8 block" />
          </AnimateIn>
          <AnimateIn delay={400}>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Klangtherapeutin · Stimmarbeit · Medialität
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── INTRO / BIO ──────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-5 sm:px-6" style={{ backgroundColor: "#F2EDE6" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          <AnimateIn scaleIn>
            <div
              className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-[0_20px_60px_rgba(61,50,41,0.12)] overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              <Image
                src="/images/ueber-mich.jpg"
                alt="Antonia Braditsch"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 420px"
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="text-xs uppercase tracking-[0.3em] mb-6"
              style={{ fontFamily: "var(--font-accent), Georgia, serif", color: "var(--gold)" }}>
              Meine Geschichte
            </p>
            <h2 className="section-title mb-3">Wer ich bin</h2>
            <span className="block w-12 h-px opacity-60 mb-10" style={{ backgroundColor: "var(--gold)" }} />

            <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              In der Praxis verbinde ich meine achtsame Zugangsweise mit den Schwerpunkten
              Klang, Stimme und Medialität. All meine Methoden dienen dazu, dich Schritt für
              Schritt zu dir selbst zu begleiten.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Dabei geht es darum, Hinderliches zu transformieren, damit du Zugang zu deinen
              Fähigkeiten und Potentialen erhältst – zu dem, wer du wirklich bist.
            </p>
            <p className="mb-12 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Ich möchte <em>dich</em> mit Klängen, Worten, Gesang und Musik inspirieren
              und dich zu deiner wahren Größe und Strahlkraft begleiten, damit du dein Leben
              bewusst, selbstbestimmt und erfüllt genießen mögest.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="/termine" className="btn-gold-outline">
                <Calendar className="w-3.5 h-3.5" />
                Termin vereinbaren
              </Link>
              <Link href="/klang" className="link-gold self-center">
                Meine Angebote <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── WERDEGANG ────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-5 sm:px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-3xl mx-auto">
          <AnimateIn className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] mb-5"
              style={{ fontFamily: "var(--font-accent), Georgia, serif", color: "var(--gold)" }}>
              Mein Weg
            </p>
            <h2 className="section-title">Werdegang</h2>
            <span className="gold-line mt-6" />
          </AnimateIn>

          <div>
            {werdegang.map((item, i) => (
              <AnimateIn key={item.label} delay={i * 100}>
                <div
                  className="flex gap-8 items-start py-10"
                  style={{ borderBottom: i < werdegang.length - 1 ? "1px solid rgba(166,137,77,0.2)" : "none" }}
                >
                  <div className="w-28 shrink-0 pt-1">
                    <span
                      className="text-sm uppercase tracking-[0.1em]"
                      style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p className="flex-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.text}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WERTE ────────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-5 sm:px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] mb-5"
              style={{ fontFamily: "var(--font-accent), Georgia, serif", color: "var(--gold)" }}>
              Wofür ich stehe
            </p>
            <h2 className="section-title">Meine Werte</h2>
            <span className="gold-line mt-6" />
          </AnimateIn>

          <div className="grid sm:grid-cols-3 gap-12 sm:gap-16">
            {values.map((value, i) => (
              <AnimateIn key={value.label} delay={i * 150} className="text-center group">
                <div className="relative mx-auto mb-8 w-24 h-24">
                  <div className="mesh-warm grain w-full h-full rounded-full shadow-md flex items-center justify-center transition-shadow duration-700 group-hover:shadow-[0_0_30px_rgba(166,137,77,0.2)]">
                    <value.icon
                      className="w-8 h-8 relative z-10"
                      style={{ color: "var(--gold)", opacity: 0.85 }}
                    />
                  </div>
                </div>

                <h3
                  className="mb-4 text-xl"
                  style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.06em" }}
                >
                  {value.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  {value.text}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimateIn>
            <h2 className="section-title mb-6">Bereit für deine Reise?</h2>
            <p className="leading-relaxed mb-12" style={{ color: "var(--text-muted)" }}>
              Ich freue mich darauf, dich auf deinem Weg zu begleiten.
              Vereinbare jetzt deinen ersten Termin – ich bin für dich da.
            </p>
            <Link href="/termine" className="btn-gold-outline">
              <Calendar className="w-3.5 h-3.5" />
              Termin vereinbaren
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── GESETZLICHER HINWEIS ─────────────────────────── */}
      <section className="py-8 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
            <span style={{ fontStyle: "italic" }}>Gesetzlicher Hinweis:</span>{" "}
            Ich weise ausdrücklich darauf hin, dass meine Anwendungen keine ärztliche
            Therapie oder Psychotherapie ersetzen.
          </p>
        </div>
      </section>
    </>
  );
}
