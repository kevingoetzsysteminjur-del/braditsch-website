"use client";

import { useState } from "react";

export default function AdminProfilPage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "Antonia Braditsch",
    email: "antonia@braditsch.at",
    telefon: "+43 664 123 45 67",
    bio: "Klangtherapeutin, Stimmarbeit und mediale Begleitung im VIVARIUM, Lichtenwörth.",
    website: "https://braditsch.at",
  });

  const inputStyle = {
    backgroundColor: "#F9F6F2",
    border: "1px solid rgba(166,137,77,0.25)",
    color: "#3D3229",
    fontFamily: "var(--font-body), Georgia, serif",
    width: "100%",
    padding: "10px 14px",
    fontSize: "13px",
    outline: "none",
  };

  const labelStyle = {
    fontFamily: "var(--font-body), Georgia, serif",
    fontSize: "10px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    color: "#7A6B5E",
    display: "block",
    marginBottom: "6px",
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-xl">
      <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>
        Profil
      </h2>

      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
          <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>
            Persönliche Daten
          </p>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-4">
          <div>
            <label style={labelStyle}>Name</label>
            <input style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>E-Mail</label>
            <input type="email" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>Telefon</label>
            <input style={inputStyle} value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>Website</label>
            <input style={inputStyle} value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
          </div>
          <div>
            <label style={labelStyle}>Kurzbeschreibung</label>
            <textarea style={{ ...inputStyle, resize: "vertical" }} rows={3} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button type="submit" className="px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
              Speichern
            </button>
            {saved && (
              <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", color: "#3C8C50" }}>
                ✓ Gespeichert
              </span>
            )}
          </div>
        </form>
      </div>

      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
          <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>
            Passwort ändern
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label style={labelStyle}>Neues Passwort</label>
            <input type="password" style={inputStyle} placeholder="••••••••" />
          </div>
          <div>
            <label style={labelStyle}>Passwort bestätigen</label>
            <input type="password" style={inputStyle} placeholder="••••••••" />
          </div>
          <button type="button" className="px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] hover:opacity-60 transition-opacity" style={{ border: "1px solid rgba(166,137,77,0.3)", color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif" }}>
            Passwort aktualisieren
          </button>
        </div>
      </div>
    </div>
  );
}
