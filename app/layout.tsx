import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Marcellus } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ChatWidget from "@/components/chat/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/shop/CartSidebar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
});

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Antonia Braditsch – Klangtherapie & Heilfrequenzen | Lichtenwörth",
  description:
    "Klangtherapie, Stimmarbeit und mediale Begleitung in Lichtenwörth, Österreich. Antonia Braditsch begleitet Sie auf dem Weg zu innerer Balance und Heilung.",
  keywords: [
    "Klangtherapie",
    "Klangschalen",
    "Heilfrequenzen",
    "Lichtenwörth",
    "Österreich",
    "Antonia Braditsch",
    "Stimmarbeit",
    "Medialität",
    "Hildegard von Bingen",
    "VIVARIUM",
  ],
  authors: [{ name: "Antonia Braditsch" }],
  openGraph: {
    title: "Antonia Braditsch – Klangtherapie & Heilfrequenzen",
    description:
      "Klangtherapie, Stimmarbeit und mediale Begleitung in Lichtenwörth, Österreich.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${lora.variable} ${marcellus.variable}`}>
      <body className="bg-[#FFF8F0] text-stone-900 antialiased">
        <CartProvider>
          <Navbar />
          <main className="page-transition">{children}</main>
          <Footer />
          <ChatWidget />
          <CartSidebar />
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}
