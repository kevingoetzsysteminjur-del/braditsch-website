"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Clock, ChevronRight, Plus, Edit2, Trash2, X } from "lucide-react";
import PastEvents from "./PastEvents";
import { useAdmin } from "@/hooks/useAdmin";
import { createClient } from "@/utils/supabase/client";
import AdminBtn from "@/components/admin/AdminBtn";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

interface DbEvent {
  id: string;
  title: string;
  description: string;
  date_text: string;
  time_text: string;
  price: string;
  location: string;
  badge_text: string;
  active: boolean;
}

const BLANK: Omit<DbEvent, "id"> = {
  title: "",
  description: "",
  date_text: "",
  time_text: "",
  price: "",
  location: "VIVARIUM, Angergasse 7, 2493 Lichtenwörth",
  badge_text: "",
  active: true,
};

const einzelItems = [
  { title: "Soul Sound Healing", price: "90€", duration: "ca. 70 Min" },
  { title: "Klangliege & Körpermonochord", price: "75€", duration: "ca. 50 Min" },
  { title: "Kristallpyramide", price: "60€", duration: "ca. 40 Min" },
  { title: "Klangschalen für Kinder", price: "49€", duration: "ca. 30 Min · 6er Block 270€" },
  { title: "Magie der Stimme", price: "90€", duration: "ca. 60 Min" },
];

const LABEL: React.CSSProperties = {
  fontFamily: "var(--font-body), Georgia, serif",
  color: "var(--gold)",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.25em",
};

const BODY: React.CSSProperties = {
  fontFamily: "var(--font-body), Georgia, serif",
  color: "var(--text-muted)",
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

export default function TermineClient() {
  const { isAdmin } = useAdmin();
  const [dbEvents, setDbEvents] = useState<DbEvent[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<DbEvent | null>(null);
  const [form, setForm] = useState<Omit<DbEvent, "id">>(BLANK);
  const [saving, setSaving] = useState(false);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("events").select("*").order("created_at");
    if (data) setDbEvents(data as DbEvent[]);
  }

  function openAdd() {
    setEditing(null);
    setForm(BLANK);
    setModal(true);
  }

  function openEdit(ev: DbEvent) {
    setEditing(ev);
    setForm({
      title: ev.title, description: ev.description, date_text: ev.date_text,
      time_text: ev.time_text, price: ev.price, location: ev.location,
      badge_text: ev.badge_text, active: ev.active,
    });
    setModal(true);
  }

  async function handleSave() {
    setSaving(true);
    const supabase = createClient();
    if (editing) {
      await supabase.from("events").update(form).eq("id", editing.id);
    } else {
      await supabase.from("events").insert(form);
    }
    setSaving(false);
    setModal(false);
    load();
  }

  async function handleDelete(id: string) {
    const supabase = createClient();
    await supabase.from("events").delete().eq("id", id);
    setConfirmId(null);
    load();
  }

  function setField<K extends keyof Omit<DbEvent, "id">>(k: K, v: Omit<DbEvent, "id">[K]) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  const visibleEvents = isAdmin ? dbEvents : dbEvents.filter((e) => e.active);

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "45vh", backgroundColor: "var(--bg)" }}
      >
        <div className="grain absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto pt-32 pb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-6" style={BODY}>
            Veranstaltungskalender
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 7vw, 4.8rem)",
              letterSpacing: "0.15em",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Termine &amp;<br />Veranstaltungen
          </h1>
          {isAdmin && (
            <button
              onClick={openAdd}
              className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] px-5 py-2.5 mx-auto transition-opacity hover:opacity-80"
              style={{ backgroundColor: "rgba(166,137,77,0.9)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              <Plus className="w-3 h-3" /> Neuen Termin hinzufügen
            </button>
          )}
        </div>
      </section>

      {/* Events */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--sage)" }}>
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Static Event 1: Training Intuition & Hellsinne */}
          <article style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.2)" }}>
            <div className="mesh-gold grain relative w-full" style={{ height: "220px" }} />
            <div className="px-8 pt-8 pb-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span style={LABEL}>Training</span>
                <span className="text-[10px] uppercase tracking-[0.1em] px-3 py-1" style={{ border: "1px solid var(--gold)", color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Frühbucherpreis bis 27.2.2026
                </span>
              </div>
              <h2 className="mb-1" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "0.04em", color: "var(--text)" }}>
                Intuition &amp; Hellsinne
              </h2>
              <p className="italic text-sm mb-6" style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text-muted)", letterSpacing: "0.03em" }}>
                Klarheit durch innere Führung
              </p>
              <p className="text-sm leading-relaxed mb-8" style={BODY}>
                Intuition und Hellsinne sind wertvolle Schlüssel, über die jeder von uns verfügt, die aber oft unbewusst in uns schlummern. Als ausgebildetes Medium und feinfühliger Mensch biete ich dir eine herzliche und achtsame Zugangsweise. Du erhältst klare Werkzeuge und effektive Übungen, um deine intuitive Seite zu stärken und feinstoffliche Eindrücke bewusst zu erleben.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8 pt-6" style={{ borderTop: "1px solid rgba(166,137,77,0.15)" }}>
                <div>
                  <p className="mb-1" style={LABEL}>Termin</p>
                  <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>Ab 28. März 2026</p>
                  <p className="text-xs mt-0.5" style={BODY}>Monatlich jeden 3. Samstag<br />9:30 – 13:30 Uhr<br />(außer August)</p>
                </div>
                <div>
                  <p className="mb-1" style={LABEL}>Ort</p>
                  <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>VIVARIUM</p>
                  <p className="text-xs mt-0.5" style={BODY}>Lichtenwörth</p>
                </div>
                <div>
                  <p className="mb-1" style={LABEL}>Preis</p>
                  <p className="text-sm" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.1rem", fontWeight: 400 }}>495€</p>
                  <p className="text-xs mt-0.5" style={BODY}>Frühbucher: 450€ bis 27.2.2026<br />Teilzahlung möglich</p>
                </div>
              </div>
              <Link href="mailto:antonia@braditsch.at?subject=Training Intuition & Hellsinne" className="btn-gold-outline">
                Jetzt anmelden <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </article>

          <div style={{ height: "1px", backgroundColor: "rgba(166,137,77,0.15)" }} />

          {/* Static Event 2: Heilsames Singen */}
          <article style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.2)" }}>
            <div className="mesh-rose grain relative w-full" style={{ height: "180px" }} />
            <div className="px-8 pt-8 pb-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span style={LABEL}>Offene Gruppe</span>
                <span className="text-[10px] uppercase tracking-[0.1em] px-3 py-1" style={{ border: "1px solid rgba(166,137,77,0.4)", color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Jeden 3. Mittwoch
                </span>
              </div>
              <h2 className="mb-6" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "0.04em", color: "var(--text)" }}>
                Heilsames Singen
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={BODY}>
                Singen steigert nachweislich das Selbstbewusstsein, setzt Glückshormone frei, entspannt, schenkt Freude und gute Laune. Beim heilsamen Singen gibt es keine falschen Töne. Eingeladen sind gerade jene Menschen, die glauben nicht singen zu können.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8 pt-6" style={{ borderTop: "1px solid rgba(166,137,77,0.15)" }}>
                <div>
                  <p className="mb-1" style={LABEL}>Termin</p>
                  <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>Jeden 3. Mittwoch</p>
                  <p className="text-xs mt-0.5" style={BODY}>18:30 – 20:00 Uhr</p>
                </div>
                <div>
                  <p className="mb-1" style={LABEL}>Ort</p>
                  <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>VIVARIUM</p>
                  <p className="text-xs mt-0.5" style={BODY}>Angergasse 7, 2493 Lichtenwörth</p>
                </div>
                <div>
                  <p className="mb-1" style={LABEL}>Preis</p>
                  <p className="text-sm" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.1rem", fontWeight: 400 }}>25€</p>
                  <p className="text-xs mt-0.5" style={BODY}>pro Abend</p>
                </div>
              </div>
              <Link href="mailto:antonia@braditsch.at?subject=Heilsames Singen" className="btn-gold-outline">
                Jetzt anmelden <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </article>

          <div style={{ height: "1px", backgroundColor: "rgba(166,137,77,0.15)" }} />

          {/* Static Event 3: Einzelbehandlungen */}
          <article style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.2)" }}>
            <div className="mesh-warm grain relative w-full" style={{ height: "180px" }} />
            <div className="px-8 pt-8 pb-10">
              <div className="mb-5">
                <span style={LABEL}>Immer verfügbar</span>
              </div>
              <h2 className="mb-2" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "0.04em", color: "var(--text)" }}>
                Einzelbehandlungen
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={BODY}>
                Individuelle Klang-, Stimm- und mediale Sitzungen nach Vereinbarung.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {einzelItems.map((item) => (
                  <div key={item.title} className="px-5 py-4" style={{ border: "1px solid rgba(166,137,77,0.18)", backgroundColor: "var(--sage)" }}>
                    <p className="text-sm mb-2" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>{item.title}</p>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1rem", fontWeight: 400 }}>{item.price}</span>
                      <span style={{ color: "rgba(166,137,77,0.3)" }}>·</span>
                      <span className="text-xs" style={BODY}>{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(166,137,77,0.15)" }}>
                <div className="flex items-center gap-2 text-xs" style={BODY}>
                  <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--gold)" }} />
                  VIVARIUM, Angergasse 7, 2493 Lichtenwörth
                </div>
                <div className="flex items-center gap-2 text-xs" style={BODY}>
                  <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--gold)" }} />
                  Nach Vereinbarung
                </div>
              </div>
              <div className="mt-6">
                <Link href="mailto:antonia@braditsch.at?subject=Termin vereinbaren" className="btn-gold-outline">
                  Termin vereinbaren <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>

          {/* Dynamic Supabase events */}
          {visibleEvents.map((ev) => (
            <div key={ev.id}>
              <div style={{ height: "1px", backgroundColor: "rgba(166,137,77,0.15)" }} />
              <article
                className="relative"
                style={{
                  backgroundColor: "var(--bg)",
                  border: "1px solid rgba(166,137,77,0.2)",
                  opacity: !ev.active && isAdmin ? 0.55 : 1,
                }}
              >
                <div className="mesh-gold grain relative w-full" style={{ height: "180px" }} />
                {isAdmin && (
                  <div className="absolute top-3 right-3 z-10 flex gap-1.5">
                    <AdminBtn icon={Edit2} label="Bearbeiten" onClick={() => openEdit(ev)} />
                    <AdminBtn icon={Trash2} label="Löschen" onClick={() => setConfirmId(ev.id)} variant="danger" />
                  </div>
                )}
                {isAdmin && !ev.active && (
                  <div className="absolute top-3 left-3 z-10 text-[8px] uppercase tracking-[0.1em] px-2 py-1" style={{ backgroundColor: "rgba(150,60,60,0.7)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif", borderRadius: "3px" }}>
                    Inaktiv
                  </div>
                )}
                <div className="px-8 pt-8 pb-10">
                  {ev.badge_text && (
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="text-[10px] uppercase tracking-[0.1em] px-3 py-1" style={{ border: "1px solid rgba(166,137,77,0.4)", color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                        {ev.badge_text}
                      </span>
                    </div>
                  )}
                  <h2 className="mb-6" style={{ fontFamily: "var(--font-heading), Georgia, serif", fontWeight: 400, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "0.04em", color: "var(--text)" }}>
                    {ev.title}
                  </h2>
                  {ev.description && (
                    <p className="text-sm leading-relaxed mb-8" style={BODY}>{ev.description}</p>
                  )}
                  <div className="grid sm:grid-cols-3 gap-6 mb-8 pt-6" style={{ borderTop: "1px solid rgba(166,137,77,0.15)" }}>
                    <div>
                      <p className="mb-1" style={LABEL}>Termin</p>
                      <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>{ev.date_text}</p>
                      {ev.time_text && <p className="text-xs mt-0.5" style={BODY}>{ev.time_text}</p>}
                    </div>
                    <div>
                      <p className="mb-1" style={LABEL}>Ort</p>
                      <p className="text-sm" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>{ev.location}</p>
                    </div>
                    {ev.price && (
                      <div>
                        <p className="mb-1" style={LABEL}>Preis</p>
                        <p className="text-sm" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.1rem", fontWeight: 400 }}>{ev.price}</p>
                      </div>
                    )}
                  </div>
                  <Link href="mailto:antonia@braditsch.at" className="btn-gold-outline">
                    Jetzt anmelden <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            </div>
          ))}

          <PastEvents />
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 px-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm leading-relaxed" style={BODY}>
            Weitere Infos &amp; Anmeldung unter{" "}
            <a href="mailto:antonia@braditsch.at" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>antonia@braditsch.at</a>
            {" "}oder{" "}
            <a href="tel:+436767516188" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>0676 7516188</a>
          </p>
        </div>
      </section>

      {/* Event Modal */}
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
                {editing ? "Termin bearbeiten" : "Neuer Termin"}
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
                  <label style={labelStyle}>Datum</label>
                  <input value={form.date_text} onChange={(e) => setField("date_text", e.target.value)} style={inputStyle} placeholder="z.B. 15. April 2026" />
                </div>
                <div>
                  <label style={labelStyle}>Uhrzeit</label>
                  <input value={form.time_text} onChange={(e) => setField("time_text", e.target.value)} style={inputStyle} placeholder="z.B. 10:00 – 16:00 Uhr" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label style={labelStyle}>Preis</label>
                  <input value={form.price} onChange={(e) => setField("price", e.target.value)} style={inputStyle} placeholder="z.B. 75€" />
                </div>
                <div>
                  <label style={labelStyle}>Badge (optional)</label>
                  <input value={form.badge_text} onChange={(e) => setField("badge_text", e.target.value)} style={inputStyle} placeholder="z.B. Neu" />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Ort</label>
                <input value={form.location} onChange={(e) => setField("location", e.target.value)} style={inputStyle} />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="ev-active"
                  checked={form.active}
                  onChange={(e) => setField("active", e.target.checked)}
                  style={{ accentColor: "var(--gold)", width: "14px", height: "14px" }}
                />
                <label htmlFor="ev-active" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "var(--text-muted)" }}>
                  Termin aktiv (sichtbar für Besucher)
                </label>
              </div>
              <button
                onClick={handleSave}
                disabled={saving || !form.title}
                className="w-full py-3 text-[11px] uppercase tracking-[0.15em] transition-opacity hover:opacity-80 disabled:opacity-40"
                style={{ backgroundColor: "rgba(166,137,77,0.9)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                {saving ? "Speichern…" : editing ? "Änderungen speichern" : "Termin hinzufügen"}
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmId && (
        <ConfirmDialog
          message="Diesen Termin wirklich löschen? Das kann nicht rückgängig gemacht werden."
          onConfirm={() => handleDelete(confirmId)}
          onCancel={() => setConfirmId(null)}
        />
      )}
    </>
  );
}
