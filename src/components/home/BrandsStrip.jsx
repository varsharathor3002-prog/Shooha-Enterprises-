import Container from "../ui/Container";

const BRANDS = [
  "HP",
  "Dell",
  "Lenovo",
  "Acer",
  "Asus",
  "Apple",
  "Canon",
  "Epson",
  "Brother",
  "Samsung",
  "LG",
  "Sony",
];

export default function BrandsStrip() {
  return (
    <section className="py-12 bg-navy-950 border-y border-white/5">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
          We Service All Major Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-lg sm:text-xl font-extrabold text-slate-500 hover:text-brand-yellow transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
