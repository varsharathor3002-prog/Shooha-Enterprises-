export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${
            light ? "text-brand-yellow" : "text-brand-blue"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
