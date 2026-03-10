"use client";

import { ShoppingCart, Check } from "lucide-react";
import { useCart, CartItem } from "@/context/CartContext";

export default function AddToCartButtonClient({ product }: { product: CartItem }) {
  const { addItem, items, setCartOpen } = useCart();
  const inCart = items.some((i) => i.slug === product.slug);

  return (
    <button
      onClick={() => {
        addItem(product);
        setCartOpen(true);
      }}
      className="inline-flex items-center gap-2 px-8 py-3.5 text-[11px] uppercase tracking-[0.18em] transition-all duration-300"
      style={{
        fontFamily: "var(--font-body), Georgia, serif",
        backgroundColor: inCart ? "var(--gold)" : "transparent",
        border: "1px solid var(--gold)",
        color: inCart ? "#fff" : "var(--gold)",
      }}
    >
      {inCart ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
      {inCart ? "Im Warenkorb" : "In den Warenkorb"}
    </button>
  );
}
