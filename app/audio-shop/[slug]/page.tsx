import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "../data";
import AudioPlayer from "@/components/shop/AudioPlayer";
import AddToCartButtonClient from "@/components/shop/AddToCartButtonClient";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-28 pb-0 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em]" style={{ fontFamily: "var(--font-body), Georgia, serif" }}>
            <Link href="/audio-shop" className="transition-opacity hover:opacity-60" style={{ color: "var(--gold)" }}>Audio Shop</Link>
            <ChevronRight className="w-3 h-3" style={{ color: "var(--text-muted)" }} />
            <span style={{ color: "var(--text-muted)" }}>{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[auto_1fr] gap-16 items-start">
          {/* Image */}
          <div className="relative mx-auto lg:mx-0 shrink-0 shadow-[0_20px_60px_rgba(61,50,41,0.12)] overflow-hidden" style={{ width: "clamp(240px, 30vw, 360px)", aspectRatio: "3/4" }}>
            <Image src={product.image} alt={product.title} fill className="object-cover" sizes="360px" priority />
          </div>

          {/* Info */}
          <div className="pt-4">
            {product.keywords && (
              <p className="text-xs uppercase tracking-[0.15em] mb-4 italic" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
                {product.keywords}
              </p>
            )}
            <p className="text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
              {product.category}
            </p>
            <h1 className="mb-4" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.04em", color: "var(--text)", lineHeight: 1.15 }}>
              {product.title}
            </h1>
            <span className="block mb-5" style={{ width: "60px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6 }} />

            <p className="text-3xl font-light mb-4" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--gold)", letterSpacing: "0.04em" }}>
              {product.priceStr}
            </p>

            {product.format && (
              <p className="text-xs mb-8" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif", letterSpacing: "0.05em" }}>
                {product.format}
              </p>
            )}

            {/* Add to cart */}
            <div className="mb-8">
              <AddToCartButtonClient product={{ slug: product.slug, title: product.title, priceStr: product.priceStr, priceNum: product.priceNum, image: product.image }} />
            </div>

            {/* Audio Player */}
            <div className="mb-8">
              <AudioPlayer title={product.title} />
            </div>

            {product.description && (
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                {product.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 px-6" style={{ backgroundColor: "var(--sage)" }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.25em] mb-8" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
              Aus der gleichen Kategorie
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/audio-shop/${p.slug}`} className="group block">
                  <div style={{ border: "1px solid rgba(166,137,77,0.18)", backgroundColor: "var(--bg)" }}>
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 33vw" />
                    </div>
                    <div className="px-4 py-4">
                      <p className="text-sm mb-1" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", letterSpacing: "0.03em" }}>{p.title}</p>
                      <p className="text-sm" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif" }}>{p.priceStr}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <section className="py-12 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <Link href="/audio-shop" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
            <ChevronLeft className="w-3 h-3" /> Zurück zum Shop
          </Link>
        </div>
      </section>
    </>
  );
}
