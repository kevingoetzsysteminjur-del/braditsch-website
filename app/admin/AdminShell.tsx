"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Image, ShoppingBag, Calendar, ShoppingCart, LogOut, Menu, X } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Galerie", href: "/admin/galerie", icon: Image },
  { label: "Shop", href: "/admin/shop", icon: ShoppingBag },
  { label: "Termine", href: "/admin/termine", icon: Calendar },
  { label: "Bestellungen", href: "/admin/bestellungen", icon: ShoppingCart },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  const Sidebar = () => (
    <aside
      className="flex flex-col h-full"
      style={{ backgroundColor: "#2A211A", width: "240px" }}
    >
      {/* Logo */}
      <div className="px-6 py-6 border-b" style={{ borderColor: "rgba(166,137,77,0.2)" }}>
        <p style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "#C9A96E", fontSize: "1.1rem", fontWeight: 300, letterSpacing: "0.08em" }}>
          Antonia Braditsch
        </p>
        <p style={{ fontFamily: "var(--font-body), Georgia, serif", color: "rgba(255,255,255,0.35)", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", marginTop: "4px" }}>
          Admin-Panel
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-6 overflow-y-auto">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-6 py-3 transition-all duration-200"
              style={{
                backgroundColor: active ? "rgba(166,137,77,0.15)" : "transparent",
                borderLeft: active ? "2px solid #C9A96E" : "2px solid transparent",
                color: active ? "#C9A96E" : "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                textDecoration: "none",
              }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-6 py-6 border-t" style={{ borderColor: "rgba(166,137,77,0.2)" }}>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 transition-opacity hover:opacity-60 w-full"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body), Georgia, serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          <LogOut className="w-4 h-4" />
          Abmelden
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: "#F5F0EA" }}>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col shrink-0" style={{ width: "240px" }}>
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[200] flex lg:hidden">
          <div className="flex flex-col shrink-0" style={{ width: "240px" }}>
            <Sidebar />
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header
          className="flex items-center justify-between px-6 py-4 shrink-0"
          style={{ backgroundColor: "#fff", borderBottom: "1px solid rgba(166,137,77,0.15)" }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-1.5 transition-opacity hover:opacity-60"
            style={{ color: "#3D3229" }}
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1
            className="text-sm font-medium"
            style={{ fontFamily: "var(--font-body), Georgia, serif", color: "#3D3229", textTransform: "uppercase", letterSpacing: "0.12em" }}
          >
            {navItems.find((n) => n.href === pathname)?.label || "Admin"}
          </h1>
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.15em] transition-opacity hover:opacity-60"
            style={{ color: "#A6894D", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            ← Website
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
