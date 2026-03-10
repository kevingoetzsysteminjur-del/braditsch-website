function ImagePlaceholder({ className = "", variant = "mixed" }: { className?: string; variant?: "gold" | "lila" | "creme" | "mixed" | "goldlila" | "cremegold" | "lilacreme" | "deepmixed" }) {
  const gradients: Record<string, string> = {
    gold: "bg-gradient-to-br from-[#F5E6C8] via-[#E8C97A] to-[#C9A44A]",
    lila: "bg-gradient-to-br from-[#E8DEFF] via-[#C4A8E0] to-[#9B7CB9]",
    creme: "bg-gradient-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#EAD9C0]",
    mixed: "bg-gradient-to-br from-[#F5E6C8] via-[#D4B8E8] to-[#9B7CB9]",
    goldlila: "bg-gradient-to-tl from-[#C9A44A] via-[#D4B8E8] to-[#9B7CB9]",
    cremegold: "bg-gradient-to-br from-[#EAD9C0] via-[#E8C97A] to-[#C9A44A]",
    lilacreme: "bg-gradient-to-tr from-[#9B7CB9] via-[#C4A8E0] to-[#FFF8F0]",
    deepmixed: "bg-gradient-to-br from-[#C9A44A] via-[#9B7CB9] to-[#4A3060]",
  };
  return <div className={`${gradients[variant] || gradients.mixed} ${className}`} />;
}

const items = [
  { variant: "gold", size: "col-span-2 row-span-2" },
  { variant: "lila", size: "col-span-1 row-span-1" },
  { variant: "mixed", size: "col-span-1 row-span-1" },
  { variant: "creme", size: "col-span-1 row-span-2" },
  { variant: "goldlila", size: "col-span-1 row-span-1" },
  { variant: "cremegold", size: "col-span-1 row-span-1" },
  { variant: "lilacreme", size: "col-span-2 row-span-1" },
  { variant: "deepmixed", size: "col-span-1 row-span-1" },
];

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5E6C8] via-[#D4B8E8] to-[#9B7CB9] py-24 text-center">
        <h1
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Galerie
        </h1>
        <p className="text-white/90 text-xl">Einblicke in meine Praxis & Angebote</p>
      </section>

      {/* Bento Grid */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-stone-500 text-lg mb-12">
            Die echten Fotos folgen bald – hier siehst du Platzhalter in den Farben der Praxis.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {items.map((item, i) => (
              <ImagePlaceholder
                key={i}
                variant={item.variant as "gold" | "lila" | "creme" | "mixed"}
                className={`rounded-3xl shadow-md ${item.size}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
