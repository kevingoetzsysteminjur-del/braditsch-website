function ImagePlaceholder({ className = "", variant = "mixed" }: { className?: string; variant?: "gold" | "lila" | "creme" | "mixed" | "goldlila" | "cremegold" | "lilacreme" | "deepmixed" }) {
  const gradients: Record<string, string> = {
    gold: "bg-gradient-to-br from-[#F5E6C8] via-[#E8C97A] to-[#C9A44A]",
    lila: "bg-gradient-to-br from-[#FAF0DC] via-[#E8CC88] to-[#B8860B]",
    creme: "bg-gradient-to-br from-[#FFF8F0] via-[#F5EDE0] to-[#EAD9C0]",
    mixed: "bg-gradient-to-br from-[#F5E6C8] via-[#E8D0A0] to-[#B8860B]",
    goldlila: "bg-gradient-to-tl from-[#C9A44A] via-[#E8D0A0] to-[#B8860B]",
    cremegold: "bg-gradient-to-br from-[#EAD9C0] via-[#E8C97A] to-[#C9A44A]",
    lilacreme: "bg-gradient-to-tr from-[#B8860B] via-[#E8CC88] to-[#FFF8F0]",
    deepmixed: "bg-gradient-to-br from-[#C9A44A] via-[#B8860B] to-[#4A3060]",
  };
  return <div className={`${gradients[variant] || gradients.mixed} ${className}`} />;
}

const items = [
  { variant: "gold", size: "col-span-2 row-span-2" },
  { variant: "warm", size: "col-span-1 row-span-1" },
  { variant: "sand", size: "col-span-1 row-span-1" },
  { variant: "creme", size: "col-span-1 row-span-2" },
  { variant: "gold", size: "col-span-1 row-span-1" },
  { variant: "cremegold", size: "col-span-1 row-span-1" },
  { variant: "creme", size: "col-span-2 row-span-1" },
  { variant: "rose", size: "col-span-1 row-span-1" },
];

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F5E6C8] via-[#E8D0A0] to-[#B8860B] py-24 text-center">
        <h1
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
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
