"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Plus, Edit2, Eye, EyeOff, Trash2 } from "lucide-react";

type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  audio_url: string;
  active: boolean;
  created_at: string;
};

const emptyProduct = { name: "", slug: "", description: "", price: 0, category: "klangmeditation", image_url: "", audio_url: "", active: true };

export default function AdminShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState(emptyProduct);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    setProducts(data || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(emptyProduct); setEditing(null); setShowForm(true); };
  const openEdit = (p: Product) => { setForm({ name: p.name, slug: p.slug, description: p.description, price: p.price, category: p.category, image_url: p.image_url || "", audio_url: p.audio_url || "", active: p.active }); setEditing(p); setShowForm(true); };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    if (editing) {
      await supabase.from("products").update(form).eq("id", editing.id);
    } else {
      await supabase.from("products").insert(form);
    }
    setSaving(false);
    setShowForm(false);
    load();
  };

  const toggleActive = async (p: Product) => {
    await supabase.from("products").update({ active: !p.active }).eq("id", p.id);
    load();
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Produkt wirklich löschen?")) return;
    await supabase.from("products").delete().eq("id", id);
    load();
  };

  const inputStyle = { backgroundColor: "#F9F6F2", border: "1px solid rgba(166,137,77,0.25)", color: "#3D3229", fontFamily: "var(--font-body), Georgia, serif", width: "100%", padding: "10px 14px", fontSize: "13px", outline: "none" };
  const labelStyle = { fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.15em", color: "#7A6B5E", display: "block", marginBottom: "6px" };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>Shop-Produkte</h2>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
          <Plus className="w-3.5 h-3.5" /> Neues Produkt
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto" style={{ backgroundColor: "#fff" }}>
            <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(166,137,77,0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.2rem", fontWeight: 300, color: "#3D3229" }}>
                {editing ? "Produkt bearbeiten" : "Neues Produkt"}
              </h3>
              <button onClick={() => setShowForm(false)} style={{ color: "#7A6B5E" }}>✕</button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div><label style={labelStyle}>Name</label><input style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
              <div><label style={labelStyle}>Slug (URL)</label><input style={inputStyle} value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required /></div>
              <div><label style={labelStyle}>Kategorie</label>
                <select style={inputStyle} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                  <option value="klangmeditation">Klangmeditation</option>
                  <option value="gesang">Gesang</option>
                  <option value="hildegard">Hildegard</option>
                  <option value="stimme">Stimme</option>
                </select>
              </div>
              <div><label style={labelStyle}>Preis (€)</label><input type="number" step="0.01" style={inputStyle} value={form.price} onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })} required /></div>
              <div><label style={labelStyle}>Beschreibung</label><textarea style={{ ...inputStyle, resize: "vertical" }} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
              <div><label style={labelStyle}>Bild-URL</label><input style={inputStyle} value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} /></div>
              <div><label style={labelStyle}>Audio-URL</label><input style={inputStyle} value={form.audio_url} onChange={(e) => setForm({ ...form, audio_url: e.target.value })} /></div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="active" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
                <label htmlFor="active" style={{ ...labelStyle, marginBottom: 0 }}>Aktiv (sichtbar im Shop)</label>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving} className="flex-1 py-3 text-[11px] uppercase tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
                  {saving ? "Speichern…" : "Speichern"}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 text-[11px] uppercase tracking-[0.15em]" style={{ border: "1px solid rgba(166,137,77,0.3)", color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        {loading ? (
          <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>Laden…</div>
        ) : products.length === 0 ? (
          <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>Noch keine Produkte. Erstelle dein erstes!</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(166,137,77,0.15)" }}>
                {["Produkt", "Kategorie", "Preis", "Status", "Aktionen"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b last:border-0" style={{ borderColor: "rgba(166,137,77,0.08)" }}>
                  <td className="px-4 py-3" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229" }}>{p.name}</td>
                  <td className="px-4 py-3" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", color: "#7A6B5E", textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.category}</td>
                  <td className="px-4 py-3" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "13px", color: "#A6894D" }}>{Number(p.price).toFixed(2)} €</td>
                  <td className="px-4 py-3">
                    <span className="text-[9px] uppercase tracking-[0.1em] px-2 py-1" style={{ backgroundColor: p.active ? "rgba(60,140,80,0.1)" : "rgba(180,60,60,0.08)", color: p.active ? "#3C8C50" : "#8B3A3A", fontFamily: "var(--font-body), Georgia, serif" }}>
                      {p.active ? "Aktiv" : "Inaktiv"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEdit(p)} className="p-1.5 transition-opacity hover:opacity-60" style={{ color: "#A6894D" }} title="Bearbeiten"><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => toggleActive(p)} className="p-1.5 transition-opacity hover:opacity-60" style={{ color: "#7A6B5E" }} title={p.active ? "Deaktivieren" : "Aktivieren"}>
                        {p.active ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                      <button onClick={() => deleteProduct(p.id)} className="p-1.5 transition-opacity hover:opacity-60" style={{ color: "#8B3A3A" }} title="Löschen"><Trash2 className="w-3.5 h-3.5" /></button>
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
