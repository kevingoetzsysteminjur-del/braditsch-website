import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

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
            <Link
              href="/termine"
              className="btn-gold-outline"
            >
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
            © 2025 Antonia Braditsch
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
