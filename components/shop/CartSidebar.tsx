"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ShoppingBag, Trash2, ChevronRight, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { items, removeItem, clearCart, totalItems, totalPrice, cartOpen, setCartOpen } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function formatTotal(n: number) {
    return n.toFixed(2).replace(".", ",") + "€";
  }

  function handleSend() {
    if (!form.name || !form.email) return;
    setSent(true);
    clearCart();
    setTimeout(() => {
      setSent(false);
      setCheckout(false);
      setCartOpen(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  }

  if (!cartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90]"
        style={{ backgroundColor: "rgba(61,50,41,0.4)", backdropFilter: "blur(2px)" }}
        onClick={() => setCartOpen(false)}
      />

      {/* Panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[100] flex flex-col"
        style={{
          width: "min(420px, 100vw)",
          backgroundColor: "var(--bg)",
          borderLeft: "1px solid rgba(166,137,77,0.2)",
          boxShadow: "-20px 0 60px rgba(61,50,41,0.15)",
          animation: "slideInRight 0.35s ease both",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5 shrink-0"
          style={{ borderBottom: "1px solid rgba(166,137,77,0.15)" }}
        >
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4" style={{ color: "var(--gold)" }} />
            <p
              className="tracking-[0.06em]"
              style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", fontSize: "1rem" }}
            >
              Warenkorb
            </p>
            {totalItems > 0 && (
              <span
                className="text-[10px] w-5 h-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--gold)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <button onClick={() => setCartOpen(false)} className="transition-opacity hover:opacity-50" style={{ color: "var(--text)" }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "var(--gold)" }}>
                <Check className="w-8 h-8 text-white" />
              </div>
              <p style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.2rem", color: "var(--text)", letterSpacing: "0.04em" }}>
                Bestellung gesendet
              </p>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                Antonia meldet sich bei Ihnen mit den Zahlungsdetails.
              </p>
            </div>
          ) : checkout ? (
            <div className="px-6 py-6">
              <button
                onClick={() => setCheckout(false)}
                className="text-[11px] uppercase tracking-[0.15em] mb-6 transition-opacity hover:opacity-60 flex items-center gap-1"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
              >
                ← Zurück zum Warenkorb
              </button>
              <p style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.1rem", color: "var(--text)", letterSpacing: "0.04em", marginBottom: "1.5rem" }}>
                Ihre Daten
              </p>

              {/* Order summary */}
              <div className="mb-6 p-4" style={{ backgroundColor: "var(--sage)", border: "1px solid rgba(166,137,77,0.2)" }}>
                {items.map((item) => (
                  <div key={item.slug} className="flex justify-between text-sm py-1" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                    <span>{item.title}</span>
                    <span style={{ color: "var(--gold)" }}>{item.priceStr}</span>
                  </div>
                ))}
                <div className="pt-2 mt-2 flex justify-between text-sm font-medium" style={{ borderTop: "1px solid rgba(166,137,77,0.2)", color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>
                  <span>Gesamt</span>
                  <span style={{ color: "var(--gold)" }}>{formatTotal(totalPrice)}</span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { key: "name", label: "Name *", type: "text" },
                  { key: "email", label: "E-Mail *", type: "email" },
                ].map(({ key, label, type }) => (
                  <div key={key}>
                    <label className="block text-[10px] uppercase tracking-[0.15em] mb-1.5" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 text-sm focus:outline-none"
                      style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.15em] mb-1.5" style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}>
                    Nachricht (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-2.5 text-sm focus:outline-none resize-none"
                    style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}
                  />
                </div>
              </div>

              <button
                onClick={handleSend}
                className="w-full mt-6 py-3.5 text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
                style={{
                  backgroundColor: form.name && form.email ? "var(--gold)" : "rgba(166,137,77,0.3)",
                  color: "#fff",
                  fontFamily: "var(--font-body), Georgia, serif",
                  cursor: form.name && form.email ? "pointer" : "not-allowed",
                }}
              >
                Bestellung absenden
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-20" style={{ color: "var(--gold)" }} />
              <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                Dein Warenkorb ist leer
              </p>
            </div>
          ) : (
            <div className="px-6 py-4">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-center gap-4 py-4"
                  style={{ borderBottom: "1px solid rgba(166,137,77,0.12)" }}
                >
                  <div className="relative w-14 h-14 shrink-0 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="56px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-snug" style={{ color: "var(--text)", fontFamily: "var(--font-body), Georgia, serif" }}>
                      {item.title}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif" }}>
                      {item.priceStr}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.slug)}
                    className="shrink-0 p-1.5 transition-opacity hover:opacity-50"
                    style={{ color: "var(--text-muted)" }}
                    aria-label="Entfernen"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {!sent && !checkout && items.length > 0 && (
          <div
            className="px-6 py-5 shrink-0"
            style={{ borderTop: "1px solid rgba(166,137,77,0.15)" }}
          >
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>Gesamt</p>
              <p style={{ color: "var(--gold)", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.2rem", fontWeight: 400, letterSpacing: "0.04em" }}>
                {formatTotal(totalPrice)}
              </p>
            </div>
            <button
              onClick={() => setCheckout(true)}
              className="w-full py-3.5 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--gold)", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Zur Kasse <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
