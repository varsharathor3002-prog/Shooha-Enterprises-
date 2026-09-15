import { FaSearch, FaFileInvoiceDollar, FaBoxOpen } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const STEPS = [
  { icon: FaSearch, title: "Diagnose", text: "Free initial inspection to pinpoint the exact fault." },
  { icon: FaFileInvoiceDollar, title: "Quote", text: "Transparent, upfront estimate before any work begins." },
  { icon: FaScrewdriverWrench, title: "Repair", text: "Precision repair using genuine, quality-tested parts." },
  { icon: FaBoxOpen, title: "Deliver", text: "Tested device delivered back to you, ready to use." },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Process"
          title="Simple, Transparent Repair Process"
          subtitle="From drop-off to delivery, we keep you informed every step of the way."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center gap-4">
              <div className="relative">
                <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-950 text-brand-yellow text-2xl">
                  <Icon />
                </span>
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-7 h-7 rounded-full bg-brand-yellow text-navy-950 text-xs font-extrabold">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-navy-950">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-[220px]">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
