"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const quickReplies = [
  "Welche Angebote gibt es?",
  "Preise & Dauer",
  "Termin vereinbaren",
  "Wo ist die Praxis?",
];

function getBotResponse(input: string): string {
  const text = input.toLowerCase();

  if (text.match(/klang|klangschale|gong|klangliege|kristall/)) {
    return "Zur Klangtherapie biete ich folgende Anwendungen an:\n\n• Soul Sound Healing – ca. 70 Min · 90€\n• Klangliege & Körpermonochord – 50 Min · 75€\n• Kristallpyramide – 40 Min · 60€\n• Klangschalen für Kinder – 30 Min · 49€ (6er Block 270€)\n\nJedes Angebot ist eine ganzheitliche Erfahrung für Körper, Geist und Seele.";
  }
  if (text.match(/stimme|singen|vokal|gesang/)) {
    return "Zur Stimmarbeit biete ich an:\n\n• Magie der Stimme (Einzelstunde) – 60 Min · 90€\n• Heilsames Singen – Offene Gruppe – jeden 3. Mittwoch, 18:30–20:00 · 25€\n\nDie Stimme ist das älteste Heilinstrument der Menschheit.";
  }
  if (text.match(/medial|geist|vermittl/)) {
    return "In der medialen Arbeit bin ich Vermittlerin zwischen der materiellen und der geistigen Welt. Ich nehme lichtvolle Energien wahr und bringe personalisierte Botschaften zu dir.\n\nFür weitere Infos: antonia@braditsch.at";
  }
  if (text.match(/termin|buchen|buchung|vereinbar/)) {
    return "Du kannst Antonia direkt kontaktieren:\n\n✉ antonia@braditsch.at\n☏ +43 676 7516188\n\nSie freut sich auf deine Nachricht!";
  }
  if (text.match(/preis|kosten|euro|€|wie viel|wieviel/)) {
    return "Alle Preise im Überblick:\n\nKlang:\n• Soul Sound Healing – 90€\n• Klangliege & Monochord – 75€\n• Kristallpyramide – 60€\n• Kinder – 49€ / 6er Block 270€\n\nStimme:\n• Einzelstunde – 90€\n• Gruppe – 25€";
  }
  if (text.match(/adresse|wo|anfahrt|standort|praxis|ort/)) {
    return "Die Praxis befindet sich im:\n\nVIVARIUM\nAngergasse 7\n2493 Lichtenwörth\nÖsterreich";
  }
  if (text.match(/hildegard/)) {
    return "Hildegard von Bingen ist ein besonderes Herzensthema! Antonia hält Workshops und szenische Lesungen mit Originalgesängen und mittelalterlichen Instrumenten.\n\nMehr dazu: Vale Retro Podcast & Modern Mystic Music";
  }
  if (text.match(/angebot|leistung|was gibt|was biet/)) {
    return "Antonia bietet folgende Angebote an:\n\n· Klang – Klangschalen, Gongs, Klangliege, Kristallpyramide\n· Stimme – Einzelstunden & Gruppenabende\n· Medialität – Mediale Begleitung\n· Podcast & Audio Shop\n· Hildegard von Bingen – Workshops & Lesungen";
  }

  return "Danke für deine Frage! Für eine persönliche Antwort erreichst du Antonia unter:\n\n✉ antonia@braditsch.at\n☏ +43 676 7516188\n\nSie antwortet so schnell wie möglich.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Willkommen. Ich bin der virtuelle Assistent von Antonia Braditsch. Wie kann ich dir helfen?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowQuickReplies(false);
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "bot", text: response },
      ]);
    }, 900);
  }

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 flex flex-col overflow-hidden"
          style={{
            width: "min(340px, calc(100vw - 32px))",
            maxHeight: "70vh",
            backgroundColor: "var(--bg)",
            border: "1px solid rgba(166,137,77,0.25)",
            boxShadow: "0 20px 60px rgba(61,50,41,0.15)",
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ backgroundColor: "var(--sage)", borderBottom: "1px solid rgba(166,137,77,0.2)" }}
          >
            <div>
              <p
                className="text-sm tracking-[0.06em]"
                style={{ fontFamily: "var(--font-heading), Georgia, serif", color: "var(--text)", fontWeight: 400 }}
              >
                Antonia Braditsch
              </p>
              <p className="text-[11px] uppercase tracking-[0.1em] mt-0.5"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body), Georgia, serif" }}>
                Virtueller Assistent
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="transition-opacity hover:opacity-60 p-1"
              aria-label="Chat schließen"
              style={{ color: "var(--text-muted)" }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] px-4 py-3 text-sm leading-relaxed whitespace-pre-line"
                  style={
                    msg.from === "user"
                      ? {
                          backgroundColor: "var(--gold)",
                          color: "#fff",
                          borderRadius: "12px 12px 2px 12px",
                          fontFamily: "var(--font-body), Georgia, serif",
                        }
                      : {
                          backgroundColor: "var(--sage)",
                          color: "var(--text)",
                          borderRadius: "12px 12px 12px 2px",
                          fontFamily: "var(--font-body), Georgia, serif",
                        }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3"
                  style={{ backgroundColor: "var(--sage)", borderRadius: "12px 12px 12px 2px" }}
                >
                  <div className="flex gap-1 items-center h-4">
                    <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                    <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                    <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Replies */}
            {showQuickReplies && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {quickReplies.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="text-[11px] uppercase tracking-[0.06em] px-3 py-2 border transition-all duration-300 hover:opacity-60"
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      color: "var(--text-muted)",
                      borderColor: "rgba(166,137,77,0.3)",
                    }}
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="p-3 flex gap-2"
            style={{ borderTop: "1px solid rgba(166,137,77,0.2)", backgroundColor: "var(--bg)" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Deine Frage…"
              className="flex-1 px-4 py-2.5 text-sm focus:outline-none"
              style={{
                backgroundColor: "var(--sage)",
                border: "1px solid rgba(166,137,77,0.2)",
                color: "var(--text)",
                fontFamily: "var(--font-body), Georgia, serif",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              className="p-2.5 flex items-center justify-center transition-opacity hover:opacity-70"
              style={{ backgroundColor: "var(--gold)", color: "#fff", minWidth: "44px", minHeight: "44px" }}
              aria-label="Senden"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 flex items-center justify-center transition-all duration-300 hover:opacity-80 active:scale-95"
        style={{
          backgroundColor: "var(--gold)",
          color: "#fff",
          boxShadow: "0 8px 30px rgba(166,137,77,0.35)",
        }}
        aria-label={open ? "Chat schließen" : "Chat öffnen"}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </>
  );
}
