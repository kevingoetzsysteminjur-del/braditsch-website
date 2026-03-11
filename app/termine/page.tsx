import type { Metadata } from "next";
import TermineClient from "./TermineClient";

export const metadata: Metadata = {
  title: "Termine & Veranstaltungen | Antonia Braditsch",
  description:
    "Aktuelle Termine und Veranstaltungen von Antonia Braditsch: Training Intuition & Hellsinne, Heilsames Singen und Einzelbehandlungen im VIVARIUM Lichtenwörth.",
};

export default function TerminePage() {
  return <TermineClient />;
}
