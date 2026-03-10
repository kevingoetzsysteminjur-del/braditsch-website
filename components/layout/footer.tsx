import Link from "next/link";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Antonia Braditsch
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Klangtherapie, Stimmarbeit & mediale Begleitung im VIVARIUM
              Lichtenwörth.
            </p>
            <Link
              href="mailto:antonia@braditsch.at?subject=Termin vereinbaren"
              className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm min-h-[48px]"
            >
              <Calendar className="w-4 h-4" />
              Termin vereinbaren
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <div className="flex items-start gap-2 text-stone-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#B8860B] shrink-0" />
                  <span>
                    VIVARIUM
                    <br />
                    Angergasse 7<br />
                    2493 Lichtenwörth
                    <br />
                    Österreich
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="mailto:antonia@braditsch.at"
                  className="flex items-center gap-2 text-stone-400 hover:text-[#B8860B] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[#B8860B]" />
                  antonia@braditsch.at
                </a>
              </li>
              <li>
                <a
                  href="tel:+436767516188"
                  className="flex items-center gap-2 text-stone-400 hover:text-[#B8860B] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[#B8860B]" />
                  +43 (0) 676 7516188
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Angebote</h4>
            <ul className="space-y-2">
              {[
                { label: "Termine", href: "/termine" },
                { label: "Klangtherapie", href: "/klang" },
                { label: "Stimme", href: "/stimme" },
                { label: "Medialität", href: "/medialitaet" },
                { label: "Podcast", href: "/podcast" },
                { label: "Audio-Shop", href: "/audio-shop" },
                { label: "Hildegard von Bingen", href: "/hildegard-von-bingen" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-[#B8860B] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Folge mir</h4>
            <div className="flex gap-3 mb-8">
              {/* Apple Podcasts */}
              <a
                href="#"
                aria-label="Apple Podcasts"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#B8860B] flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 0 1 7.5 7.5c0 1.2-.28 2.34-.78 3.36-.13.27-.4.44-.7.44-.44 0-.8-.36-.8-.8 0-.1.02-.2.06-.29.4-.82.62-1.73.62-2.71A6.3 6.3 0 0 0 12 5.7a6.3 6.3 0 0 0-6.3 6.3c0 .98.22 1.89.62 2.71.04.09.06.19.06.29 0 .44-.36.8-.8.8-.3 0-.57-.17-.7-.44A7.48 7.48 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5zm0 2.7a4.8 4.8 0 0 1 4.8 4.8c0 .75-.17 1.46-.48 2.1-.14.3-.44.48-.76.48-.48 0-.87-.39-.87-.87 0-.11.02-.22.07-.32.2-.43.3-.9.3-1.39A3.06 3.06 0 0 0 12 8.94a3.06 3.06 0 0 0-3.06 3.06c0 .49.1.96.3 1.39.05.1.07.21.07.32 0 .48-.39.87-.87.87-.32 0-.62-.18-.76-.48A4.78 4.78 0 0 1 7.2 12a4.8 4.8 0 0 1 4.8-4.8zm0 2.7c1.16 0 2.1.94 2.1 2.1 0 .6-.25 1.14-.66 1.53l.96 3.6c.07.27-.03.56-.25.73-.22.17-.52.2-.77.06L12 16.83l-1.38.79c-.25.14-.55.11-.77-.06-.22-.17-.32-.46-.25-.73l.96-3.6A2.1 2.1 0 0 1 12 9.9z"/>
                </svg>
              </a>
              {/* Spotify */}
              <a
                href="#"
                aria-label="Spotify"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#B8860B] flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#B8860B] flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#B8860B] flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            <h4 className="text-white font-semibold mb-3 text-base">Rechtliches</h4>
            <ul className="space-y-2">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGBs & Kundeninfo", href: "/agb" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-500 hover:text-[#B8860B] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-500 text-sm">
            Antonia Braditsch &copy; 2025 – Inspired by Spirit &amp; Love
          </p>
        </div>
      </div>
    </footer>
  );
}
