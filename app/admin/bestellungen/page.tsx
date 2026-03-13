"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

type Order = {
  id: string;
  customer_email: string;
  items: Array<{ title: string; priceStr: string }>;
  total: number;
  status: string;
  created_at: string;
};

const DEMO_ORDERS: Order[] = [
  {
    id: "demo-1",
    customer_email: "maria.huber@gmail.com",
    items: [{ title: "Klangschalen-Meditation (Aufnahme)", priceStr: "18,00 €" }, { title: "O Ignis Spiritus – Moderne Fassung", priceStr: "9,00 €" }],
    total: 27,
    status: "completed",
    created_at: "2026-03-10T14:22:00Z",
  },
  {
    id: "demo-2",
    customer_email: "thomas.wagner@web.at",
    items: [{ title: "Flug des Phönix – Klangreise", priceStr: "14,00 €" }],
    total: 14,
    status: "pending",
    created_at: "2026-03-11T09:05:00Z",
  },
  {
    id: "demo-3",
    customer_email: "sabine.mayer@outlook.com",
    items: [{ title: "Ave Maria – Original", priceStr: "9,00 €" }, { title: "Lotosblume – Mantra", priceStr: "12,00 €" }, { title: "Morgen – Stille Meditation", priceStr: "9,00 €" }],
    total: 30,
    status: "processing",
    created_at: "2026-03-12T17:40:00Z",
  },
  {
    id: "demo-4",
    customer_email: "peter.steinbauer@gmx.at",
    items: [{ title: "Zeit zum Neubeginn – Klangreise", priceStr: "14,00 €" }],
    total: 14,
    status: "completed",
    created_at: "2026-03-13T08:15:00Z",
  },
];

const STATUS_LABELS: Record<string, string> = {
  pending: "Ausstehend",
  processing: "In Bearbeitung",
  completed: "Abgeschlossen",
  cancelled: "Storniert",
};

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  pending: { bg: "rgba(166,137,77,0.1)", color: "#A6894D" },
  processing: { bg: "rgba(60,100,200,0.08)", color: "#3C64C8" },
  completed: { bg: "rgba(60,140,80,0.1)", color: "#3C8C50" },
  cancelled: { bg: "rgba(180,60,60,0.08)", color: "#8B3A3A" },
};

export default function AdminBestellungenPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const supabase = createClient();

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
    setOrders(data && data.length > 0 ? data : DEMO_ORDERS);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("orders").update({ status }).eq("id", id);
    load();
  };

  return (
    <div className="space-y-6">
      <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>
        Bestellungen
      </h2>

      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        {loading ? (
          <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>Laden…</div>
        ) : orders.length === 0 ? (
          <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>Noch keine Bestellungen vorhanden.</div>
        ) : (
          <div>
            {/* Header */}
            <div className="grid grid-cols-[1fr_140px_100px_120px_48px] gap-4 px-4 py-3 border-b" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
              {["Kunde", "Datum", "Gesamt", "Status", ""].map((h) => (
                <div key={h} style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>{h}</div>
              ))}
            </div>

            {orders.map((order) => {
              const colors = STATUS_COLORS[order.status] || STATUS_COLORS.pending;
              return (
                <div key={order.id} className="border-b last:border-0" style={{ borderColor: "rgba(166,137,77,0.08)" }}>
                  <div
                    className="grid grid-cols-[1fr_140px_100px_120px_48px] gap-4 px-4 py-3 cursor-pointer hover:bg-[#FAFAF8] transition-colors items-center"
                    onClick={() => setExpanded(expanded === order.id ? null : order.id)}
                  >
                    <div>
                      <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229" }}>{order.customer_email}</p>
                      <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", color: "#7A6B5E", marginTop: "2px" }}>
                        {Array.isArray(order.items) ? `${order.items.length} Artikel` : "—"}
                      </p>
                    </div>
                    <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#7A6B5E" }}>
                      {new Date(order.created_at).toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" })}
                    </p>
                    <p style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "14px", color: "#A6894D" }}>
                      {Number(order.total).toFixed(2)} €
                    </p>
                    <div>
                      <select
                        value={order.status}
                        onChange={(e) => { e.stopPropagation(); updateStatus(order.id, e.target.value); }}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] uppercase tracking-[0.08em] px-2 py-1 outline-none cursor-pointer"
                        style={{ backgroundColor: colors.bg, color: colors.color, border: "none", fontFamily: "var(--font-body), Georgia, serif" }}
                      >
                        {Object.entries(STATUS_LABELS).map(([val, label]) => (
                          <option key={val} value={val}>{label}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ color: "#7A6B5E", fontSize: "12px", textAlign: "center" }}>
                      {expanded === order.id ? "▲" : "▼"}
                    </div>
                  </div>

                  {expanded === order.id && (
                    <div className="px-4 pb-4 pt-2" style={{ backgroundColor: "#F9F6F2", borderTop: "1px solid rgba(166,137,77,0.08)" }}>
                      <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#A6894D", marginBottom: "8px" }}>
                        Bestellte Artikel
                      </p>
                      {Array.isArray(order.items) ? (
                        <ul className="space-y-1.5">
                          {order.items.map((item, i) => (
                            <li key={i} className="flex items-center justify-between">
                              <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#3D3229" }}>{item.title}</span>
                              <span style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "12px", color: "#A6894D" }}>{item.priceStr}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#7A6B5E" }}>Keine Artikeldetails verfügbar.</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
