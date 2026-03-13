"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";

type Event = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  time: string;
  price: number;
  location: string;
  badge: string;
  active: boolean;
  created_at: string;
};

const empty = { title: "", subtitle: "", description: "", date: "", time: "", price: 0, location: "VIVARIUM, Angergasse 7, 2493 Lichtenwörth", badge: "", active: true };

const DEMO_EVENTS: Event[] = [
  {
    id: "demo-1",
    title: "Klangschalen-Abend",
    subtitle: "Entspannung & Heilfrequenzen",
    description: "Ein Abend der Stille und Heilung mit Klangschalen, Gong und Stimmarbeit. Ideal für Einsteiger und Fortgeschrittene.",
    date: "2026-03-22",
    time: "18:30 – 20:30",
    price: 35,
    location: "VIVARIUM, Angergasse 7, 2493 Lichtenwörth",
    badge: "Frühbucher bis 15.03.",
    active: true,
    created_at: "2026-03-01T10:00:00Z",
  },
  {
    id: "demo-2",
    title: "Stimme & Seele",
    subtitle: "Workshop für Stimmarbeit",
    description: "Entdecke die Kraft deiner eigenen Stimme. Dieser Workshop verbindet Atemarbeit, Tönen und meditative Stimmübungen.",
    date: "2026-04-05",
    time: "10:00 – 14:00",
    price: 75,
    location: "VIVARIUM, Angergasse 7, 2493 Lichtenwörth",
    badge: "Nur 8 Plätze",
    active: true,
    created_at: "2026-03-05T09:00:00Z",
  },
  {
    id: "demo-3",
    title: "Hildegard von Bingen – Klangreise",
    subtitle: "Mittelalterliche Heilkunde & Musik",
    description: "Eine meditative Klangreise inspiriert von den Visionen und Heilmelodien der Hildegard von Bingen.",
    date: "2026-04-19",
    time: "17:00 – 19:00",
    price: 28,
    location: "VIVARIUM, Angergasse 7, 2493 Lichtenwörth",
    badge: "",
    active: true,
    created_at: "2026-03-07T14:00:00Z",
  },
  {
    id: "demo-4",
    title: "Winterklang – Abschluss-Abend",
    subtitle: "Rückblick 2025",
    description: "Ein besonderer Abend zum Jahresausklang mit Gong, Klangschalen und meditativen Texten.",
    date: "2025-12-21",
    time: "19:00 – 21:00",
    price: 30,
    location: "VIVARIUM, Angergasse 7, 2493 Lichtenwörth",
    badge: "",
    active: false,
    created_at: "2025-11-01T10:00:00Z",
  },
];

export default function AdminTerminePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Event | null>(null);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("events").select("*").order("date", { ascending: true });
    setEvents(data && data.length > 0 ? data : DEMO_EVENTS);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => { setForm(empty); setEditing(null); setShowForm(true); };
  const openEdit = (ev: Event) => {
    setForm({ title: ev.title, subtitle: ev.subtitle || "", description: ev.description || "", date: ev.date || "", time: ev.time || "", price: ev.price || 0, location: ev.location || "", badge: ev.badge || "", active: ev.active });
    setEditing(ev);
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    if (editing) {
      await supabase.from("events").update(form).eq("id", editing.id);
    } else {
      await supabase.from("events").insert(form);
    }
    setSaving(false);
    setShowForm(false);
    load();
  };

  const toggleActive = async (ev: Event) => {
    await supabase.from("events").update({ active: !ev.active }).eq("id", ev.id);
    load();
  };

  const deleteEvent = async (id: string) => {
    if (!confirm("Termin wirklich löschen?")) return;
    await supabase.from("events").delete().eq("id", id);
    load();
  };

  const inputStyle = { backgroundColor: "#F9F6F2", border: "1px solid rgba(166,137,77,0.25)", color: "#3D3229", fontFamily: "var(--font-body), Georgia, serif", width: "100%", padding: "10px 14px", fontSize: "13px", outline: "none" };
  const labelStyle = { fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.15em", color: "#7A6B5E", display: "block", marginBottom: "6px" };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>Termine & Veranstaltungen</h2>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-opacity hover:opacity-80" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
          <Plus className="w-3.5 h-3.5" /> Neuer Termin
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto" style={{ backgroundColor: "#fff" }}>
            <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(166,137,77,0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.2rem", fontWeight: 300, color: "#3D3229" }}>
                {editing ? "Termin bearbeiten" : "Neuer Termin"}
              </h3>
              <button onClick={() => setShowForm(false)} style={{ color: "#7A6B5E" }}>✕</button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div><label style={labelStyle}>Titel</label><input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></div>
              <div><label style={labelStyle}>Untertitel</label><input style={inputStyle} value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label style={labelStyle}>Datum</label><input type="date" style={inputStyle} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div>
                <div><label style={labelStyle}>Uhrzeit</label><input style={inputStyle} placeholder="z.B. 18:30 – 20:00" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} /></div>
              </div>
              <div><label style={labelStyle}>Preis (€)</label><input type="number" step="0.01" style={inputStyle} value={form.price} onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })} /></div>
              <div><label style={labelStyle}>Ort</label><input style={inputStyle} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></div>
              <div><label style={labelStyle}>Badge (z.B. "Frühbucher bis...")</label><input style={inputStyle} value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} /></div>
              <div><label style={labelStyle}>Beschreibung</label><textarea style={{ ...inputStyle, resize: "vertical" }} rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="active" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
                <label htmlFor="active" style={{ ...labelStyle, marginBottom: 0 }}>Aktiv (auf Website sichtbar)</label>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving} className="flex-1 py-3 text-[11px] uppercase tracking-[0.15em] hover:opacity-80" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
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

      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        {loading ? (
          <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>Laden…</div>
        ) : events.length === 0 ? (
          <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>Noch keine Termine.</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(166,137,77,0.15)" }}>
                {["Titel", "Datum", "Preis", "Status", "Aktionen"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev.id} className="border-b last:border-0" style={{ borderColor: "rgba(166,137,77,0.08)" }}>
                  <td className="px-4 py-3" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229" }}>
                    {ev.title}
                    {ev.subtitle && <span style={{ display: "block", fontSize: "11px", color: "#7A6B5E" }}>{ev.subtitle}</span>}
                  </td>
                  <td className="px-4 py-3" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#7A6B5E" }}>
                    {ev.date ? new Date(ev.date).toLocaleDateString("de-AT") : "—"}
                  </td>
                  <td className="px-4 py-3" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "13px", color: "#A6894D" }}>
                    {ev.price ? `${Number(ev.price).toFixed(2)} €` : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-[9px] uppercase tracking-[0.1em] px-2 py-1" style={{ backgroundColor: ev.active ? "rgba(60,140,80,0.1)" : "rgba(180,60,60,0.08)", color: ev.active ? "#3C8C50" : "#8B3A3A", fontFamily: "var(--font-body), Georgia, serif" }}>
                      {ev.active ? "Aktiv" : "Inaktiv"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEdit(ev)} className="p-1.5 hover:opacity-60" style={{ color: "#A6894D" }}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => toggleActive(ev)} className="p-1.5 hover:opacity-60" style={{ color: "#7A6B5E" }}>
                        {ev.active ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      </button>
                      <button onClick={() => deleteEvent(ev.id)} className="p-1.5 hover:opacity-60" style={{ color: "#8B3A3A" }}><Trash2 className="w-3.5 h-3.5" /></button>
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
