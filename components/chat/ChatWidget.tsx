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
    return "🎶 Zur Klangtherapie biete ich folgende Anwendungen an:\n\n• Soul Sound Healing – ca. 70 Min | 90€\n• Klangliege & Körpermonochord – 50 Min | 75€\n• Kristallpyramide – 40 Min | 60€\n• Klangschalen für Kinder – 30 Min | 49€ (6er Block 270€)\n\nJedes Angebot ist eine ganzheitliche Erfahrung für Körper, Geist und Seele.";
  }
  if (text.match(/stimme|singen|vokal|gesang/)) {
    return "🎵 Zur Stimmarbeit biete ich an:\n\n• Magie der Stimme (Einzelstunde) – 60 Min | 90€\n• Heilsames Singen – Offene Gruppe – jeden 3. Mittwoch, 18:30–20:00 | 25€\n\nDie Stimme ist das älteste Heilinstrument der Menschheit.";
  }
  if (text.match(/medial|geist|vermittl/)) {
    return "✨ In der medialen Arbeit bin ich Vermittlerin zwischen der materiellen und der geistigen Welt. Ich nehme lichtvolle Energien wahr und bringe personalisierte Botschaften zu dir.\n\nFür weitere Infos: antonia@braditsch.at";
  }
  if (text.match(/termin|buchen|buchung|vereinbar/)) {
    return "📅 Du kannst Antonia direkt kontaktieren:\n\n📧 antonia@braditsch.at\n📞 +43 676 7516188\n\nSie freut sich auf deine Nachricht!";
  }
  if (text.match(/preis|kosten|euro|€|wie viel|wieviel/)) {
    return "💛 Alle Preise im Überblick:\n\nKlang:\n• Soul Sound Healing – 90€\n• Klangliege & Monochord – 75€\n• Kristallpyramide – 60€\n• Kinder – 49€ / 6er Block 270€\n\nStimme:\n• Einzelstunde – 90€\n• Gruppe – 25€";
  }
  if (text.match(/adresse|wo|anfahrt|standort|praxis|ort/)) {
    return "📍 Die Praxis befindet sich im:\n\nVIVARIUM\nAngergasse 7\n2493 Lichtenwörth\nÖsterreich";
  }
  if (text.match(/hildegard/)) {
    return "🌿 Hildegard von Bingen ist ein besonderes Herzensthema! Antonia hält Workshops und szenische Lesungen mit Originalgesängen und mittelalterlichen Instrumenten.\n\nMehr dazu: Vale Retro Podcast & Modern Mystic Music";
  }
  if (text.match(/angebot|leistung|was gibt|was biet/)) {
    return "🌟 Antonia bietet folgende Angebote an:\n\n🎶 Klang – Klangschalen, Gongs, Klangliege, Kristallpyramide\n🎵 Stimme – Einzelstunden & Gruppenabende\n✨ Medialität – Mediale Begleitung\n🎙️ Podcast & Audio Shop\n🌿 Hildegard von Bingen – Workshops & Lesungen";
  }

  return "Danke für deine Frage! 🌿 Für eine persönliche Antwort erreichst du Antonia unter:\n\n📧 antonia@braditsch.at\n📞 +43 676 7516188\n\nSie antwortet so schnell wie möglich!";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Hallo! 🌿 Ich bin der virtuelle Assistent von Antonia Braditsch. Wie kann ich dir helfen?",
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
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] bg-[#FFFAF4] rounded-3xl shadow-2xl border border-[#E8D8C4] flex flex-col overflow-hidden"
          style={{ maxHeight: "520px" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#C9A44A] to-[#B8860B] px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-base" style={{ fontFamily: "var(--font-heading), Georgia, serif" }}>
                Antonia Braditsch
              </p>
              <p className="text-white/80 text-xs">Virtueller Assistent</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/20"
              aria-label="Chat schließen"
            >
              <X className="w-5 h-5" />
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
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-[#B8860B] text-white rounded-br-sm"
                      : "bg-white border border-[#E8D8C4] text-stone-700 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#E8D8C4] rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-2 h-2 bg-[#B8860B] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-[#B8860B] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-[#B8860B] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
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
                    className="text-xs bg-[#F5EDE0] hover:bg-[#E8D8C4] text-stone-700 font-medium px-3 py-2 rounded-xl border border-[#E8D8C4] transition-colors min-h-[36px]"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#E8D8C4] p-3 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Deine Frage..."
              className="flex-1 bg-[#FFF8F0] border border-[#E8D8C4] rounded-xl px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40"
            />
            <button
              onClick={() => sendMessage(input)}
              className="bg-[#B8860B] hover:bg-[#9A7009] text-white rounded-xl p-2.5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-16 h-16 bg-[#B8860B] hover:bg-[#9A7009] text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Chat öffnen"
      >
        {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </>
  );
}
