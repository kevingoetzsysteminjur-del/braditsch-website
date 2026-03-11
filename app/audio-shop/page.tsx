import type { Metadata } from "next";
import AudioShopClient from "./AudioShopClient";

export const metadata: Metadata = {
  title: "Audio Shop | Vibration Codes | Antonia Braditsch",
  description:
    "Klangmeditationen und Heilfrequenz-Audios von Antonia Braditsch. Sofort verfügbar zum Download – für tiefe Entspannung, Heilung und innere Balance.",
};

export default function AudioShopPage() {
  return <AudioShopClient />;
}
