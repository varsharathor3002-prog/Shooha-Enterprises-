import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBolt, FaTools } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";

const HIGHLIGHTS = [
  { icon: FaShieldAlt, label: "Genuine Parts" },
  { icon: FaBolt, label: "Quick Turnaround" },
  { icon: FaTools, label: "Chip-Level Experts" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden circuit-bg">
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-cyan/20 blur-3xl" />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-yellow backdrop-blur-sm">
              Laptop • Desktop • Printer • LCD / LED Monitor Repair
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white">
              Expert{" "}
              <span className="text-gradient-yellow">Chip-Level Repair</span>{" "}
              for All Your Devices
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl">
              {siteConfig.name} brings precision, board-level diagnostics and
              genuine spares to every repair — fast, reliable and affordable
              service for homes and businesses in Mumbai.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <Button href={`tel:+91${siteConfig.phone}`} variant="primary" icon={FaPhoneAlt}>
                Call +91 {siteConfig.phone}
              </Button>
              <Button href={siteConfig.social.whatsappLink} variant="outline" icon={FaWhatsapp}>
                WhatsApp Us
              </Button>
            </div>

            <div className="flex flex-wrap gap-5 pt-4 justify-center lg:justify-start">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-brand-yellow">
                    <Icon className="text-sm" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex items-center justify-center shadow-2xl shadow-black/30">
              <div className="absolute -top-5 -left-5 rounded-2xl bg-white text-navy-950 px-5 py-3 shadow-xl">
                <p className="text-2xl font-extrabold leading-none">100%</p>
                <p className="text-[11px] font-semibold text-slate-500 mt-1">Genuine Parts</p>
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-brand-yellow text-navy-950 px-5 py-3 shadow-xl">
                <p className="text-2xl font-extrabold leading-none">Quick</p>
                <p className="text-[11px] font-semibold text-navy-800/70 mt-1">Turnaround</p>
              </div>
              <div className="grid grid-cols-2 gap-5 w-full">
                {[FaTools, FaShieldAlt, FaBolt, FaWhatsapp].map((Icon, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl bg-navy-900/60 border border-white/10 flex items-center justify-center text-3xl text-brand-cyan"
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
