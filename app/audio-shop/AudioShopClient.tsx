"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { CATEGORIES, PRODUCTS, getProductsByCategory } from "./data";
import { useCart } from "@/context/CartContext";

function AddToCartBtn({ product }: { product: typeof PRODUCTS[0] }) {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.slug === product.slug);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addItem({ slug: product.slug, title: product.title, priceStr: product.priceStr, priceNum: product.priceNum, image: product.image });
      }}
      className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] px-3 py-2 transition-all duration-300"
      style={{
        backgroundColor: inCart ? "var(--gold)" : "transparent",
        border: "1px solid rgba(166,137,77,0.4)",
        color: inCart ? "#fff" : "var(--gold)",
        fontFamily: "var(--font-body), Georgia, serif",
      }}
    >
      <ShoppingCart className="w-3 h-3" />
      {inCart ? "Im Warenkorb" : "In den Warenkorb"}
    </button>
  );
}

export default function AudioShopClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const products = getProductsByCategory(activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-0 overflow-hidden px-5 sm:px-6" style={{ backgroundColor: "var(--bg)", minHeight: "55vh" }}>
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[auto_1fr] gap-16 items-end">
          <div className="relative mx-auto lg:mx-0 shrink-0" style={{ width: "clamp(180px, 20vw, 280px)", aspectRatio: "2/3" }}>
            <Image src="/images/shop/bambusflote.jpg" alt="Bambusflöte" fill className="object-cover" sizes="280px" priority />
          </div>
          <div className="pb-16 pt-8">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Shop</p>
            <h1 className="mb-6" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 300, fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "0.15em", color: "var(--text)", lineHeight: 1.1 }}>
              Audio Shop
            </h1>
            <span className="block mb-8" style={{ width: "80px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7 }} />
            <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Alle Klangmeditationen wurden sorgfältig und liebevoll für dich aufbereitet, die Solo-Instrumente original von mir eingespielt und alle Gesänge authentisch und unverfälscht aufgenommen. Die Klänge unterstützen deine Heilungs- und Wachstumsprozesse, damit du emotionale und energetische Blockaden lösen und in tiefere Bewusstseinszustände eintauchen kannst.
            </p>
          </div>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-5" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Was dich erwartet</p>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
            Dich erwarten kraftvolle Klangmeditationen und inspirierende Musikstücke als eine wunderbare und sanfte Möglichkeit, zur Ruhe zu kommen, den Geist zu beruhigen und den Körper zu entspannen. Der intuitive Gesang umgeht deinen kritischen Verstand. So kannst du eine noch tiefere emotionale Ebene erlangen, um Momente der Klarheit und Transformation in dein Leben zu integrieren.
          </p>
          <Link href="/klangwirkung" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
            Zur Wirkungsweise der Klangmeditationen <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 sm:py-20 px-5 sm:px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className="text-[11px] uppercase tracking-[0.12em] px-5 py-2.5 transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-body), Georgia, serif",
                    backgroundColor: active ? "var(--gold)" : "transparent",
                    border: `1px solid ${active ? "var(--gold)" : "rgba(166,137,77,0.3)"}`,
                    color: active ? "#fff" : "var(--text-muted)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {products.map((product) => (
              <div key={product.slug} className="group" style={{ border: "1px solid rgba(166,137,77,0.15)", backgroundColor: "var(--bg)" }}>
                <Link href={`/audio-shop/${product.slug}`} className="block">
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center" style={{ backgroundColor: "rgba(61,50,41,0.3)" }}>
                      <span className="text-[10px] uppercase tracking-[0.2em] px-4 py-2" style={{ border: "1px solid rgba(255,255,255,0.8)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>Details</span>
                    </div>
                  </div>
                </Link>
                <div className="px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.1em] mb-1.5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                    {product.category}
                  </p>
                  <p className="mb-1 leading-snug text-sm" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, letterSpacing: "0.04em", color: "var(--text)" }}>
                    {product.title}
                  </p>
                  <p className="text-sm mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif" }}>
                    {product.priceStr}
                  </p>
                  <AddToCartBtn product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="gold-line mb-8 block" />
          <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
            Fragen zum Shop?{" "}
            <a href="mailto:antonia@braditsch.at" style={{ color: "var(--gold)" }}>antonia@braditsch.at</a>
          </p>
        </div>
      </section>
    </>
  );
}
