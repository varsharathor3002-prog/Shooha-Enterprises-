import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import StatsStrip from "../components/ui/StatsStrip";
import CTASection from "../components/home/CTASection";
import { siteConfig } from "../data/siteConfig";

const VALUES = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    text: "To deliver honest, reliable and affordable chip-level repair service that gets your devices working like new — the first time.",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    text: "To be Mumbai's most trusted name in electronics repair, known for technical expertise and genuine customer care.",
  },
  {
    icon: FaHeart,
    title: "Our Values",
    text: "Transparency, precision and respect for every customer's time and trust — in every repair, big or small.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Who We Are"
        subtitle="Get to know the team behind Shooha Enterprises and what drives us to fix it right, every time."
        crumb="About"
      />

      <section className="py-20 sm:py-24 bg-white">
        <Container className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl circuit-bg flex items-center justify-center shadow-xl">
              <span className="flex items-center justify-center w-28 h-28 rounded-2xl bg-white/10 border border-white/15 text-brand-yellow text-5xl backdrop-blur-sm">
                <FaScrewdriverWrench />
              </span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-navy-950 rounded-2xl px-6 py-4 shadow-xl max-w-[220px]">
              <p className="font-extrabold text-lg leading-tight">{siteConfig.owner}</p>
              <p className="text-xs font-semibold text-navy-800/70 mt-1">Proprietor, {siteConfig.name}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Our Story"
              title="Precision Repair, Built on Trust"
              align="left"
            />
            <p className="text-slate-600 leading-relaxed">
              {siteConfig.name} was founded with a simple goal — to give
              customers an honest alternative to "not repairable" verdicts.
              Under the leadership of {siteConfig.owner}, our workshop
              specializes in chip-level and board-level repair for laptops,
              desktops, printers and LCD/LED monitors.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Where most service centers stop at part-swapping, we go further
              — tracing faults down to individual components, so devices
              that others have written off get a genuine second life. Every
              repair is backed by transparent diagnosis, fair pricing and
              quality-tested parts.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Based in the heart of Mumbai, we serve individuals, offices and
              businesses looking for dependable, professional repair
              services they can count on.
            </p>
          </div>
        </Container>
      </section>

      <StatsStrip />

      <section className="py-20 sm:py-24 bg-slate-50">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision & Values"
            subtitle="The principles that guide every repair that comes through our doors."
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="card-hover rounded-2xl bg-white border border-slate-100 p-8 flex flex-col gap-4 text-center items-center"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-navy-950 text-brand-yellow text-2xl">
                  <Icon />
                </span>
                <h3 className="font-bold text-navy-950 text-lg">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
