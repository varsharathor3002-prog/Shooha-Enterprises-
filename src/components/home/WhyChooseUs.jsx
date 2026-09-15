import { FaMicrochip, FaUserClock, FaHandHoldingUsd, FaCertificate } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const REASONS = [
  {
    icon: FaMicrochip,
    title: "Chip-Level Expertise",
    text: "When basic servicing fails, our engineers go deeper with component-level and micro-soldering repair.",
  },
  {
    icon: FaCertificate,
    title: "Genuine Spare Parts",
    text: "We use quality-tested, genuine parts on every repair, backed by service assurance.",
  },
  {
    icon: FaUserClock,
    title: "Fast & Transparent",
    text: "Free diagnosis, upfront estimates and quick turnaround — no surprises, no hidden costs.",
  },
  {
    icon: FaHandHoldingUsd,
    title: "Affordable Pricing",
    text: "Honest, competitive pricing for individuals, homes and businesses alike.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why Shooha Enterprises"
          title="Repair Service You Can Actually Trust"
          subtitle="Years of hands-on troubleshooting experience, applied to every device that comes through our door."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="card-hover rounded-2xl bg-white border border-slate-100 p-7 flex flex-col gap-4"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue text-xl">
                <Icon />
              </span>
              <h3 className="font-bold text-navy-950">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
