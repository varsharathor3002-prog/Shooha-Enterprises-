import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import CTASection from "../components/home/CTASection";
import { services } from "../data/services";
import { siteConfig } from "../data/siteConfig";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Complete Device Repair Services"
        subtitle="Detailed, transparent repair solutions for laptops, desktops, printers and monitors — backed by chip-level expertise."
        crumb="Services"
      />

      <section className="py-20 sm:py-24 bg-white">
        <Container className="flex flex-col gap-16">
          {services.map(({ id, icon: Icon, title, description, points }, index) => (
            <div
              key={id}
              id={id}
              className="scroll-mt-24 grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-950 text-brand-yellow text-2xl shrink-0">
                    <Icon />
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">{title}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
                <div className="flex flex-wrap gap-3">
                  <Button href={`tel:+91${siteConfig.phone}`} variant="primary" size="sm" icon={FaPhoneAlt}>
                    Call Now
                  </Button>
                  <Button href={siteConfig.social.whatsappLink} variant="navyOutline" size="sm" icon={FaWhatsapp}>
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className={`rounded-2xl bg-slate-50 border border-slate-100 p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue mb-4">
                  What We Cover
                </h3>
                <ul className="flex flex-col gap-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                      <FaCheckCircle className="mt-0.5 text-brand-blue shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
