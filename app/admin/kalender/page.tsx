"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EVENTS_BY_DATE: Record<string, { title: string; time: string; color: string }[]> = {
  "2026-03-22": [{ title: "Klangschalen-Abend", time: "18:30", color: "#A6894D" }],
  "2026-04-05": [{ title: "Stimme & Seele Workshop", time: "10:00", color: "#3C8C50" }],
  "2026-04-19": [{ title: "Hildegard-Klangreise", time: "17:00", color: "#A6894D" }],
};

const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export default function AdminKalenderPage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);

  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const next = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  return (
    <div className="space-y-6">
      <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>
        Kalender
      </h2>

      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        {/* Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
          <button onClick={prev} className="p-1.5 hover:opacity-60 transition-opacity" style={{ color: "#A6894D" }}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h3 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.1rem", fontWeight: 300, color: "#3D3229", letterSpacing: "0.05em" }}>
            {MONTHS[month]} {year}
          </h3>
          <button onClick={next} className="p-1.5 hover:opacity-60 transition-opacity" style={{ color: "#A6894D" }}>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 border-b" style={{ borderColor: "rgba(166,137,77,0.1)" }}>
          {DAYS.map((d) => (
            <div key={d} className="py-2 text-center" style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#A6894D" }}>
              {d}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7">
          {cells.map((day, i) => {
            const dateKey = day ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` : "";
            const events = EVENTS_BY_DATE[dateKey] || [];
            const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

            return (
              <div
                key={i}
                className="min-h-[80px] p-2 border-b border-r last:border-r-0"
                style={{ borderColor: "rgba(166,137,77,0.08)", backgroundColor: day ? "transparent" : "rgba(245,240,234,0.4)" }}
              >
                {day && (
                  <>
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 text-xs mb-1"
                      style={{
                        fontFamily: "var(--font-body), Georgia, serif",
                        fontSize: "12px",
                        color: isToday ? "#fff" : "#3D3229",
                        backgroundColor: isToday ? "#A6894D" : "transparent",
                        borderRadius: isToday ? "50%" : "0",
                      }}
                    >
                      {day}
                    </span>
                    {events.map((ev, j) => (
                      <div key={j} className="px-1.5 py-0.5 rounded text-[9px] truncate mb-0.5" style={{ backgroundColor: `${ev.color}18`, color: ev.color, fontFamily: "var(--font-body), Georgia, serif" }}>
                        {ev.time} {ev.title}
                      </div>
                    ))}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
