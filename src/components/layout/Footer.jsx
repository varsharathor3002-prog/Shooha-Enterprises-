import { Link } from "react-router-dom";
import {
  FaMicrochip,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import Container from "../ui/Container";
import { siteConfig } from "../../data/siteConfig";
import { services } from "../../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="circuit-bg text-slate-300">
      <Container className="py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-yellow text-navy-950 text-lg">
              <FaMicrochip />
            </span>
            <span className="text-lg font-extrabold text-white">{siteConfig.name}</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            {siteConfig.tagline}. Trusted by homes and businesses for genuine,
            reliable repair service.
          </p>
          <a
            href={siteConfig.social.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366]"
          >
            <FaWhatsapp className="text-lg" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Our Services", to: "/services" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact Us", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-yellow transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
            Our Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="hover:text-brand-yellow transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-brand-yellow shrink-0" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-brand-yellow shrink-0" />
              <a href={`tel:+91${siteConfig.phone}`}>+91 {siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-brand-yellow shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="break-all">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="mt-1 text-brand-yellow shrink-0" />
              <span>
                {siteConfig.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Proprietor: <span className="text-slate-200 font-medium">{siteConfig.owner}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
