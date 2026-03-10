"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  title: string;
}

export default function AudioPlayer({ title }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0-100
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setPlaying(false);
            return 0;
          }
          return p + (100 / 30); // 30 seconds total
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing]);

  const togglePlay = () => {
    if (progress >= 100) setProgress(0);
    setPlaying(!playing);
  };

  const timeStr = () => {
    const elapsed = Math.floor((progress / 100) * 30);
    const s = elapsed % 60;
    return `0:${s.toString().padStart(2, "0")} / 0:30`;
  };

  // Waveform bars - 20 bars
  const bars = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div
      className="p-5"
      style={{ border: "1px solid rgba(166,137,77,0.25)", backgroundColor: "var(--sage)" }}
    >
      <p
        className="text-[10px] uppercase tracking-[0.2em] mb-4"
        style={{ color: "var(--gold)", fontFamily: "var(--font-body), Georgia, serif" }}
      >
        30-Sekunden Vorschau
      </p>

      <div className="flex items-center gap-4">
        {/* Play button */}
        <button
          onClick={togglePlay}
          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-opacity hover:opacity-70"
          style={{ backgroundColor: "var(--gold)" }}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing
            ? <Pause className="w-4 h-4 text-white" fill="white" />
            : <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
          }
        </button>

        {/* Waveform + progress */}
        <div className="flex-1">
          {/* Waveform bars */}
          <div className="flex items-center gap-[2px] mb-2 h-6">
            {bars.map((i) => {
              const heights = [60, 80, 40, 100, 70, 50, 90, 60, 75, 45, 85, 55, 70, 95, 50, 65, 80, 40, 70, 55];
              const height = heights[i];
              const filled = playing && (i / bars.length) * 100 <= progress;
              return (
                <div
                  key={i}
                  className="rounded-full flex-1 transition-all duration-150"
                  style={{
                    height: `${height}%`,
                    backgroundColor: filled ? "var(--gold)" : "rgba(166,137,77,0.25)",
                    animation: playing ? `pulseDot ${0.8 + (i % 3) * 0.2}s ease-in-out infinite alternate` : "none",
                  }}
                />
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="relative h-px w-full" style={{ backgroundColor: "rgba(166,137,77,0.2)" }}>
            <div
              className="absolute left-0 top-0 h-full transition-all duration-1000"
              style={{ width: `${progress}%`, backgroundColor: "var(--gold)" }}
            />
          </div>
        </div>

        {/* Time */}
        <span
          className="text-xs shrink-0 tabular-nums"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}
        >
          {timeStr()}
        </span>
      </div>
    </div>
  );
}
