"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const EVENTS = [
  {
    title: "Aufnahmen Vibration Codes",
    date: "3.2.2026",
    folder: "podcast",
    images: [
      { file: "antonia1.jpg", alt: "Antonia im Podcast Studio" },
      { file: "micro.jpg",    alt: "Mikrofon" },
      { file: "andi.jpg",     alt: "Andi im Studio" },
      { file: "studio.jpg",   alt: "Studio Setup" },
      { file: "aa.jpg",       alt: "Antonia & Andi" },
    ],
  },
  {
    title: "Klang-Raum VIVARIUM",
    date: "",
    folder: "vivarium",
    images: [
      { file: "front.jpg",         alt: "VIVARIUM Front" },
      { file: "noten.jpg",         alt: "Antonia mit Noten" },
      { file: "harfe.jpg",         alt: "Harfe" },
      { file: "ks.jpg",            alt: "Klangschalen" },
      { file: "klavier.jpg",       alt: "Klavier" },
      { file: "saiten.jpg",        alt: "Saiteninstrument" },
      { file: "mono.jpg",          alt: "Monochord" },
      { file: "floeten.jpg",       alt: "Flöten" },
      { file: "trommeln.jpg",      alt: "Trommeln" },
      { file: "tempelglocken.jpg", alt: "Tempelglocken" },
      { file: "gong.jpg",          alt: "Gong" },
      { file: "chimes.jpg",        alt: "Chimes" },
      { file: "baldauf.jpg",       alt: "Foto Franz Baldauf" },
      { file: "wirbel.jpg",        alt: "Klang-Wirbel" },
      { file: "rosette.jpg",       alt: "Rosette" },
      { file: "bild.jpg",          alt: "VIVARIUM Raum" },
    ],
  },
];

export default function GaleriePage() {
  const [lightbox, setLightbox] = useState<{ event: number; idx: number } | null>(null);

  const currentImages = lightbox !== null ? EVENTS[lightbox.event].images : [];
  const currentSrc = lightbox !== null
    ? `/images/galerie/${EVENTS[lightbox.event].folder}/${currentImages[lightbox.idx].file}`
    : "";

  function prev() {
    if (!lightbox) return;
    setLightbox({ ...lightbox, idx: (lightbox.idx - 1 + currentImages.length) % currentImages.length });
  }
  function next() {
    if (!lightbox) return;
    setLightbox({ ...lightbox, idx: (lightbox.idx + 1) % currentImages.length });
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "40vh", backgroundColor: "var(--bg)", paddingTop: "80px" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 px-6 py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] mb-5"
            style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
            Impressionen
          </p>
          <h1 style={{
            fontFamily: "var(--font-heading), Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            letterSpacing: "0.12em",
            color: "var(--text)",
            lineHeight: 1.1,
          }}>
            Galerie
          </h1>
          <span className="block mt-6 mx-auto"
            style={{ width: "60px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6 }} />
        </div>
      </section>

      {/* Events */}
      {EVENTS.map((event, ei) => (
        <section
          key={ei}
          className="px-5 sm:px-8"
          style={{
            paddingTop: "60px",
            paddingBottom: "60px",
            backgroundColor: ei % 2 === 0 ? "var(--bg)" : "var(--sage)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              {event.date && (
                <p className="text-[10px] uppercase tracking-[0.25em] mb-1"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  {event.date}
                </p>
              )}
              <h2 style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                letterSpacing: "0.06em",
                color: "var(--text)",
              }}>
                {event.title}
              </h2>
              <span className="block mt-4"
                style={{ width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {event.images.map((img, ii) => (
                <button
                  key={ii}
                  onClick={() => setLightbox({ event: ei, idx: ii })}
                  className="group relative overflow-hidden focus:outline-none"
                  style={{ aspectRatio: "4/3", borderRadius: "8px" }}
                  aria-label={img.alt}
                >
                  <Image
                    src={`/images/galerie/${event.folder}/${img.file}`}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: "rgba(61,50,41,0.2)" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "rgba(20,12,6,0.96)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ maxWidth: "min(90vw, 1000px)", maxHeight: "85vh", width: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentSrc}
              alt={currentImages[lightbox.idx].alt}
              width={1000}
              height={750}
              className="object-contain"
              style={{ maxHeight: "80vh", width: "auto", maxWidth: "100%", borderRadius: "4px" }}
            />
          </div>

          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center transition-opacity hover:opacity-100 opacity-55"
            style={{ border: "1px solid rgba(166,137,77,0.4)", borderRadius: "2px" }}
            aria-label="Vorheriges Bild">
            <ChevronLeft className="w-5 h-5" style={{ color: "#A6894D" }} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center transition-opacity hover:opacity-100 opacity-55"
            style={{ border: "1px solid rgba(166,137,77,0.4)", borderRadius: "2px" }}
            aria-label="Nächstes Bild">
            <ChevronRight className="w-5 h-5" style={{ color: "#A6894D" }} />
          </button>
          <button onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-100 opacity-55"
            aria-label="Schließen">
            <X className="w-5 h-5" style={{ color: "#A6894D" }} />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "rgba(166,137,77,0.5)", fontFamily: "var(--font-body), Georgia, serif" }}>
            {lightbox.idx + 1} / {currentImages.length}
          </p>
        </div>
      )}
    </>
  );
}
