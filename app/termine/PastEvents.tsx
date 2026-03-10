"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const past = [
  { title: "Metavital Human TS", date: "August 2025" },
  { title: "Der Atem Workshop", date: "Juli 2025" },
  { title: "Qigong-Frühstück", date: "Sommer 2025" },
  { title: "Farben·Klang", date: "Mai 2025" },
  { title: "Die Aura Workshop", date: "Mai 2025" },
  { title: "Kristall-Meditation", date: "Jänner 2025" },
  { title: "Bewusst Sein Reihe", date: "2023 – 2025" },
  { title: "Gruppen-Klang-Therapie Reihe", date: "2024" },
  { title: "Heilpendeln Tageskurs", date: "2023" },
  { title: "Themenabende (diverse)", date: "2022 – 2025" },
];

export default function PastEvents() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: "1px solid rgba(166,137,77,0.2)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-6 transition-opacity hover:opacity-70"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="text-left">
          <p
            className="text-[10px] uppercase tracking-[0.25em] mb-1"
            style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Archiv
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontWeight: 400,
              fontSize: "1.2rem",
              letterSpacing: "0.06em",
              color: "var(--text)",
            }}
          >
            Vergangene Veranstaltungen
          </p>
        </div>
        <ChevronDown
          className="w-4 h-4 shrink-0 transition-transform duration-400"
          style={{ color: "var(--gold)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <div style={{ borderTop: "1px solid rgba(166,137,77,0.15)", backgroundColor: "var(--sage)" }}>
          {past.map((e, i) => (
            <div
              key={e.title}
              className="flex items-center justify-between px-8 py-4"
              style={{
                borderBottom: i < past.length - 1 ? "1px solid rgba(166,137,77,0.12)" : "none",
              }}
            >
              <p
                className="text-sm"
                style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                {e.title}
              </p>
              <p
                className="text-xs ml-6 shrink-0"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                {e.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
