import Link from "next/link";
import { Mic, ExternalLink } from "lucide-react";

const blogPosts = [
  {
    title: "Die Heilkraft der Klangschalen",
    date: "Demnächst",
    excerpt: "Wie Klangschalen das Nervensystem beruhigen und zur inneren Balance beitragen können.",
    variant: "gold",
  },
  {
    title: "Stimme als Spiegel der Seele",
    date: "Demnächst",
    excerpt: "Was uns unsere Stimme über unseren inneren Zustand verrät und wie wir sie als Heilwerkzeug nutzen können.",
    variant: "warm",
  },
  {
    title: "Hildegard von Bingen und die Kraft der Natur",
    date: "Demnächst",
    excerpt: "Einblicke in die Naturheilkunde der Äbtissin und was wir heute davon lernen können.",
    variant: "creme",
  },
];

export default function PodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5E6C8] via-[#E8C97A] to-[#B8860B] py-24 text-center">
        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mic className="w-10 h-10 text-white" />
        </div>
        <h1
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Podcast
        </h1>
        <p className="text-white/90 text-xl">Vibration Codes</p>
      </section>

      {/* Podcast Links */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-stone-900 mb-6 text-center"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Vibration Codes
          </h2>
          <div className="w-16 h-1 bg-[#B8860B] mx-auto mb-8 rounded-full" />
          <p className="text-xl text-stone-700 leading-relaxed mb-12 text-center">
            Tauche ein in die Welt der Klänge, Heilfrequenzen und spirituellen Impulse.
            Der Podcast von Antonia Braditsch – für alle, die tiefer lauschen möchten.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {/* Apple Podcasts */}
            <Link
              href="#"
              className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-[#E8D8C4] shadow-sm hover:shadow-md hover:border-[#B8860B] transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#6A4C9C] rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 0 1 7.5 7.5c0 1.2-.28 2.34-.78 3.36-.13.27-.4.44-.7.44-.44 0-.8-.36-.8-.8 0-.1.02-.2.06-.29.4-.82.62-1.73.62-2.71A6.3 6.3 0 0 0 12 5.7a6.3 6.3 0 0 0-6.3 6.3c0 .98.22 1.89.62 2.71.04.09.06.19.06.29 0 .44-.36.8-.8.8-.3 0-.57-.17-.7-.44A7.48 7.48 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5zm0 2.7a4.8 4.8 0 0 1 4.8 4.8c0 .75-.17 1.46-.48 2.1-.14.3-.44.48-.76.48-.48 0-.87-.39-.87-.87 0-.11.02-.22.07-.32.2-.43.3-.9.3-1.39A3.06 3.06 0 0 0 12 8.94a3.06 3.06 0 0 0-3.06 3.06c0 .49.1.96.3 1.39.05.1.07.21.07.32 0 .48-.39.87-.87.87-.32 0-.62-.18-.76-.48A4.78 4.78 0 0 1 7.2 12a4.8 4.8 0 0 1 4.8-4.8zm0 2.7c1.16 0 2.1.94 2.1 2.1 0 .6-.25 1.14-.66 1.53l.96 3.6c.07.27-.03.56-.25.73-.22.17-.52.2-.77.06L12 16.83l-1.38.79c-.25.14-.55.11-.77-.06-.22-.17-.32-.46-.25-.73l.96-3.6A2.1 2.1 0 0 1 12 9.9z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-stone-500 text-sm">Hören auf</p>
                <p className="text-stone-900 text-xl font-bold">Apple Podcasts</p>
              </div>
              <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-[#B8860B] transition-colors" />
            </Link>

            {/* Spotify */}
            <Link
              href="#"
              className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-[#E8D8C4] shadow-sm hover:shadow-md hover:border-[#B8860B] transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1DB954] to-[#158A3E] rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-stone-500 text-sm">Hören auf</p>
                <p className="text-stone-900 text-xl font-bold">Spotify</p>
              </div>
              <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-[#B8860B] transition-colors" />
            </Link>
          </div>

          {/* Blog */}
          <h2
            className="text-3xl font-bold text-stone-900 mb-8"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            id="blog"
          >
            Blog – Demnächst
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-white rounded-2xl overflow-hidden border border-[#E8D8C4] shadow-sm">
                <div className={`h-36 ${
                  post.variant === "gold" ? "bg-gradient-to-br from-[#F5E6C8] to-[#C9A44A]" :
                  post.variant === "warm" ? "bg-gradient-to-br from-[#F7EED8] to-[#D4AF7A]" :
                  "bg-gradient-to-br from-[#FFF8F0] to-[#EAD9C0]"
                }`} />
                <div className="p-5">
                  <p className="text-stone-400 text-sm mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-stone-900 mb-2" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
                    {post.title}
                  </h3>
                  <p className="text-stone-500 text-base leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
