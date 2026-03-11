"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Plus, Edit2, Trash2 } from "lucide-react";
import { useAdmin } from "@/hooks/useAdmin";
import AdminBtn from "@/components/admin/AdminBtn";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import ImageUploadZone from "@/components/admin/ImageUploadZone";
import { createClient } from "@/utils/supabase/client";

// ── Static hardcoded events (existing local images) ──────────────────────────
const STATIC_EVENTS = [
  {
    id: "static-1",
    title: "Aufnahmen Vibration Codes",
    date: "3.2.2026",
    isStatic: true,
    images: [
      { id: "s1-1", image_url: "/images/galerie/podcast/antonia1.jpg", caption: "Antonia im Podcast Studio" },
      { id: "s1-2", image_url: "/images/galerie/podcast/micro.jpg", caption: "Mikrofon" },
      { id: "s1-3", image_url: "/images/galerie/podcast/andi.jpg", caption: "Andi im Studio" },
      { id: "s1-4", image_url: "/images/galerie/podcast/studio.jpg", caption: "Studio Setup" },
      { id: "s1-5", image_url: "/images/galerie/podcast/aa.jpg", caption: "Antonia & Andi" },
    ],
  },
  {
    id: "static-2",
    title: "Klang-Raum VIVARIUM",
    date: "",
    isStatic: true,
    images: [
      { id: "s2-1", image_url: "/images/galerie/vivarium/front.jpg", caption: "VIVARIUM Front" },
      { id: "s2-2", image_url: "/images/galerie/vivarium/noten.jpg", caption: "Antonia mit Noten" },
      { id: "s2-3", image_url: "/images/galerie/vivarium/harfe.jpg", caption: "Harfe" },
      { id: "s2-4", image_url: "/images/galerie/vivarium/ks.jpg", caption: "Klangschalen" },
      { id: "s2-5", image_url: "/images/galerie/vivarium/klavier.jpg", caption: "Klavier" },
      { id: "s2-6", image_url: "/images/galerie/vivarium/saiten.jpg", caption: "Saiteninstrument" },
      { id: "s2-7", image_url: "/images/galerie/vivarium/mono.jpg", caption: "Monochord" },
      { id: "s2-8", image_url: "/images/galerie/vivarium/floeten.jpg", caption: "Flöten" },
      { id: "s2-9", image_url: "/images/galerie/vivarium/trommeln.jpg", caption: "Trommeln" },
      { id: "s2-10", image_url: "/images/galerie/vivarium/tempelglocken.jpg", caption: "Tempelglocken" },
      { id: "s2-11", image_url: "/images/galerie/vivarium/gong.jpg", caption: "Gong" },
      { id: "s2-12", image_url: "/images/galerie/vivarium/chimes.jpg", caption: "Chimes" },
      { id: "s2-13", image_url: "/images/galerie/vivarium/baldauf.jpg", caption: "Foto Franz Baldauf" },
      { id: "s2-14", image_url: "/images/galerie/vivarium/wirbel.jpg", caption: "Klang-Wirbel" },
      { id: "s2-15", image_url: "/images/galerie/vivarium/rosette.jpg", caption: "Rosette" },
      { id: "s2-16", image_url: "/images/galerie/vivarium/bild.jpg", caption: "VIVARIUM Raum" },
    ],
  },
];

type GalleryImage = { id: string; image_url: string; caption: string; gallery_event_id?: string };
type GalleryEvent = { id: string; title: string; date: string; isStatic?: boolean; images: GalleryImage[] };

const emptyForm = { title: "", date: "" };

export default function GaleriePage() {
  const { isAdmin } = useAdmin();
  const supabase = createClient();

  const [events, setEvents] = useState<GalleryEvent[]>(STATIC_EVENTS);
  const [lightbox, setLightbox] = useState<{ eventId: string; idx: number } | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<GalleryEvent | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [pendingImages, setPendingImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [confirm, setConfirm] = useState<{ type: "event" | "image"; id: string; eventId?: string } | null>(null);
  const [saving, setSaving] = useState(false);

  // Load Supabase events
  const loadSupabaseEvents = useCallback(async () => {
    const { data: eventsData } = await supabase
      .from("gallery_events")
      .select("*")
      .eq("active", true)
      .order("created_at", { ascending: false });

    if (!eventsData) return;

    const eventsWithImages = await Promise.all(
      eventsData.map(async (ev) => {
        const { data: imgs } = await supabase
          .from("gallery_images")
          .select("*")
          .eq("gallery_event_id", ev.id)
          .order("sort_order");
        return {
          id: ev.id,
          title: ev.title,
          date: ev.date ? new Date(ev.date).toLocaleDateString("de-AT") : "",
          isStatic: false,
          images: (imgs || []).map((img) => ({ id: img.id, image_url: img.image_url, caption: img.caption || "" })),
        };
      })
    );

    setEvents([...STATIC_EVENTS, ...eventsWithImages]);
  }, [supabase]);

  useEffect(() => { loadSupabaseEvents(); }, [loadSupabaseEvents]);

  // Lightbox helpers
  const currentEvent = lightbox ? events.find((e) => e.id === lightbox.eventId) : null;
  const currentImages = currentEvent?.images || [];
  function prev() { if (!lightbox) return; setLightbox({ ...lightbox, idx: (lightbox.idx - 1 + currentImages.length) % currentImages.length }); }
  function next() { if (!lightbox) return; setLightbox({ ...lightbox, idx: (lightbox.idx + 1) % currentImages.length }); }

  // Upload images to Supabase Storage
  const uploadImages = async (files: File[], eventId: string) => {
    const urls: string[] = [];
    for (const file of files) {
      const path = `gallery/${eventId}/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`;
      const { error } = await supabase.storage.from("gallery").upload(path, file);
      if (!error) {
        const { data: { publicUrl } } = supabase.storage.from("gallery").getPublicUrl(path);
        urls.push(publicUrl);
      }
    }
    return urls;
  };

  // Save new or edited event
  const handleSaveEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    if (editingEvent && !editingEvent.isStatic) {
      // Update title/date
      await supabase.from("gallery_events").update({ title: form.title, date: form.date || null }).eq("id", editingEvent.id);
      // Upload new images if any
      if (pendingImages.length > 0) {
        setUploading(true);
        const urls = await uploadImages(pendingImages, editingEvent.id);
        for (const url of urls) {
          await supabase.from("gallery_images").insert({ gallery_event_id: editingEvent.id, image_url: url, caption: "", sort_order: 0 });
        }
        setUploading(false);
      }
    } else {
      // Create new event
      const { data: newEvent } = await supabase
        .from("gallery_events")
        .insert({ title: form.title, date: form.date || null, active: true })
        .select()
        .single();

      if (newEvent && pendingImages.length > 0) {
        setUploading(true);
        const urls = await uploadImages(pendingImages, newEvent.id);
        for (const url of urls) {
          await supabase.from("gallery_images").insert({ gallery_event_id: newEvent.id, image_url: url, caption: "", sort_order: 0 });
        }
        setUploading(false);
      }
    }

    setSaving(false);
    setPendingImages([]);
    setShowEventModal(false);
    setEditingEvent(null);
    loadSupabaseEvents();
  };

  // Delete event
  const handleDeleteEvent = async (id: string) => {
    await supabase.from("gallery_images").delete().eq("gallery_event_id", id);
    await supabase.from("gallery_events").delete().eq("id", id);
    setConfirm(null);
    loadSupabaseEvents();
  };

  // Delete image
  const handleDeleteImage = async (imageId: string, imageUrl: string) => {
    // Remove from storage if it's a Supabase URL
    if (imageUrl.includes("supabase")) {
      const parts = imageUrl.split("/gallery/");
      if (parts[1]) await supabase.storage.from("gallery").remove([`gallery/${parts[1]}`]);
    }
    await supabase.from("gallery_images").delete().eq("id", imageId);
    setConfirm(null);
    loadSupabaseEvents();
  };

  const inputStyle = { backgroundColor: "var(--sage)", border: "1px solid rgba(166,137,77,0.25)", color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif", width: "100%", padding: "10px 14px", fontSize: "13px", outline: "none" };
  const labelStyle = { fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "0.15em", color: "var(--text-muted)", display: "block", marginBottom: "6px" };

  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden" style={{ minHeight: "40vh", backgroundColor: "var(--bg)", paddingTop: "80px" }}>
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 px-6 py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] mb-5" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>Impressionen</p>
          <h1 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 300, fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "0.12em", color: "var(--text)", lineHeight: 1.1 }}>Galerie</h1>
          <span className="block mt-6 mx-auto" style={{ width: "60px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6 }} />

          {/* Admin: Add Event Button */}
          {isAdmin && (
            <button
              onClick={() => { setForm(emptyForm); setEditingEvent(null); setPendingImages([]); setShowEventModal(true); }}
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              <Plus className="w-3.5 h-3.5" />
              Neues Event hinzufügen
            </button>
          )}
        </div>
      </section>

      {/* Events */}
      {events.map((event, ei) => (
        <section key={event.id} className="px-5 sm:px-8" style={{ paddingTop: "60px", paddingBottom: "60px", backgroundColor: ei % 2 === 0 ? "var(--bg)" : "var(--sage)" }}>
          <div className="max-w-6xl mx-auto">
            {/* Event Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                {event.date && (
                  <p className="text-[10px] uppercase tracking-[0.25em] mb-1" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>{event.date}</p>
                )}
                <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, fontSize: "clamp(1.4rem, 3vw, 2rem)", letterSpacing: "0.06em", color: "var(--text)" }}>
                  {event.title}
                </h2>
                <span className="block mt-4" style={{ width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.5 }} />
              </div>

              {/* Admin: Edit/Delete Event */}
              {isAdmin && !event.isStatic && (
                <div className="flex items-center gap-2 mt-1">
                  <AdminBtn
                    icon={Edit2}
                    label="Bearbeiten"
                    onClick={() => { setForm({ title: event.title, date: "" }); setEditingEvent(event); setPendingImages([]); setShowEventModal(true); }}
                  />
                  <AdminBtn
                    icon={Trash2}
                    label="Löschen"
                    variant="danger"
                    onClick={() => setConfirm({ type: "event", id: event.id })}
                  />
                </div>
              )}
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {event.images.map((img, ii) => (
                <div key={img.id} className="relative group" style={{ aspectRatio: "4/3" }}>
                  <button
                    onClick={() => setLightbox({ eventId: event.id, idx: ii })}
                    className="w-full h-full overflow-hidden focus:outline-none"
                    style={{ borderRadius: "8px" }}
                    aria-label={img.caption}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={img.image_url}
                        alt={img.caption}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ backgroundColor: "rgba(61,50,41,0.2)" }} />
                    </div>
                  </button>

                  {/* Admin: Delete Image */}
                  {isAdmin && !event.isStatic && (
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <AdminBtn
                        icon={X}
                        label="Bild löschen"
                        variant="danger"
                        size="sm"
                        onClick={() => setConfirm({ type: "image", id: img.id, eventId: event.id })}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Admin: Add Image to existing event */}
              {isAdmin && !event.isStatic && (
                <button
                  onClick={() => { setForm({ title: event.title, date: "" }); setEditingEvent(event); setPendingImages([]); setShowEventModal(true); }}
                  className="flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:opacity-80"
                  style={{ aspectRatio: "4/3", borderRadius: "8px", border: "2px dashed rgba(166,137,77,0.4)", backgroundColor: "transparent" }}
                  title="Bilder hinzufügen"
                >
                  <Plus className="w-6 h-6" style={{ color: "rgba(166,137,77,0.6)" }} />
                  <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(166,137,77,0.6)" }}>
                    Bilder hinzufügen
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ── EVENT MODAL ─────────────────────────────────────────────────── */}
      {showEventModal && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto" style={{ backgroundColor: "var(--bg)" }}>
            <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(166,137,77,0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.3rem", fontWeight: 300, color: "var(--text)" }}>
                {editingEvent ? (editingEvent.images.length > 0 ? "Event bearbeiten" : "Neues Event") : "Neues Galerie-Event"}
              </h3>
              <button onClick={() => setShowEventModal(false)} style={{ color: "var(--text-muted)", fontSize: "18px" }}>✕</button>
            </div>

            <form onSubmit={handleSaveEvent} className="p-6 space-y-5">
              {!editingEvent && (
                <>
                  <div><label style={labelStyle}>Titel</label><input style={inputStyle} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></div>
                  <div><label style={labelStyle}>Datum (optional)</label><input type="date" style={inputStyle} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div>
                </>
              )}

              <div>
                <label style={labelStyle}>
                  {editingEvent ? "Weitere Bilder hinzufügen" : "Bilder hochladen"}
                </label>
                <ImageUploadZone
                  onUpload={async (files) => { setPendingImages((prev) => [...prev, ...files]); }}
                  uploading={uploading}
                />
                {pendingImages.length > 0 && (
                  <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", color: "var(--gold)", marginTop: "8px" }}>
                    {pendingImages.length} Bild{pendingImages.length !== 1 ? "er" : ""} bereit zum Hochladen
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving || uploading} className="flex-1 py-3 text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif", opacity: saving || uploading ? 0.6 : 1 }}>
                  {saving || uploading ? "Speichern…" : "Speichern"}
                </button>
                <button type="button" onClick={() => setShowEventModal(false)} className="flex-1 py-3 text-[11px] uppercase tracking-[0.15em]" style={{ border: "1px solid rgba(166,137,77,0.3)", color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Abbrechen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── CONFIRM DIALOG ───────────────────────────────────────────────── */}
      {confirm && (
        <ConfirmDialog
          message={confirm.type === "event" ? "Dieses Galerie-Event und alle Bilder darin wirklich löschen?" : "Dieses Bild wirklich löschen?"}
          onConfirm={() => {
            if (confirm.type === "event") handleDeleteEvent(confirm.id);
            else {
              const event = events.find((e) => e.id === confirm.eventId);
              const img = event?.images.find((i) => i.id === confirm.id);
              if (img) handleDeleteImage(confirm.id, img.image_url);
            }
          }}
          onCancel={() => setConfirm(null)}
        />
      )}

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────── */}
      {lightbox !== null && currentEvent && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center" style={{ backgroundColor: "rgba(20,12,6,0.96)" }} onClick={() => setLightbox(null)}>
          <div className="relative flex items-center justify-center" style={{ maxWidth: "min(90vw, 1000px)", maxHeight: "85vh", width: "100%" }} onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImages[lightbox.idx].image_url}
              alt={currentImages[lightbox.idx].caption}
              width={1000}
              height={750}
              className="object-contain"
              style={{ maxHeight: "80vh", width: "auto", maxWidth: "100%", borderRadius: "4px" }}
            />
          </div>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center hover:opacity-100 opacity-55 transition-opacity" style={{ border: "1px solid rgba(166,137,77,0.4)", borderRadius: "2px" }} aria-label="Vorheriges Bild">
            <ChevronLeft className="w-5 h-5" style={{ color: "#A6894D" }} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center hover:opacity-100 opacity-55 transition-opacity" style={{ border: "1px solid rgba(166,137,77,0.4)", borderRadius: "2px" }} aria-label="Nächstes Bild">
            <ChevronRight className="w-5 h-5" style={{ color: "#A6894D" }} />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:opacity-100 opacity-55 transition-opacity" aria-label="Schließen">
            <X className="w-5 h-5" style={{ color: "#A6894D" }} />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(166,137,77,0.5)", fontFamily: "var(--font-body), Georgia, serif" }}>
            {lightbox.idx + 1} / {currentImages.length}
          </p>
        </div>
      )}
    </>
  );
}
