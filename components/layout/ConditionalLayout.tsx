"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ChatWidget from "@/components/chat/ChatWidget";
import CartSidebar from "@/components/shop/CartSidebar";
import CookieBanner from "@/components/CookieBanner";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ChatWidget />
      <CartSidebar />
      <CookieBanner />
    </>
  );
}
