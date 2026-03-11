import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vibration Codes Podcast | Antonia Braditsch",
  description:
    "Vibration Codes – Der Podcast von Antonia Braditsch. Entdecke die Welt der Heilfrequenzen, Klangtherapie und Spiritualität. Auf Spotify und Apple Podcasts.",
};

export default function PodcastPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "50vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto pt-32 pb-16">
          <p
            className="text-[10px] uppercase tracking-[0.3em] mb-8"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
          >
            Podcast
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2.6rem, 8vw, 5rem)",
              letterSpacing: "0.15em",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Vibration Codes
          </h1>
          <span className="gold-line block mb-8" />
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Entdecke die Welt der Heilfrequenzen, Klangtherapie und Spiritualität.
          </p>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-[10px] uppercase tracking-[0.2em] mb-6 text-center"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
          >
            Jetzt anhören
          </p>
          <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(61,50,41,0.12)" }}>
            <iframe
              src="https://open.spotify.com/embed/show/5oJFw7DEXq6KCsdPKv0cVn?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Vibration Codes Podcast auf Spotify"
            />
          </div>
        </div>
      </section>

      {/* Plattformen */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-[10px] uppercase tracking-[0.2em] mb-10 text-center"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
          >
            Auf deiner Plattform
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Spotify */}
            <a
              href="https://open.spotify.com/show/5oJFw7DEXq6KCsdPKv0cVn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 transition-all duration-300 group"
              style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--bg)" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#1DB954", borderRadius: "12px" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>Hören auf</p>
                <p className="text-lg font-light" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.04em" }}>Spotify</p>
              </div>
              <span className="text-xs transition-opacity group-hover:opacity-60" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>→</span>
            </a>

            {/* Apple Podcasts */}
            <a
              href="https://podcasts.apple.com/at/podcast/vibration-codes/id1824132706"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 transition-all duration-300 group"
              style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--bg)" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #D264F5 0%, #A238C8 50%, #6B16C6 100%)", borderRadius: "12px" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 0 1 7.5 7.5c0 1.2-.28 2.34-.78 3.36-.13.27-.4.44-.7.44-.44 0-.8-.36-.8-.8 0-.1.02-.2.06-.29.4-.82.62-1.73.62-2.71A6.3 6.3 0 0 0 12 5.7a6.3 6.3 0 0 0-6.3 6.3c0 .98.22 1.89.62 2.71.04.09.06.19.06.29 0 .44-.36.8-.8.8-.3 0-.57-.17-.7-.44A7.48 7.48 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5zm0 5.4c1.16 0 2.1.94 2.1 2.1 0 .6-.25 1.14-.66 1.53l.96 3.6c.07.27-.03.56-.25.73-.22.17-.52.2-.77.06L12 16.83l-1.38.79c-.25.14-.55.11-.77-.06-.22-.17-.32-.46-.25-.73l.96-3.6A2.1 2.1 0 0 1 12 9.9z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>Hören auf</p>
                <p className="text-lg font-light" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.04em" }}>Apple Podcasts</p>
              </div>
              <span className="text-xs transition-opacity group-hover:opacity-60" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Über den Podcast */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="italic text-lg sm:text-xl leading-relaxed mb-8"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading), Georgia, serif", letterSpacing: "0.02em" }}
          >
            Tauche ein in die Welt der Klänge, Heilfrequenzen und spirituellen Impulse.
            Der Podcast von Antonia Braditsch – für alle, die tiefer lauschen möchten.
          </p>
          <span className="gold-line" />
        </div>
      </section>
    </>
  );
}
