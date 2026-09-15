import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/contact/ContactForm";
import { siteConfig } from "../data/siteConfig";

const INFO_CARDS = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    lines: [siteConfig.address.line1, siteConfig.address.line2],
  },
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    lines: [`+91 ${siteConfig.phone}`],
    href: `tel:+91${siteConfig.phone}`,
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    lines: [siteConfig.email],
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    lines: [`+91 ${siteConfig.phone}`],
    href: siteConfig.social.whatsappLink,
  },
];

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.social.mapsQuery
  )}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get In Touch"
        subtitle="Have a device that needs attention? Reach out and our team will get back to you quickly."
        crumb="Contact"
      />

      <section className="py-20 sm:py-24 bg-white">
        <Container className="flex flex-col gap-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INFO_CARDS.map(({ icon: Icon, title, lines, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={title}
                  {...(href
                    ? {
                        href,
                        target: href.startsWith("http") ? "_blank" : undefined,
                        rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
                      }
                    : {})}
                  className="card-hover rounded-2xl bg-slate-50 border border-slate-100 p-6 flex flex-col items-center text-center gap-3"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-950 text-brand-yellow text-xl">
                    <Icon />
                  </span>
                  <h3 className="font-bold text-navy-950 text-sm">{title}</h3>
                  <div className="text-sm text-slate-600 leading-relaxed break-words">
                    {lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 flex flex-col gap-6">
              <SectionHeading
                eyebrow="Send an Enquiry"
                title="Tell Us About Your Device"
                subtitle="Fill in the details below and we'll get back to you with a quick diagnosis and quote."
                align="left"
              />
              <ContactForm />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-64 lg:h-[calc(100%-7rem)]">
                <iframe
                  title="Shooha Enterprises Location"
                  src={mapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-2xl bg-navy-950 text-white p-6 flex items-start gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-yellow text-navy-950 text-lg shrink-0">
                  <FaClock />
                </span>
                <div>
                  <h3 className="font-bold mb-2">Business Hours</h3>
                  {siteConfig.hours.map((h) => (
                    <p key={h.day} className="text-sm text-slate-300">
                      <span className="text-slate-100 font-medium">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
