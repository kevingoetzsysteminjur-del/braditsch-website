"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown, Youtube, Music, ShoppingBag } from "lucide-react";

const SLIDES = [
  "/images/hildegard/szene1.jpg",
  "/images/hildegard/szene2.jpg",
  "/images/hildegard/szene3.jpg",
  "/images/hildegard/szene4.jpg",
];

function Carousel() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 300);
  }, [active]);

  const next = useCallback(() => go((active + 1) % SLIDES.length), [active, go]);
  const prev = useCallback(() => go((active - 1 + SLIDES.length) % SLIDES.length), [active, go]);

  useEffect(() => {
    if (hovered) return;
    timerRef.current = setTimeout(next, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, hovered, next]);

  return (
    <div>
      <div
        className="relative mx-auto overflow-hidden"
        style={{ maxWidth: "900px", borderRadius: "12px", aspectRatio: "16/10" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ position: "absolute", inset: 0, opacity: fading ? 0 : 1, transition: "opacity 0.6s ease" }}>
          <Image src={SLIDES[active]} alt={`Szenenfoto ${active + 1}`} fill className="object-cover" sizes="900px" priority />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "30%", background: "linear-gradient(to top, rgba(61,50,41,0.25), transparent)" }} />
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-70" style={{ backgroundColor: "rgba(250,247,242,0.85)", border: "1px solid rgba(166,137,77,0.3)" }} aria-label="Vorheriges Bild">
          <ChevronLeft className="w-4 h-4" style={{ color: "var(--gold)" }} />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-100 opacity-70" style={{ backgroundColor: "rgba(250,247,242,0.85)", border: "1px solid rgba(166,137,77,0.3)" }} aria-label="Nächstes Bild">
          <ChevronRight className="w-4 h-4" style={{ color: "var(--gold)" }} />
        </button>
        <div className="absolute bottom-4 right-5 text-[10px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body), Georgia, serif" }}>
          {active + 1} / {SLIDES.length}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-5 mx-auto" style={{ maxWidth: "900px" }}>
        {SLIDES.map((src, i) => (
          <button key={i} onClick={() => go(i)} className="relative overflow-hidden shrink-0 transition-all duration-300" style={{ width: "clamp(60px, 12vw, 100px)", aspectRatio: "16/10", borderRadius: "4px", border: i === active ? "2px solid var(--gold)" : "2px solid transparent", opacity: i === active ? 1 : 0.55, outline: "none" }} aria-label={`Bild ${i + 1} anzeigen`}>
            <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="100px" />
          </button>
        ))}
      </div>
      <p className="text-center mt-5 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
        Szenenfotos aus „Der Klang des lebendigen Lichts"
      </p>
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".sr");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("sr-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function HildegardClient() {
  useScrollReveal();

  return (
    <>
      <style>{`
        .sr { opacity: 0; transform: translateY(28px); transition: opacity 0.85s ease, transform 0.85s ease; }
        .sr-visible { opacity: 1 !important; transform: translateY(0) !important; }
        .sr.delay-1 { transition-delay: 0.15s; }
        .sr.delay-2 { transition-delay: 0.3s; }
        .sr.delay-3 { transition-delay: 0.45s; }
        .sr.delay-4 { transition-delay: 0.6s; }
      `}</style>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden" style={{ minHeight: "70vh", backgroundColor: "var(--bg)" }}>
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 30% 40%, rgba(166,137,77,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 70% 60%, rgba(232,213,204,0.35) 0%, transparent 55%)` }} />
        <div className="relative z-10 px-6 pt-36 pb-20">
          <p className="text-[10px] uppercase tracking-[0.35em] mb-6" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>1098 – 1179</p>
          <h1 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 300, fontSize: "clamp(3rem, 9vw, 7rem)", letterSpacing: "0.12em", color: "var(--text)", lineHeight: 1.05 }}>
            Hildegard<br />von Bingen
          </h1>
          <span className="block mt-7 mb-7 mx-auto" style={{ width: "70px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
          <p style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--text-muted)", fontSize: "clamp(0.65rem, 1.4vw, 0.78rem)", letterSpacing: "0.28em", textTransform: "uppercase" }}>
            Prophetin&ensp;·&ensp;Komponistin&ensp;·&ensp;Heilkundige&ensp;·&ensp;Mystikerin
          </p>
          <div className="scroll-indicator mt-16 flex flex-col items-center gap-2 opacity-40">
            <ChevronDown className="w-4 h-4" style={{ color: "var(--gold)" }} />
          </div>
        </div>
      </section>

      {/* HAUPTTEXT */}
      <section className="py-16 sm:py-24 px-5 sm:px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="sr mb-10">
            <p className="text-base sm:text-lg leading-[1.95]" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Hildegard von Bingen (1098–1179) ist seit dem christlichen Mittelalter eine einzigartige und unerreicht dastehende Persönlichkeit. Sie gründete zwei Klöster, dichtete Hymnen und komponierte liturgische Gesänge, verfasste ein umfangreiches theologisch-philosophisches Werk und hinterlässt eine außergewöhnliche Naturheilkunde. Sie wetterte auf Predigtreisen gegen Maßlosigkeit, Geldgier und Ämterschacher und stand mit weltlichen und religiösen Entscheidungsträgern in ganz Europa im mahnenden Briefwechsel.
            </p>
          </div>
          <div className="sr delay-1 mb-10">
            <p className="text-base sm:text-lg leading-[1.95]" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Hildegard war bereits von ihren Zeitgenossen eine hoch respektierte, vielbewunderte Frau und wurde als <em style={{ color: "var(--text)" }}>Prophetissa teutonica</em> gepriesen. Sie selbst empfand sich nur als einfaches Sprachrohr Gottes. 1227 wurde ein erster Antrag auf Heiligsprechung gestellt. Am 10. Mai 2012 wurde sie von Papst Benedikt XVI. heilig gesprochen und am 17. Oktober 2012 feierlich zur Kirchenlehrerin erhoben.
            </p>
          </div>
          <div className="sr delay-2 mb-10">
            <p className="text-base sm:text-lg leading-[1.95]" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Für Hildegard ist Gesang Widerhall der himmlischen Harmonie und somit göttlichen Ursprungs. Als einzige Frau des deutschen Mittelalters hat sie einen umfangreichen lyrisch-musikalischen Zyklus geschaffen, den sie <em style={{ color: "var(--text)" }}>'Symphonia harmoniae caelestium revelationum'</em> nennt. Die einstimmigen liturgischen Gesänge weisen im Vergleich zur damals gebräuchlichen Gregorianik einen sehr weitläufigen Tonumfang auf.
            </p>
          </div>
          <div className="sr delay-3 my-14 py-10 px-8 sm:px-12" style={{ borderLeft: "3px solid var(--gold)", backgroundColor: "var(--sage)" }}>
            <p className="text-xl sm:text-2xl leading-relaxed mb-5" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "var(--text)", letterSpacing: "0.02em" }}>
              „Beim Hören eines Liedes pflegt der Mensch manchmal tief zu atmen und zu seufzen, weil er sich daran erinnert, dass die Seele der himmlischen Harmonie entstammt."
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>– Brief an die Mainzer Prälaten</p>
          </div>
          <div className="sr delay-4">
            <p className="text-base sm:text-lg leading-[1.95]" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              In der szenischen Lesung <em style={{ color: "var(--text)" }}>'Der Klang des lebendigen Lichts'</em> erleben Sie die erstaunliche Lebensgeschichte dieser außergewöhnlichen Ordensfrau mit Zitaten, Gesängen und Musik auf Originalklang-Instrumenten wie <em style={{ color: "var(--text)" }}>Psalterium, Scheitholz, Handorgel, Monochord</em> und <em style={{ color: "var(--text)" }}>Saitentamburin</em>.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-12 sm:py-20 px-5 sm:px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="sr text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Galerie</p>
            <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "0.06em", color: "var(--text)" }}>
              Der Klang des lebendigen Lichts
            </h2>
            <span className="block mt-5 mx-auto" style={{ width: "50px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
          </div>
          <div className="sr delay-1"><Carousel /></div>
        </div>
      </section>

      {/* WEITERE ANGEBOTE */}
      <section className="py-12 sm:py-20 px-5 sm:px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="sr text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Entdecken</p>
            <span className="block mx-auto" style={{ width: "50px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="sr delay-1 p-7" style={{ border: "1px solid rgba(166,137,77,0.18)", backgroundColor: "var(--bg)" }}>
              <div className="mb-4"><Youtube className="w-5 h-5" style={{ color: "var(--gold)" }} /></div>
              <p className="text-sm mb-2" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.05em", fontSize: "1.05rem" }}>Vale Retro</p>
              <p className="text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Podcast</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                Kurzvideos mit Originalzitaten der Hildegard von Bingen aus der Doppel-CD „Der Klang des lebendigen Lichts".
              </p>
              <a href="https://www.youtube.com/playlist?list=PLadxowpwU-7AWbopuRKv3wxB7wNSQoXCk" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
                Auf YouTube ansehen →
              </a>
            </div>
            <div className="sr delay-2 p-7" style={{ border: "1px solid rgba(166,137,77,0.18)", backgroundColor: "var(--bg)" }}>
              <div className="mb-4"><Music className="w-5 h-5" style={{ color: "var(--gold)" }} /></div>
              <p className="text-sm mb-2" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.05em", fontSize: "1.05rem" }}>Modern Mystic Music</p>
              <p className="text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Neuinterpretation</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                Hildegards Originalgesänge neu interpretiert – mittelalterliche Mystik trifft zeitgenössische Klangwelt.
              </p>
              <Link href="/audio-shop" className="text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Im Audio Shop →</Link>
            </div>
            <div className="sr delay-3 p-7" style={{ border: "1px solid rgba(166,137,77,0.18)", backgroundColor: "var(--bg)" }}>
              <div className="mb-4"><ShoppingBag className="w-5 h-5" style={{ color: "var(--gold)" }} /></div>
              <p className="text-sm mb-2" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.05em", fontSize: "1.05rem" }}>Hildegard Original</p>
              <p className="text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Originalgesang · ab 3,99 €</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                O viridissima virga, O quam mirabilis, O ignis spiritus und Ave Maria – authentisch aufgenommen.
              </p>
              <Link href="/audio-shop" className="text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Zum Shop →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-10 sm:py-16 px-5 sm:px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
            Interesse an einer szenischen Lesung oder einem Workshop?
          </p>
          <Link href="/kontakt" className="btn-gold-outline">Buchungsanfrage stellen</Link>
        </div>
      </section>
    </>
  );
}
