"use client";

import { useState, useEffect, useRef } from "react";
import { createClient } from "@/utils/supabase/client";
import { Plus, Trash2, Upload, Edit2 } from "lucide-react";
import Image from "next/image";

type GalleryEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
  cover_image: string;
  active: boolean;
};

type GalleryImage = {
  id: string;
  gallery_event_id: string;
  image_url: string;
  caption: string;
  sort_order: number;
};

const emptyEvent = { title: "", date: "", description: "", cover_image: "", active: true };

export default function AdminGaleriePage() {
  const [events, setEvents] = useState<GalleryEvent[]>([]);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<GalleryEvent | null>(null);
  const [form, setForm] = useState(emptyEvent);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const supabase = createClient();

  const loadEvents = async () => {
    setLoading(true);
    const { data } = await supabase.from("gallery_events").select("*").order("date", { ascending: false });
    setEvents(data || []);
    setLoading(false);
  };

  const loadImages = async (eventId: string) => {
    const { data } = await supabase.from("gallery_images").select("*").eq("gallery_event_id", eventId).order("sort_order");
    setImages(data || []);
  };

  useEffect(() => { loadEvents(); }, []);
  useEffect(() => { if (selectedEvent) loadImages(selectedEvent.id); }, [selectedEvent]);

  const openNewEvent = () => { setForm(emptyEvent); setEditingEvent(null); setShowEventForm(true); };
  const openEditEvent = (ev: GalleryEvent) => {
    setForm({ title: ev.title, date: ev.date || "", description: ev.description || "", cover_image: ev.cover_image || "", active: ev.active });
    setEditingEvent(ev);
    setShowEventForm(true);
  };

  const handleSaveEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    if (editingEvent) {
      await supabase.from("gallery_events").update(form).eq("id", editingEvent.id);
    } else {
      await supabase.from("gallery_events").insert(form);
    }
    setSaving(false);
    setShowEventForm(false);
    loadEvents();
  };

  const deleteEvent = async (id: string) => {
    if (!confirm("Galerie-Event und alle Bilder löschen?")) return;
    await supabase.from("gallery_images").delete().eq("gallery_event_id", id);
    await supabase.from("gallery_events").delete().eq("id", id);
    if (selectedEvent?.id === id) setSelectedEvent(null);
    loadEvents();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedEvent || !e.target.files?.length) return;
    setUploading(true);
    for (const file of Array.from(e.target.files)) {
      const ext = file.name.split(".").pop();
      const path = `gallery/${selectedEvent.id}/${Date.now()}.${ext}`;
      const { data: uploadData, error } = await supabase.storage.from("gallery").upload(path, file);
      if (!error && uploadData) {
        const { data: { publicUrl } } = supabase.storage.from("gallery").getPublicUrl(path);
        await supabase.from("gallery_images").insert({
          gallery_event_id: selectedEvent.id,
          image_url: publicUrl,
          caption: "",
          sort_order: images.length,
        });
      }
    }
    setUploading(false);
    loadImages(selectedEvent.id);
  };

  const deleteImage = async (id: string, url: string) => {
    if (!confirm("Bild löschen?")) return;
    // Extract storage path from URL
    const path = url.split("/gallery/")[1];
    if (path) await supabase.storage.from("gallery").remove([`gallery/${path}`]);
    await supabase.from("gallery_images").delete().eq("id", id);
    if (selectedEvent) loadImages(selectedEvent.id);
  };

  const inputStyle = { backgroundColor: "#F9F6F2", border: "1px solid rgba(166,137,77,0.25)", color: "#3D3229", fontFamily: "var(--font-body), Georgia, serif", width: "100%", padding: "10px 14px", fontSize: "13px", outline: "none" };
  const labelStyle = { fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.15em", color: "#7A6B5E", display: "block", marginBottom: "6px" };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>Galerie verwalten</h2>
        <button onClick={openNewEvent} className="flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] hover:opacity-80" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
          <Plus className="w-3.5 h-3.5" /> Neues Galerie-Event
        </button>
      </div>

      {/* Event Form Modal */}
      {showEventForm && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="w-full max-w-md" style={{ backgroundColor: "#fff" }}>
            <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(166,137,77,0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.2rem", fontWeight: 300, color: "#3D3229" }}>
                {editingEvent ? "Event bearbeiten" : "Neues Galerie-Event"}
              </h3>
              <button onClick={() => setShowEventForm(false)} style={{ color: "#7A6B5E" }}>✕</button>
            </div>
            <form onSubmit={handleSaveEvent} className="p-6 space-y-4">
              <div><label style={labelStyle}>Titel</label><input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></div>
              <div><label style={labelStyle}>Datum</label><input type="date" style={inputStyle} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div>
              <div><label style={labelStyle}>Beschreibung</label><textarea style={{ ...inputStyle, resize: "vertical" }} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="active" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
                <label htmlFor="active" style={{ ...labelStyle, marginBottom: 0 }}>Aktiv (auf Galerie-Seite sichtbar)</label>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving} className="flex-1 py-3 text-[11px] uppercase tracking-[0.15em] hover:opacity-80" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
                  {saving ? "Speichern…" : "Speichern"}
                </button>
                <button type="button" onClick={() => setShowEventForm(false)} className="flex-1 py-3 text-[11px] uppercase tracking-[0.15em]" style={{ border: "1px solid rgba(166,137,77,0.3)", color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-[280px_1fr] gap-6">
        {/* Event List */}
        <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)", alignSelf: "start" }}>
          <div className="px-4 py-3 border-b" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>Galerie-Events</p>
          </div>
          {loading ? (
            <div className="p-6 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px" }}>Laden…</div>
          ) : events.length === 0 ? (
            <div className="p-6 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px" }}>Noch keine Events.</div>
          ) : (
            events.map((ev) => (
              <div
                key={ev.id}
                className="flex items-center justify-between px-4 py-3 cursor-pointer border-b last:border-0 transition-colors"
                style={{
                  borderColor: "rgba(166,137,77,0.08)",
                  backgroundColor: selectedEvent?.id === ev.id ? "rgba(166,137,77,0.08)" : "transparent",
                  borderLeft: selectedEvent?.id === ev.id ? "2px solid #A6894D" : "2px solid transparent",
                }}
                onClick={() => setSelectedEvent(ev)}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229" }}>{ev.title}</p>
                  {ev.date && <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", color: "#7A6B5E" }}>{new Date(ev.date).toLocaleDateString("de-AT")}</p>}
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={(e) => { e.stopPropagation(); openEditEvent(ev); }} className="p-1 hover:opacity-60" style={{ color: "#A6894D" }}><Edit2 className="w-3 h-3" /></button>
                  <button onClick={(e) => { e.stopPropagation(); deleteEvent(ev.id); }} className="p-1 hover:opacity-60" style={{ color: "#8B3A3A" }}><Trash2 className="w-3 h-3" /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Image Manager */}
        <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
          {!selectedEvent ? (
            <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>
              Wähle ein Galerie-Event aus, um Bilder zu verwalten.
            </div>
          ) : (
            <>
              <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
                <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>
                  Bilder: {selectedEvent.title}
                </p>
                <button
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading}
                  className="flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[0.12em] hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
                >
                  <Upload className="w-3 h-3" />
                  {uploading ? "Hochladen…" : "Bilder hochladen"}
                </button>
                <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
              </div>

              <div className="p-6">
                {images.length === 0 ? (
                  <div className="text-center py-10" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>
                    Noch keine Bilder. Lade Bilder hoch.
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img) => (
                      <div key={img.id} className="relative group" style={{ aspectRatio: "1" }}>
                        <div className="relative w-full h-full overflow-hidden">
                          <Image src={img.image_url} alt={img.caption || "Galerie-Bild"} fill className="object-cover" sizes="200px" />
                        </div>
                        <button
                          onClick={() => deleteImage(img.id, img.image_url)}
                          className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: "rgba(180,60,60,0.9)", color: "#fff", borderRadius: "50%" }}
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
