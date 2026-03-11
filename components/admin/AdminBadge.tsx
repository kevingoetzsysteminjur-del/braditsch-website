"use client";

import Link from "next/link";
import { useAdmin } from "@/hooks/useAdmin";
import { Settings } from "lucide-react";

export default function AdminBadge() {
  const { isAdmin } = useAdmin();
  if (!isAdmin) return null;

  return (
    <Link
      href="/admin"
      className="fixed bottom-6 left-6 z-[150] flex items-center gap-2 px-3 py-2 transition-all duration-200 hover:opacity-90 hover:scale-105"
      style={{
        backgroundColor: "#2A211A",
        border: "1px solid rgba(166,137,77,0.4)",
        borderRadius: "6px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      <Settings className="w-3 h-3" style={{ color: "#C9A96E" }} />
      <span style={{
        fontFamily: "var(--font-body), Georgia, serif",
        fontSize: "9px",
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        color: "#C9A96E",
      }}>
        Admin-Modus
      </span>
    </Link>
  );
}
