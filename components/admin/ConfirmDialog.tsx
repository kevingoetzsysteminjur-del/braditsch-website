interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ message, onConfirm, onCancel }: ConfirmDialogProps) {
  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm p-6"
        style={{ backgroundColor: "var(--bg)", border: "1px solid rgba(166,137,77,0.3)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "14px", color: "var(--text)", marginBottom: "20px", lineHeight: 1.6 }}>
          {message}
        </p>
        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 text-[10px] uppercase tracking-[0.15em] transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#8B3A3A", color: "#fff", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Löschen
          </button>
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 text-[10px] uppercase tracking-[0.15em]"
            style={{ border: "1px solid rgba(166,137,77,0.3)", color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}
