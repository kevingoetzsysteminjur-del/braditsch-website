import { type LucideIcon } from "lucide-react";

interface AdminBtnProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  variant?: "gold" | "danger" | "dark";
  size?: "sm" | "md";
}

export default function AdminBtn({ icon: Icon, label, onClick, variant = "gold", size = "sm" }: AdminBtnProps) {
  const bg = variant === "danger" ? "rgba(180,60,60,0.85)" : variant === "dark" ? "#2A211A" : "rgba(166,137,77,0.9)";
  const dim = size === "md" ? "32px" : "26px";
  const iconSize = size === "md" ? "w-4 h-4" : "w-3 h-3";

  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      title={label}
      aria-label={label}
      className="flex items-center justify-center transition-all duration-150 hover:scale-110"
      style={{
        width: dim,
        height: dim,
        borderRadius: "50%",
        backgroundColor: bg,
        color: "#fff",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        flexShrink: 0,
      }}
    >
      <Icon className={iconSize} />
    </button>
  );
}
