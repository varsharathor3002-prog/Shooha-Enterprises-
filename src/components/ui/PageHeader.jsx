import { Link } from "react-router-dom";
import Container from "./Container";

export default function PageHeader({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden circuit-bg py-16 sm:py-20">
      <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-blue/30 blur-3xl" />
      <Container className="relative flex flex-col gap-3 text-center items-center">
        {eyebrow && (
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-yellow">
            {eyebrow}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">{title}</h1>
        {subtitle && <p className="text-slate-300 max-w-2xl">{subtitle}</p>}
        <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
          <Link to="/" className="hover:text-brand-yellow transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-medium">{crumb}</span>
        </div>
      </Container>
    </section>
  );
}
