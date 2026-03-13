"use client";

import { useState } from "react";
import { Mail, Edit2 } from "lucide-react";

const TEMPLATES = [
  {
    id: "bestellung",
    name: "Bestellbestätigung",
    subject: "Deine Bestellung bei Antonia Braditsch ✓",
    description: "Wird nach jeder erfolgreichen Bestellung automatisch versendet.",
    preview: "Liebe/r {{name}},\n\nvielen Dank für deine Bestellung! Wir haben deine Bestellung #{{order_id}} erhalten und werden sie schnellstmöglich bearbeiten.\n\nBestellte Artikel:\n{{items}}\n\nGesamtbetrag: {{total}} €\n\nDu erhältst deinen Download-Link sobald die Zahlung bestätigt wurde.\n\nHerzliche Grüße,\nAntonia Braditsch",
  },
  {
    id: "terminbestaetigung",
    name: "Terminbestätigung",
    subject: "Deine Anmeldung: {{event_title}}",
    description: "Wird nach der Buchung eines Termins / einer Veranstaltung versendet.",
    preview: "Liebe/r {{name}},\n\ndeine Anmeldung für \"{{event_title}}\" am {{date}} um {{time}} Uhr wurde bestätigt.\n\nOrt: {{location}}\n\nBitte bringe bequeme Kleidung und eine Matte mit. Wir freuen uns auf dich!\n\nHerzliche Grüße,\nAntonia Braditsch",
  },
  {
    id: "willkommen",
    name: "Willkommens-E-Mail",
    subject: "Willkommen bei Antonia Braditsch",
    description: "Wird bei der Registrierung eines neuen Benutzers versendet.",
    preview: "Liebe/r {{name}},\n\nherzlich willkommen! Schön, dass du dabei bist.\n\nAuf meiner Website findest du Klangmeditationen, Termine und vieles mehr.\n\nBis bald,\nAntonia Braditsch",
  },
  {
    id: "download",
    name: "Download-Link",
    subject: "Dein Download ist bereit 🎵",
    description: "Wird versendet wenn ein Audio-Download verfügbar ist.",
    preview: "Liebe/r {{name}},\n\ndein Download ist jetzt verfügbar!\n\n→ Download-Link: {{download_url}}\n\nDer Link ist 7 Tage gültig.\n\nViel Freude beim Anhören,\nAntonia Braditsch",
  },
];

export default function AdminEmailTemplatesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const template = TEMPLATES.find((t) => t.id === selected);

  return (
    <div className="space-y-6">
      <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>
        E-Mail Templates
      </h2>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Liste */}
        <div className="space-y-3">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(selected === t.id ? null : t.id)}
              className="w-full text-left p-5 transition-all hover:shadow-sm"
              style={{
                backgroundColor: selected === t.id ? "rgba(166,137,77,0.05)" : "#fff",
                border: selected === t.id ? "1px solid rgba(166,137,77,0.4)" : "1px solid rgba(166,137,77,0.15)",
              }}
            >
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#A6894D" }} />
                <div className="flex-1 min-w-0">
                  <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229", fontWeight: 500 }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", color: "#7A6B5E", marginTop: "3px" }}>
                    {t.description}
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", color: "#A6894D", marginTop: "5px" }}>
                    Betreff: {t.subject}
                  </p>
                </div>
                <Edit2 className="w-3.5 h-3.5 shrink-0" style={{ color: "#A6894D" }} />
              </div>
            </button>
          ))}
        </div>

        {/* Vorschau */}
        <div>
          {template ? (
            <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
              <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
                <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#A6894D" }}>
                  Vorschau
                </p>
              </div>
              <div className="p-5">
                <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#7A6B5E", marginBottom: "4px" }}>Betreff</p>
                <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229", marginBottom: "16px", borderBottom: "1px solid rgba(166,137,77,0.12)", paddingBottom: "12px" }}>
                  {template.subject}
                </p>
                <pre style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#5A4B40", lineHeight: 1.8, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                  {template.preview}
                </pre>
                <button className="mt-5 w-full py-2.5 text-[10px] uppercase tracking-[0.15em] hover:opacity-80 transition-opacity" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
                  Template bearbeiten
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-10" style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
              <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#9A8B7E" }}>
                Template auswählen um Vorschau zu sehen
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
