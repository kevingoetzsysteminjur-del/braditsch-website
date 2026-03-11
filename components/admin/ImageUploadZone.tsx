"use client";

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";

interface UploadFile {
  file: File;
  preview: string;
  progress: number;
  done: boolean;
  error: boolean;
}

interface ImageUploadZoneProps {
  onUpload: (files: File[]) => Promise<void>;
  uploading?: boolean;
}

async function compressImage(file: File, maxWidth = 1200): Promise<File> {
  return new Promise((resolve) => {
    const img = new window.Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      let { width, height } = img;
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        if (!blob) return resolve(file);
        resolve(new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" }));
      }, "image/jpeg", 0.85);
    };
    img.src = url;
  });
}

export default function ImageUploadZone({ onUpload, uploading }: ImageUploadZoneProps) {
  const [dragging, setDragging] = useState(false);
  const [queue, setQueue] = useState<UploadFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: File[]) => {
    const imageFiles = files.filter((f) => f.type.startsWith("image/"));
    if (!imageFiles.length) return;

    const newItems: UploadFile[] = imageFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      progress: 0,
      done: false,
      error: false,
    }));
    setQueue((prev) => [...prev, ...newItems]);

    // Compress then upload
    const compressed = await Promise.all(imageFiles.map((f) => compressImage(f)));
    await onUpload(compressed);

    setQueue((prev) =>
      prev.map((item) => {
        const match = imageFiles.find((f) => f.name === item.file.name);
        if (match) return { ...item, progress: 100, done: true };
        return item;
      })
    );
  };

  const removeItem = (idx: number) => {
    setQueue((prev) => {
      URL.revokeObjectURL(prev[idx].preview);
      return prev.filter((_, i) => i !== idx);
    });
  };

  return (
    <div className="space-y-3">
      {/* Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(Array.from(e.dataTransfer.files));
        }}
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-3 py-8 px-4 cursor-pointer transition-all duration-200"
        style={{
          border: `2px dashed ${dragging ? "#A6894D" : "rgba(166,137,77,0.35)"}`,
          backgroundColor: dragging ? "rgba(166,137,77,0.05)" : "var(--bg)",
        }}
      >
        <Upload className="w-6 h-6" style={{ color: "rgba(166,137,77,0.6)" }} />
        <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>
          Bilder hierher ziehen oder klicken zum Auswählen
          <br />
          <span style={{ fontSize: "10px", opacity: 0.6 }}>Werden automatisch auf max. 1200px komprimiert</span>
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(Array.from(e.target.files || []))}
        />
      </div>

      {/* Preview Queue */}
      {queue.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {queue.map((item, i) => (
            <div key={i} className="relative" style={{ aspectRatio: "1" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.preview} alt="" className="w-full h-full object-cover" style={{ borderRadius: "4px" }} />
              {/* Progress overlay */}
              {!item.done && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.45)", borderRadius: "4px" }}>
                  <div className="w-3/4">
                    <div style={{ height: "3px", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "2px" }}>
                      <div style={{ width: `${item.progress}%`, height: "100%", backgroundColor: "#C9A96E", borderRadius: "2px", transition: "width 0.3s ease" }} />
                    </div>
                  </div>
                </div>
              )}
              {/* Done check */}
              {item.done && (
                <div className="absolute top-1 right-1">
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "rgba(60,140,80,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "#fff", fontSize: "9px" }}>✓</span>
                  </div>
                </div>
              )}
              <button
                onClick={() => removeItem(i)}
                className="absolute top-1 left-1 flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.6)" }}
              >
                <X className="w-2.5 h-2.5" style={{ color: "#fff" }} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { compressImage };
