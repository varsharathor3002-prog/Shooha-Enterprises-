import {
  FaLaptopMedical,
  FaDesktop,
  FaPrint,
  FaTv,
  FaMicrochip,
  FaTools,
} from "react-icons/fa";

export const services = [
  {
    id: "laptop-repair",
    icon: FaLaptopMedical,
    title: "Laptop Repair",
    short: "Screen, keyboard, battery, motherboard & chip-level laptop repair.",
    description:
      "From a dead laptop that won't power on to a cracked screen or a failing battery, our technicians diagnose and fix hardware and software issues on all major brands.",
    points: [
      "Motherboard chip-level repair",
      "Screen & keyboard replacement",
      "Battery & charging port repair",
      "Overheating & fan cleaning",
      "OS installation & data recovery",
    ],
  },
  {
    id: "desktop-repair",
    icon: FaDesktop,
    title: "Desktop Repair",
    short: "Complete desktop PC diagnostics, upgrades and hardware repair.",
    description:
      "We service desktop PCs for homes and offices — from power supply and RAM issues to full system assembly, upgrades and virus removal.",
    points: [
      "Power supply & motherboard repair",
      "RAM / HDD / SSD upgrades",
      "Custom PC assembly",
      "Virus & malware removal",
      "Networking & peripheral setup",
    ],
  },
  {
    id: "printer-repair",
    icon: FaPrint,
    title: "Printer Repair",
    short: "Inkjet, laser & multifunction printer repair and servicing.",
    description:
      "Printer not printing, paper jams, faded prints or connectivity issues — we repair and service printers of all major brands for home and office use.",
    points: [
      "Print head & cartridge issues",
      "Paper jam & feeder repair",
      "Drum & toner replacement",
      "Network / Wi-Fi printer setup",
      "Annual maintenance contracts (AMC)",
    ],
  },
  {
    id: "monitor-repair",
    icon: FaTv,
    title: "LCD / LED Monitor Repair",
    short: "Screen, panel, backlight and display repair for LCD/LED monitors.",
    description:
      "Flickering screens, no-display issues, broken panels or backlight failures — we repair LCD/LED monitors and TVs with genuine spare parts.",
    points: [
      "Panel & backlight repair",
      "No display / power issues",
      "Screen flickering & lines",
      "Board-level chip repair",
      "Cable & connector replacement",
    ],
  },
  {
    id: "chip-level-repair",
    icon: FaMicrochip,
    title: "Chip Level Repair",
    short: "Advanced component-level diagnosis and repair for all devices.",
    description:
      "Our specialty — when others say 'not repairable', we dive to the chip level. Precision micro-soldering and component replacement bring dead boards back to life.",
    points: [
      "IC / chip replacement",
      "BGA reballing & reflow",
      "Short-circuit diagnosis",
      "Micro-soldering",
      "Board-level fault tracing",
    ],
  },
  {
    id: "amc-support",
    icon: FaTools,
    title: "AMC & On-Site Support",
    short: "Annual maintenance contracts and on-site support for businesses.",
    description:
      "For offices and businesses, we offer annual maintenance contracts covering laptops, desktops and printers with priority on-site support.",
    points: [
      "Priority on-site visits",
      "Scheduled preventive maintenance",
      "Bulk device servicing",
      "Dedicated support line",
      "Flexible AMC plans",
    ],
  },
];
