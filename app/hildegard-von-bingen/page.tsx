import type { Metadata } from "next";
import HildegardClient from "./HildegardClient";

export const metadata: Metadata = {
  title: "Hildegard von Bingen | Antonia Braditsch",
  description:
    "Die faszinierende Welt der Hildegard von Bingen – Prophetin, Komponistin, Heilkundige und Mystikerin. Szenische Lesungen und Workshops mit Antonia Braditsch in Lichtenwörth.",
};

export default function HildegardPage() {
  return <HildegardClient />;
}
