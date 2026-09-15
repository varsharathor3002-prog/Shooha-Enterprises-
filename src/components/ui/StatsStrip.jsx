import Container from "./Container";

// NOTE: Update these figures with your actual numbers before going live.
const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "1000+", label: "Devices Repaired" },
  { value: "All", label: "Major Brands Serviced" },
  { value: "24-48h", label: "Average Turnaround" },
];

export default function StatsStrip() {
  return (
    <section className="bg-navy-950 py-14">
      <Container className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-brand-yellow">{s.value}</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">{s.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
