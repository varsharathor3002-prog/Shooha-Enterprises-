import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden circuit-bg py-16 sm:py-20">
      <div className="pointer-events-none absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-brand-blue/30 blur-3xl" />
      <Container className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Got a device that needs fixing?
          </h2>
          <p className="text-slate-300 max-w-xl">
            Call us or drop a WhatsApp message — get a free diagnosis and honest quote today.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href={`tel:+91${siteConfig.phone}`} variant="primary" icon={FaPhoneAlt}>
            Call +91 {siteConfig.phone}
          </Button>
          <Button href={siteConfig.social.whatsappLink} variant="outline" icon={FaWhatsapp}>
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
