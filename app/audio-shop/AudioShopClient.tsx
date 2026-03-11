"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ChevronRight, Plus, Edit2, Trash2, X } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "./data";
import { useCart } from "@/context/CartContext";
import { useAdmin } from "@/hooks/useAdmin";
import { createClient } from "@/utils/supabase/client";
import AdminBtn from "@/components/admin/AdminBtn";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

interface DbProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category_slug: string;
  image_url: string;
  format: string;
  tags: string;
  active: boolean;
}

const CAT_OPTIONS = CATEGORIES.filter((c) => c.slug !== "all");

const BLANK: Omit<DbProduct, "id"> = {
  title: "",
  description: "",
  price: 0,
  category_slug: CAT_OPTIONS[0].slug,
  image_url: "",
  format: "Digitaler Download | WAV-Audio File",
  tags: "",
  active: true,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body), Georgia, serif",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "var(--text-muted)",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  fontSize: "13px",
  fontFamily: "var(--font-body), Georgia, serif",
  color: "var(--text)",
  backgroundColor: "var(--bg)",
  border: "1px solid rgba(166,137,77,0.3)",
  outline: "none",
};

function AddToCartBtn({
  slug, title, priceStr, priceNum, image,
}: {
  slug: string; title: string; priceStr: string; priceNum: number; image: string;
}) {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.slug === slug);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        addItem({ slug, title, priceStr, priceNum, image });
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
  const { isAdmin } = useAdmin();
  const [dbProducts, setDbProducts] = useState<DbProduct[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<DbProduct | null>(null);
  const [form, setForm] = useState<Omit<DbProduct, "id">>(BLANK);
  const [saving, setSaving] = useState(false);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("products").select("*").order("created_at");
    if (data) setDbProducts(data as DbProduct[]);
  }

  function openAdd() {
    setEditing(null);
    setForm(BLANK);
    setModal(true);
  }

  function openEdit(p: DbProduct) {
    setEditing(p);
    setForm({
      title: p.title, description: p.description, price: p.price,
      category_slug: p.category_slug, image_url: p.image_url,
      format: p.format, tags: p.tags, active: p.active,
    });
    setModal(true);
  }

  async function handleSave() {
    setSaving(true);
    const supabase = createClient();
    if (editing) {
      await supabase.from("products").update(form).eq("id", editing.id);
    } else {
      await supabase.from("products").insert(form);
    }
    setSaving(false);
    setModal(false);
    load();
  }

  async function handleDelete(id: string) {
    const supabase = createClient();
    await supabase.from("products").delete().eq("id", id);
    setConfirmId(null);
    load();
  }

  async function toggleActive(p: DbProduct) {
    const supabase = createClient();
    await supabase.from("products").update({ active: !p.active }).eq("id", p.id);
    load();
  }

  function setField<K extends keyof Omit<DbProduct, "id">>(k: K, v: Omit<DbProduct, "id">[K]) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  const staticFiltered = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.categorySlug === activeCategory);
  const dbFiltered = activeCategory === "all" ? dbProducts : dbProducts.filter((p) => p.category_slug === activeCategory);
  const dbVisible = isAdmin ? dbFiltered : dbFiltered.filter((p) => p.active);

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
          {/* Filter + Admin button */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
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
            {isAdmin && (
              <button
                onClick={openAdd}
                className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] px-4 py-2.5 transition-opacity hover:opacity-80"
                style={{ backgroundColor: "rgba(166,137,77,0.9)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                <Plus className="w-3 h-3" /> Neues Produkt
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Static products */}
            {staticFiltered.map((product) => (
              <div key={product.slug} className="group" style={{ border: "1px solid rgba(166,137,77,0.15)", backgroundColor: "var(--bg)" }}>
                <Link href={`/audio-shop/${product.slug}`} className="block">
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center" style={{ backgroundColor: "rgba(61,50,41,0.3)" }}>
                      <span className="text-[10px] uppercase tracking-[0.2em] px-4 py-2" style={{ border: "1px solid rgba(255,255,255,0.8)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>Details</span>
                    </div>
                  </div>
                </Link>
                <div className="px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.1em] mb-1.5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>{product.category}</p>
                  <p className="mb-1 leading-snug text-sm" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, letterSpacing: "0.04em", color: "var(--text)" }}>{product.title}</p>
                  <p className="text-sm mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif" }}>{product.priceStr}</p>
                  <AddToCartBtn slug={product.slug} title={product.title} priceStr={product.priceStr} priceNum={product.priceNum} image={product.image} />
                </div>
              </div>
            ))}

            {/* Supabase products */}
            {dbVisible.map((product) => {
              const priceStr = `${product.price.toFixed(2).replace(".", ",")}€`;
              const catLabel = CAT_OPTIONS.find((c) => c.slug === product.category_slug)?.label ?? product.category_slug;
              return (
                <div
                  key={product.id}
                  className="group relative"
                  style={{
                    border: "1px solid rgba(166,137,77,0.15)",
                    backgroundColor: "var(--bg)",
                    opacity: !product.active && isAdmin ? 0.55 : 1,
                  }}
                >
                  {isAdmin && (
                    <>
                      <div className="absolute top-2 right-2 z-10 flex gap-1.5">
                        <AdminBtn icon={Edit2} label="Bearbeiten" onClick={() => openEdit(product)} />
                        <AdminBtn icon={Trash2} label="Löschen" onClick={() => setConfirmId(product.id)} variant="danger" />
                      </div>
                      <button
                        onClick={() => toggleActive(product)}
                        className="absolute top-2 left-2 z-10 text-[8px] uppercase tracking-[0.1em] px-2 py-1"
                        style={{
                          backgroundColor: product.active ? "rgba(60,140,80,0.85)" : "rgba(150,60,60,0.7)",
                          color: "#fff",
                          fontFamily: "var(--font-body), Georgia, serif",
                          borderRadius: "3px",
                        }}
                      >
                        {product.active ? "Aktiv" : "Inaktiv"}
                      </button>
                    </>
                  )}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    {product.image_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={product.image_url} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full mesh-gold" />
                    )}
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-[10px] uppercase tracking-[0.1em] mb-1.5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>{catLabel}</p>
                    <p className="mb-1 leading-snug text-sm" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, letterSpacing: "0.04em", color: "var(--text)" }}>{product.title}</p>
                    <p className="text-sm mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif" }}>{priceStr}</p>
                    <AddToCartBtn slug={`db-${product.id}`} title={product.title} priceStr={priceStr} priceNum={product.price} image={product.image_url} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
            Fragen zum Shop?{" "}
            <a href="mailto:antonia@braditsch.at" style={{ color: "var(--gold)" }}>antonia@braditsch.at</a>
          </p>
        </div>
      </section>

      {/* Product Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-[400] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setModal(false)}
        >
          <div
            className="w-full max-w-lg overflow-y-auto"
            style={{ maxHeight: "90vh", backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(166,137,77,0.2)" }}>
              <p style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.1rem", letterSpacing: "0.08em", color: "var(--text)" }}>
                {editing ? "Produkt bearbeiten" : "Neues Produkt"}
              </p>
              <button onClick={() => setModal(false)}>
                <X className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label style={labelStyle}>Titel</label>
                <input value={form.title} onChange={(e) => setField("title", e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Beschreibung</label>
                <textarea value={form.description} onChange={(e) => setField("description", e.target.value)} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={labelStyle}>Preis (€)</label>
                  <input type="number" step="0.01" value={form.price} onChange={(e) => setField("price", parseFloat(e.target.value) || 0)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Kategorie</label>
                  <select value={form.category_slug} onChange={(e) => setField("category_slug", e.target.value)} style={inputStyle}>
                    {CAT_OPTIONS.map((c) => <option key={c.slug} value={c.slug}>{c.label}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Format</label>
                <input value={form.format} onChange={(e) => setField("format", e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Stichwörter (kommagetrennt)</label>
                <input value={form.tags} onChange={(e) => setField("tags", e.target.value)} style={inputStyle} placeholder="z.B. Entspannung, Heilung, Klang" />
              </div>
              <div>
                <label style={labelStyle}>Bild-URL</label>
                <input value={form.image_url} onChange={(e) => setField("image_url", e.target.value)} style={inputStyle} placeholder="https://…" />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="prod-active"
                  checked={form.active}
                  onChange={(e) => setField("active", e.target.checked)}
                  style={{ accentColor: "var(--gold)", width: "14px", height: "14px" }}
                />
                <label htmlFor="prod-active" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "var(--text-muted)" }}>
                  Produkt aktiv (sichtbar für Besucher)
                </label>
              </div>
              <button
                onClick={handleSave}
                disabled={saving || !form.title}
                className="w-full py-3 text-[11px] uppercase tracking-[0.15em] transition-opacity hover:opacity-80 disabled:opacity-40"
                style={{ backgroundColor: "rgba(166,137,77,0.9)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                {saving ? "Speichern…" : editing ? "Änderungen speichern" : "Produkt hinzufügen"}
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmId && (
        <ConfirmDialog
          message="Dieses Produkt wirklich löschen? Das kann nicht rückgängig gemacht werden."
          onConfirm={() => handleDelete(confirmId)}
          onCancel={() => setConfirmId(null)}
        />
      )}
    </>
  );
}
