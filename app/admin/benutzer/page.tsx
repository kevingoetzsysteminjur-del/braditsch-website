"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Mail, Calendar } from "lucide-react";

type UserProfile = {
  id: string;
  email: string;
  created_at: string;
  full_name?: string;
};

const DEMO_USERS: UserProfile[] = [
  { id: "u1", email: "maria.huber@gmail.com", full_name: "Maria Huber", created_at: "2026-01-15T10:22:00Z" },
  { id: "u2", email: "thomas.wagner@web.at", full_name: "Thomas Wagner", created_at: "2026-02-03T08:45:00Z" },
  { id: "u3", email: "sabine.mayer@outlook.com", full_name: "Sabine Mayer", created_at: "2026-02-18T14:10:00Z" },
  { id: "u4", email: "peter.steinbauer@gmx.at", full_name: "Peter Steinbauer", created_at: "2026-03-01T09:30:00Z" },
  { id: "u5", email: "anna.koller@icloud.com", full_name: "Anna Koller", created_at: "2026-03-07T16:55:00Z" },
  { id: "u6", email: "gerhard.fuchs@aon.at", full_name: "Gerhard Fuchs", created_at: "2026-03-12T11:20:00Z" },
];

const labelStyle = {
  fontFamily: "var(--font-body), Georgia, serif",
  fontSize: "9px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.18em",
  color: "#A6894D",
};

export default function AdminBenutzerPage() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
      setUsers(data && data.length > 0 ? data : DEMO_USERS);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "1.6rem", fontWeight: 300, color: "#3D3229" }}>
          Benutzer
        </h2>
        <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#7A6B5E" }}>
          {users.length} registrierte Benutzer
        </span>
      </div>

      <div style={{ backgroundColor: "#fff", border: "1px solid rgba(166,137,77,0.15)" }}>
        {loading ? (
          <div className="p-10 text-center" style={{ color: "#7A6B5E", fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px" }}>Laden…</div>
        ) : (
          <div>
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_160px] gap-4 px-5 py-3 border-b" style={{ borderColor: "rgba(166,137,77,0.15)" }}>
              {["Name", "E-Mail", "Registriert am"].map((h) => (
                <div key={h} style={labelStyle}>{h}</div>
              ))}
            </div>

            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-[1fr_1fr_160px] gap-4 px-5 py-3.5 border-b last:border-0 hover:bg-[#FAFAF8] transition-colors items-center"
                style={{ borderColor: "rgba(166,137,77,0.08)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(166,137,77,0.12)" }}
                  >
                    <span style={{ fontFamily: "var(--font-heading), Georgia, serif", fontSize: "13px", color: "#A6894D" }}>
                      {(user.full_name || user.email).charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "13px", color: "#3D3229" }}>
                    {user.full_name || "—"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 shrink-0" style={{ color: "#A6894D" }} />
                  <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#7A6B5E" }}>
                    {user.email}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 shrink-0" style={{ color: "#A6894D" }} />
                  <span style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "#7A6B5E" }}>
                    {new Date(user.created_at).toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
