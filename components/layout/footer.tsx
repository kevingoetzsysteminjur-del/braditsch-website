import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function ApplePodcastsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 0 1 7.5 7.5c0 1.2-.28 2.34-.78 3.36-.13.27-.4.44-.7.44-.44 0-.8-.36-.8-.8 0-.1.02-.2.06-.29.4-.82.62-1.73.62-2.71A6.3 6.3 0 0 0 12 5.7a6.3 6.3 0 0 0-6.3 6.3c0 .98.22 1.89.62 2.71.04.09.06.19.06.29 0 .44-.36.8-.8.8-.3 0-.57-.17-.7-.44A7.48 7.48 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5zm0 5.4c1.16 0 2.1.94 2.1 2.1 0 .6-.25 1.14-.66 1.53l.96 3.6c.07.27-.03.56-.25.73-.22.17-.52.2-.77.06L12 16.83l-1.38.79c-.25.14-.55.11-.77-.06-.22-.17-.32-.46-.25-.73l.96-3.6A2.1 2.1 0 0 1 12 9.9z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://open.spotify.com/show/5oJFw7DEXq6KCsdPKv0cVn", label: "Spotify", Icon: SpotifyIcon },
  { href: "https://podcasts.apple.com/at/podcast/vibration-codes/id1824132706", label: "Apple Podcasts", Icon: ApplePodcastsIcon },
  { href: "https://www.facebook.com/antonia.braditsch/", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.youtube.com/channel/UCml8FGZleiwHw9UhKoBhgxg", label: "YouTube", Icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--sage)", borderTop: "1px solid var(--gold)", borderTopColor: "rgba(166,137,77,0.4)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14">

          {/* Brand */}
          <div>
            <h3
              className="mb-2 font-light tracking-[0.1em]"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                color: "var(--text)",
              }}
            >
              Antonia Braditsch
            </h3>
            <p
              className="italic text-xs mb-8"
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
              }}
            >
              Inspired by Spirit &amp; Love
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center transition-all duration-200 hover:opacity-60"
                  style={{
                    border: "1px solid rgba(166,137,77,0.35)",
                    color: "var(--gold)",
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>

            <Link href="/termine" className="btn-gold-outline">
              Termin vereinbaren
            </Link>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
            >
              Kontakt
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 mt-1 shrink-0" style={{ color: "var(--gold)" }} />
                <span className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  VIVARIUM<br />
                  Angergasse 7, 2493 Lichtenwörth<br />
                  Österreich
                </span>
              </li>
              <li>
                <a href="mailto:antonia@braditsch.at" className="flex items-center gap-3 text-sm transition-opacity hover:opacity-60"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--gold)" }} />
                  antonia@braditsch.at
                </a>
              </li>
              <li>
                <a href="tel:+436767516188" className="flex items-center gap-3 text-sm transition-opacity hover:opacity-60"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--gold)" }} />
                  +43 (0) 676 7516188
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.2em] mb-6"
              style={{ fontFamily: "var(--font-body), Georgia, serif", color: "var(--gold)" }}
            >
              Angebote
            </p>
            <ul className="space-y-3">
              {[
                { label: "Klangtherapie", href: "/klang" },
                { label: "Stimme", href: "/stimme" },
                { label: "Medialität", href: "/medialitaet" },
                { label: "Hildegard von Bingen", href: "/hildegard-von-bingen" },
                { label: "Podcast", href: "/podcast" },
                { label: "Audio-Shop", href: "/audio-shop" },
                { label: "Termine", href: "/termine" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 sm:mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          style={{ borderTop: "1px solid rgba(166,137,77,0.2)" }}
        >
          <p className="text-[11px] tracking-[0.08em]"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
            © 2026 Antonia Braditsch
          </p>
          <div className="flex gap-6">
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "AGB", href: "/agb" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.08em] transition-opacity hover:opacity-60"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
