import { ShoppingBag, Clock } from "lucide-react";

const placeholderProducts = [
  { title: "Klangmeditation – Tiefe Entspannung", duration: "45 Min", price: "Demnächst", variant: "gold" },
  { title: "Heilsames Singen – Mitmach-Audio", duration: "30 Min", price: "Demnächst", variant: "warm" },
  { title: "Hildegard-Gesänge – Originalaufnahmen", duration: "60 Min", price: "Demnächst", variant: "creme" },
  { title: "Morgenritual mit Klangschalen", duration: "20 Min", price: "Demnächst", variant: "sand" },
];

export default function AudioShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5E6C8] via-[#E8C97A] to-[#C9A44A] py-24 text-center">
        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-white" />
        </div>
        <h1
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
        >
          Audio Shop
        </h1>
        <p className="text-white/90 text-xl">Heilsame Klänge für zuhause</p>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-12 bg-[#F5EDE0] border-b border-[#E8D8C4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-4 border border-[#E8D8C4] shadow-sm">
            <Clock className="w-6 h-6 text-[#B8860B]" />
            <p className="text-stone-700 text-xl font-semibold">
              Der Audio Shop wird bald eröffnet – schau bald wieder vorbei!
            </p>
          </div>
        </div>
      </section>

      {/* Produkt-Platzhalter */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-stone-900 mb-6 text-center"
            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Vorschau – Demnächst verfügbar
          </h2>
          <div className="w-16 h-1 bg-[#B8860B] mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placeholderProducts.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8D8C4] shadow-sm opacity-75"
              >
                <div className={`h-48 ${
                  product.variant === "gold" ? "bg-gradient-to-br from-[#F5E6C8] to-[#C9A44A]" :
                  product.variant === "warm" ? "bg-gradient-to-br from-[#F7EED8] to-[#D4AF7A]" :
                  product.variant === "creme" ? "bg-gradient-to-br from-[#FFF8F0] to-[#EAD9C0]" :
                  "bg-gradient-to-br from-[#F5E6C8] to-[#B8860B]"
                } flex items-center justify-center`}>
                  <ShoppingBag className="w-12 h-12 text-white/60" />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-stone-900 mb-2"
                    style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-stone-500 text-sm mb-4">{product.duration}</p>
                  <div className="bg-[#F5EDE0] rounded-xl px-4 py-2 text-center">
                    <span className="text-stone-500 font-semibold">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white rounded-3xl p-10 border border-[#E8D8C4] shadow-sm max-w-2xl mx-auto">
            <h3
              className="text-2xl font-bold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Benachrichtigung erhalten
            </h3>
            <p className="text-stone-600 text-lg mb-6">
              Möchtest du informiert werden, wenn der Shop eröffnet? Schreib mir einfach!
            </p>
            <a
              href="mailto:antonia@braditsch.at?subject=Audio Shop - Benachrichtigung"
              className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold px-6 py-3.5 rounded-xl transition-colors min-h-[52px]"
            >
              Benachrichtigung anfragen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
