import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Users, ShoppingCart, ShoppingBag, Calendar } from "lucide-react";

async function getStats(supabase: Awaited<ReturnType<typeof createClient>>) {
  const [
    { count: userCount },
    { count: orderCount },
    { count: productCount },
    { count: eventCount },
    { data: recentOrders },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("*", { count: "exact", head: true }),
    supabase.from("products").select("*", { count: "exact", head: true }).eq("active", true),
    supabase.from("events").select("*", { count: "exact", head: true }).eq("active", true),
    supabase.from("orders").select("*").order("created_at", { ascending: false }).limit(5),
  ]);

  return { userCount, orderCount, productCount, eventCount, recentOrders };
}

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { userCount, orderCount, productCount, eventCount, recentOrders } = await getStats(supabase);

  const stats = [
    { label: "Benutzer", value: userCount ?? 0, icon: Users, href: "/admin/bestellungen" },
    { label: "Bestellungen", value: orderCount ?? 0, icon: ShoppingCart, href: "/admin/bestellungen" },
    { label: "Produkte aktiv", value: productCount ?? 0, icon: ShoppingBag, href: "/admin/shop" },
    { label: "Termine aktiv", value: eventCount ?? 0, icon: Calendar, href: "/admin/termine" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.8rem", fontWeight: 300, color: "#3D3229", letterSpacing: "0.06em" }}>
          Willkommen zurück, Antonia
        </h2>
        <p style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", marginTop: "4px" }}>
          Hier ist eine Übersicht deiner Website.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="p-6 transition-all duration-200 hover:shadow-md group"
            style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)", textDecoration: "none" }}
          >
            <div className="flex items-start justify-between mb-4">
              <Icon className="w-5 h-5" style={{ color: "#A6894D" }} />
            </div>
            <p style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "#3D3229", lineHeight: 1 }}>
              {value}
            </p>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#7A6B5E", marginTop: "6px" }}>
              {label}
            </p>
          </Link>
        ))}
      </div>

      {/* Recent Orders */}
      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
          <h3 style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#A6894D" }}>
            Letzte Bestellungen
          </h3>
        </div>
        {recentOrders && recentOrders.length > 0 ? (
          <div>
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="px-6 py-4 flex items-center justify-between border-b last:border-0"
                style={{ borderColor: "rgba(166,137,77,0.1)" }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229" }}>
                    {order.customer_email}
                  </p>
                  <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", color: "#7A6B5E", marginTop: "2px" }}>
                    {new Date(order.created_at).toLocaleDateString("de-AT")}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1rem", color: "#A6894D" }}>
                    {Number(order.total).toFixed(2)} €
                  </span>
                  <span
                    className="text-[9px] uppercase tracking-[0.1em] px-2 py-1"
                    style={{
                      backgroundColor: order.status === "completed" ? "rgba(60,140,80,0.1)" : "rgba(166,137,77,0.1)",
                      color: order.status === "completed" ? "#3C8C50" : "#A6894D",
                      fontFamily: "var(--font-body), Georgia, serif",
                    }}
                  >
                    {order.status === "completed" ? "Abgeschlossen" : order.status === "pending" ? "Ausstehend" : order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-10 text-center">
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", color: "#7A6B5E", fontSize: "13px" }}>
              Noch keine Bestellungen vorhanden.
            </p>
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: "Neues Produkt", href: "/admin/shop" },
          { label: "Neuer Termin", href: "/admin/termine" },
          { label: "Galerie verwalten", href: "/admin/galerie" },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center justify-center py-4 text-[11px] uppercase tracking-[0.18em] transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: "var(--gold)",
              color: "#fff",
              fontFamily: "var(--font-body), Georgia, serif",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
