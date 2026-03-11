import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ChevronRight, Music } from "lucide-react";
import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Antonia Braditsch | Klangtherapie & Heilfrequenzen | Lichtenwörth",
  description:
    "Klangtherapie, Stimmarbeit und mediale Begleitung in Lichtenwörth, Österreich. Antonia Braditsch begleitet dich mit Heilfrequenzen und Klangschalen zu innerer Balance und Heilung.",
};

const supportPoints = [
  "…deine Lebensenergie aus dem Gleichgewicht gekommen ist.",
  "…du die Hilfe deines Unterbewusstseins zu Hilfe nehmen möchtest.",
  "…du dich auf sanfte und behutsame Art mit deinem Inneren verbinden willst.",
  "…Stress reduziert und das Immunsystem gestärkt werden sollen.",
  "…du dein Leben bewusst in Freude und Fülle genießen möchtest.",
];

const offers = [
  {
    title: "Klang",
    href: "/klang",
    mesh: "mesh-gold",
    text: "Aus den Schwingungen der Klangschalen, Gongs und anderen obertonreichen Instrumenten sucht sich dein Körper jene Heilfrequenzen heraus, die für dich hilfreich sind.",
  },
  {
    title: "Stimme",
    href: "/stimme",
    mesh: "mesh-rose",
    text: "Die Stimme ist das älteste Heilinstrument der Menschheit. Das Singen von Tönen, die aus uns selbst heraus entstehen, ist tief in unserer Biologie verankert.",
  },
  {
    title: "Medialität",
    href: "/medialitaet",
    mesh: "mesh-sage",
    text: "In der medialen Arbeit bin ich Vermittlerin zwischen der materiellen und der geistigen Welt – lichtvolle Energien, die genau zur richtigen Zeit zu dir kommen.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-bg relative flex flex-col items-center justify-center text-center px-6 overflow-hidden" style={{ minHeight: "85vh" }}>
        {/* Subtle noise grain */}
        <div className="grain absolute inset-0 pointer-events-none" />

        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "120px", background: "linear-gradient(to bottom, transparent, var(--sage))" }}
        />

        <div className="relative z-10 flex flex-col items-center pt-24 pb-10">
          {/* Logo */}
          <AnimateIn delay={150}>
            <div style={{ marginBottom: "32px" }}>
              <Image
                src="/images/braditsch-logo.png"
                alt="Antonia Braditsch"
                width={600}
                height={200}
                className="mx-auto object-contain"
                style={{ maxWidth: "clamp(280px, 80vw, 600px)", width: "100%", height: "auto" }}
                priority
              />
            </div>
          </AnimateIn>

          {/* Three gold dots */}
          <AnimateIn delay={280}>
            <p
              className="mb-8 select-none"
              style={{ color: "var(--gold)", opacity: 0.35, fontSize: "0.55rem", letterSpacing: "1em" }}
            >
              · · ·
            </p>
          </AnimateIn>

          <AnimateIn delay={400}>
            <p
              className="uppercase mb-14"
              style={{
                fontFamily: "var(--font-accent), Georgia, serif",
                color: "var(--gold)",
                fontSize: "11px",
                letterSpacing: "0.28em",
              }}
            >
              Klangtherapie &amp; Heilfrequenzen
            </p>
          </AnimateIn>

          <AnimateIn delay={550}>
            <Link href="/termine" className="btn-gold-outline">
              Termin vereinbaren
            </Link>
          </AnimateIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
          <span className="text-[9px] uppercase tracking-[0.25em] opacity-50"
            style={{ fontFamily: "var(--font-accent), Georgia, serif", color: "var(--gold)" }}>
            Entdecken
          </span>
          <ChevronDown className="w-4 h-4 opacity-50" style={{ color: "var(--gold)" }} />
        </div>
      </section>

      {/* ── ICH UNTERSTÜTZE ───────────────────────────────── */}
      <section className="py-20 sm:py-32 px-5 sm:px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimateIn>
            <p
              className="italic mb-16 text-lg sm:text-xl"
              style={{
                fontFamily: "var(--font-accent), Georgia, serif",
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              Ich unterstütze Menschen wie dich, wenn…
            </p>
          </AnimateIn>

          <div className="space-y-10">
            {supportPoints.map((point, i) => (
              <AnimateIn key={i} delay={i * 120}>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
                >
                  {point}
                </p>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={700}>
            <div className="mt-16">
              <span className="gold-line" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── MEINE ARBEIT ─────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-5 sm:px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6894D] mb-5"
              style={{ fontFamily: "var(--font-accent), Georgia, serif" }}>
              Angebote
            </p>
            <h2 className="section-title">Meine Arbeit</h2>
            <span className="gold-line mt-6" />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16">
            {offers.map((offer, i) => (
              <AnimateIn key={offer.title} delay={i * 150} className="text-center group">
                {/* Mesh gradient circle */}
                <div className="relative mx-auto mb-8 w-52 h-52 sm:w-60 sm:h-60">
                  <div
                    className={`${offer.mesh} grain relative w-full h-full rounded-full shadow-lg transition-shadow duration-700 group-hover:shadow-[0_0_40px_rgba(166,137,77,0.25)]`}
                  />
                </div>

                <h3
                  className="mb-4 text-xl sm:text-2xl font-light"
                  style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.08em" }}
                >
                  {offer.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-6"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  {offer.text}
                </p>
                <Link href={offer.href} className="link-gold">
                  Weiterlesen <ChevronRight className="w-3 h-3" />
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÜBER MICH ────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-5 sm:px-6" style={{ backgroundColor: "#F2EDE6" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          <AnimateIn scaleIn>
            <div
              className="relative w-full aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-[0_20px_60px_rgba(61,50,41,0.12)] overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              <Image
                src="/Über mich.avif"
                alt="Antonia Braditsch"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 384px, 420px"
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6894D] mb-6"
              style={{ fontFamily: "var(--font-accent), Georgia, serif" }}>
              Über mich
            </p>
            <h2 className="section-title mb-3">Antonia Braditsch</h2>
            <span className="block w-12 h-px bg-[#A6894D] opacity-60 mb-10" />

            <p className="mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              In der Praxis verbinde ich meine achtsame Zugangsweise mit den Schwerpunkten
              Klang, Stimme und Medialität. All meine Methoden dienen dazu, dich Schritt
              für Schritt zu dir selbst zu begleiten, dabei Hinderliches zu transformieren.
            </p>
            <p className="mb-12 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Ich möchte <em>dich</em> mit Klängen, Worten, Gesang und Musik inspirieren
              und zu deiner wahren Größe und Strahlkraft begleiten – damit du dein Leben
              bewusst, selbstbestimmt und erfüllt genießen mögest.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="/termine" className="btn-gold-outline">
                Termin vereinbaren
              </Link>
              <Link href="/ueber-mich" className="link-gold self-center">
                Mehr über mich <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── HILDEGARD VON BINGEN ─────────────────────────── */}
      <section className="relative py-20 sm:py-36 px-5 sm:px-6 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
        {/* Decorative bg quote */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[10rem] sm:text-[16rem] lg:text-[22rem] font-light leading-none whitespace-nowrap"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              color: "var(--text)",
              opacity: 0.04,
              letterSpacing: "-0.02em",
              userSelect: "none",
            }}
          >
            Hildegard
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6894D] mb-6"
              style={{ fontFamily: "var(--font-accent), Georgia, serif" }}>
              1098 – 1179
            </p>
            <h2 className="section-title mb-6">Hildegard von Bingen</h2>
            <span className="gold-line mb-10" />
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              Hildegard von Bingen ist eine faszinierende und inspirierende Persönlichkeit.
              Mit ihrem liebevollen Menschenverständnis und der ausgeprägten Naturverbundenheit
              ist sie heute aktueller denn je.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-14" style={{ color: "var(--text-muted)" }}>
              Über ihr Leben, Werk und Wirken spreche ich in Workshops und stelle es in
              szenischen Lesungen mit ihren Originalgesängen sowie Musik auf mittelalterlichen
              Instrumenten dar.
            </p>
          </AnimateIn>

          <AnimateIn delay={350}>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="/hildegard-von-bingen#podcast"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A6894D] hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
              >
                <Music className="w-3.5 h-3.5" />
                Vale Retro Podcast
              </Link>
              <span className="text-[#A6894D] opacity-30">|</span>
              <Link
                href="/hildegard-von-bingen#music"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A6894D] hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-accent), Georgia, serif" }}
              >
                Modern Mystic Music
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── VIDEOS ───────────────────────────────────────── */}
      <section className="py-20 sm:py-32 px-5 sm:px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6894D] mb-5"
              style={{ fontFamily: "var(--font-accent), Georgia, serif" }}>
              Videos
            </p>
            <h2 className="section-title">Antonia im Gespräch</h2>
            <span className="gold-line mt-6" />
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "6i_xF07PZIw", title: "Klänge & Heilfrequenzen" },
              { id: "u2ClytRGe6U", title: "Stimme & Singen" },
              { id: "JQQ93m8GRbI", title: "Mein Werdegang" },
            ].map((video, i) => (
              <AnimateIn key={video.id} delay={i * 120}>
                <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 8px 32px rgba(61,50,41,0.12)" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                    />
                  </div>
                </div>
                <p
                  className="mt-4 text-center text-sm"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif", letterSpacing: "0.04em" }}
                >
                  {video.title}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── GESETZLICHER HINWEIS ─────────────────────────── */}
      <section className="py-8 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <span style={{ fontFamily: "var(--font-accent), Georgia, serif" }}>
              Gesetzlicher Hinweis:
            </span>{" "}
            Ich weise ausdrücklich darauf hin, dass meine Anwendungen keine ärztliche
            Therapie oder Psychotherapie ersetzen.
          </p>
        </div>
      </section>
    </>
  );
}
