import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMicrochip, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${
      isActive
        ? "text-brand-blue"
        : "text-navy-900/80 hover:text-brand-blue"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md shadow-black/5"
          : "bg-white"
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy-950 text-brand-yellow text-xl shadow-md shadow-navy-950/20">
            <FaMicrochip />
          </span>
          <span className="leading-tight">
            <span className="block text-lg sm:text-xl font-extrabold text-navy-950 tracking-tight">
              Shooha Enterprises
            </span>
            <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
              Chip Level Repair Experts
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:+91${siteConfig.phone}`}
            className="flex items-center gap-2 text-sm font-bold text-navy-950"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-yellow/20 text-navy-950">
              <FaPhoneAlt className="text-sm" />
            </span>
            +91 {siteConfig.phone}
          </a>
          <Button to="/contact" variant="primary" size="sm">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-navy-950 text-xl"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-lg text-sm font-semibold ${
                    isActive ? "bg-brand-blue/10 text-brand-blue" : "text-navy-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-3 mt-3">
              <Button href={`tel:+91${siteConfig.phone}`} variant="navyOutline" className="flex-1">
                Call Now
              </Button>
              <Button to="/contact" variant="primary" className="flex-1" onClick={() => setOpen(false)}>
                Get a Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
