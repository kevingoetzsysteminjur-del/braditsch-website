"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Eye, EyeOff, Edit2 } from "lucide-react";

type Product = {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  active: boolean;
  slug: string;
  category?: string;
};

const DEMO_PRODUCTS: Product[] = [
  { id: "p1", title: "Flug des Phönix", subtitle: "Klangreise", price: 14, active: true, slug: "flug-des-phoenix", category: "Klangreise" },
  { id: "p2", title: "Raum der Kristalle", subtitle: "Tiefenentspannung", price: 12, active: true, slug: "raum-der-kristalle", category: "Meditation" },
  { id: "p3", title: "Morgen", subtitle: "Stille Meditation", price: 9, active: true, slug: "morgen", category: "Meditation" },
  { id: "p4", title: "Ave Maria", subtitle: "Original", price: 9, active: true, slug: "ave-maria-original", category: "Gesang" },
  { id: "p5", title: "Ave Maria", subtitle: "Moderne Fassung", price: 9, active: true, slug: "ave-maria-modern", category: "Gesang" },
  { id: "p6", title: "O Ignis Spiritus", subtitle: "Hildegard von Bingen", price: 9, active: false, slug: "o-ignis-spiritus-original", category: "Hildegard" },
  { id: "p7", title: "Lotosblume", subtitle: "Mantra-Gesang", price: 12, active: true, slug: "lotosblume", category: "Mantra" },
  { id: "p8", title: "Zeit zum Neubeginn", subtitle: "Klangreise", price: 14, active: true, slug: "zeit-zum-neubeginn", category: "Klangreise" },
];

export default function AdminProduktePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase.from("products").select("*").order("title");
      setProducts(data && data.length > 0 ? data : DEMO_PRODUCTS);
      setLoading(false);
    };
    load();
  }, []);

  const toggleActive = async (p: Product) => {
    await supabase.from("products").update({ active: !p.active }).eq("id", p.id);
    setProducts((prev) => prev.map((x) => x.id === p.id ? { ...x, active: !x.active } : x));
  };

  const active = products.filter((p) => p.active).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>
          Produkte
        </h2>
        <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#7A6B5E" }}>
          {active} von {products.length} aktiv
        </span>
      </div>

      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        {loading ? (
          <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>Laden…</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(166,137,77,0.15)" }}>
                {["Titel", "Kategorie", "Preis", "Status", "Aktionen"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b last:border-0 hover:bg-[#FAFAF8] transition-colors" style={{ borderColor: "rgba(166,137,77,0.08)" }}>
                  <td className="px-4 py-3">
                    <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229" }}>{p.title}</p>
                    {p.subtitle && <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", color: "#7A6B5E" }}>{p.subtitle}</span>}
                  </td>
                  <td className="px-4 py-3">
                    {p.category && (
                      <span className="px-2 py-0.5 text-[9px] uppercase tracking-[0.08em]" style={{ backgroundColor: "rgba(166,137,77,0.08)", color: "#A6894D", fontFamily: "var(--font-body), Georgia, serif" }}>
                        {p.category}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "13px", color: "#A6894D" }}>
                    {Number(p.price).toFixed(2)} €
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-[0.08em]" style={{ backgroundColor: p.active ? "rgba(60,140,80,0.1)" : "rgba(180,60,60,0.08)", color: p.active ? "#3C8C50" : "#8B3A3A", fontFamily: "var(--font-body), Georgia, serif" }}>
                      {p.active ? "Aktiv" : "Inaktiv"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:opacity-60 transition-opacity" style={{ color: "#A6894D" }}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => toggleActive(p)} className="p-1.5 hover:opacity-60 transition-opacity" style={{ color: "#7A6B5E" }}>
                        {p.active ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
