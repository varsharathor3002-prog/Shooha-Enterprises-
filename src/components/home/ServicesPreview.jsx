import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="What We Repair"
          title="Complete Repair Solutions Under One Roof"
          subtitle="From a single loose connector to a full board-level failure — we diagnose it, explain it, and fix it right."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, icon: Icon, title, short }) => (
            <Link
              key={id}
              to={`/services#${id}`}
              className="card-hover group rounded-2xl border border-slate-100 bg-slate-50/60 p-7 flex flex-col gap-4"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-navy-950 text-brand-yellow text-2xl">
                <Icon />
              </span>
              <h3 className="text-lg font-bold text-navy-950">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{short}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                Learn more
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
