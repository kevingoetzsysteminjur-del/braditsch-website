"use client";

import { useState } from "react";
import { MessageCircle, Clock } from "lucide-react";

const DEMO_TICKETS = [
  { id: "t1", name: "Maria Huber", email: "maria.huber@gmail.com", subject: "Frage zur Terminbuchung", message: "Hallo, ich wollte fragen ob noch Plätze für den Klangschalen-Abend am 22. März verfügbar sind?", status: "offen", created_at: "2026-03-12T09:14:00Z" },
  { id: "t2", name: "Thomas Wagner", email: "thomas.wagner@web.at", subject: "Bestellung erhalten?", message: "Ich habe vor 2 Tagen eine Bestellung aufgegeben aber noch keine Bestätigungs-E-Mail erhalten.", status: "in_bearbeitung", created_at: "2026-03-11T15:30:00Z" },
  { id: "t3", name: "Sabine Mayer", email: "sabine.mayer@outlook.com", subject: "Download-Link funktioniert nicht", message: "Der Download-Link für mein gekauftes Audio funktioniert leider nicht. Bitte um Hilfe.", status: "erledigt", created_at: "2026-03-10T11:00:00Z" },
];

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  offen: { bg: "rgba(166,137,77,0.1)", color: "#A6894D", label: "Offen" },
  in_bearbeitung: { bg: "rgba(60,100,200,0.08)", color: "#3C64C8", label: "In Bearbeitung" },
  erledigt: { bg: "rgba(60,140,80,0.1)", color: "#3C8C50", label: "Erledigt" },
};

export default function AdminSupportPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>
          Support
        </h2>
        <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#7A6B5E" }}>
          {DEMO_TICKETS.filter(t => t.status === "offen").length} offene Anfragen
        </span>
      </div>

      <div className="space-y-3">
        {DEMO_TICKETS.map((ticket) => {
          const st = STATUS_STYLE[ticket.status];
          const open = expanded === ticket.id;
          return (
            <div
              key={ticket.id}
              style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}
            >
              <div
                className="flex items-start justify-between px-5 py-4 cursor-pointer hover:bg-[#FAFAF8] transition-colors"
                onClick={() => setExpanded(open ? null : ticket.id)}
              >
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#A6894D" }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229", fontWeight: 500 }}>
                      {ticket.subject}
                    </p>
                    <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", color: "#7A6B5E", marginTop: "2px" }}>
                      {ticket.name} · {ticket.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="flex items-center gap-1" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", color: "#9A8B7E" }}>
                    <Clock className="w-3 h-3" />
                    {new Date(ticket.created_at).toLocaleDateString("de-AT")}
                  </span>
                  <span className="px-2 py-0.5 text-[9px] uppercase tracking-[0.1em]" style={{ backgroundColor: st.bg, color: st.color, fontFamily: "var(--font-body), Georgia, serif" }}>
                    {st.label}
                  </span>
                </div>
              </div>

              {open && (
                <div className="px-5 pb-5 pt-0" style={{ borderTop: "1px solid rgba(166,137,77,0.08)" }}>
                  <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#5A4B40", lineHeight: 1.7, marginTop: "12px" }}>
                    {ticket.message}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button className="px-4 py-2 text-[10px] uppercase tracking-[0.12em] hover:opacity-80 transition-opacity" style={{ backgroundColor: "#A6894D", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}>
                      Antworten
                    </button>
                    <button className="px-4 py-2 text-[10px] uppercase tracking-[0.12em] hover:opacity-60 transition-opacity" style={{ border: "1px solid rgba(166,137,77,0.3)", color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif" }}>
                      Als erledigt markieren
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
