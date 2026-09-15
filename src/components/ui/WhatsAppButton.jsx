import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../../data/siteConfig";

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.social.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white text-2xl shadow-xl shadow-black/25 hover:scale-110 transition-transform duration-200"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping group-hover:opacity-0" />
      <FaWhatsapp className="relative" />
    </a>
  );
}
