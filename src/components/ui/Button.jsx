import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-brand-yellow text-navy-950 hover:bg-brand-yellow-dark shadow-lg shadow-brand-yellow/20",
  secondary:
    "bg-white text-navy-900 hover:bg-slate-100 shadow-lg shadow-black/5",
  outline:
    "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  navyOutline:
    "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
};

const SIZES = {
  md: "px-6 py-3 text-sm sm:text-base",
  sm: "px-5 py-2.5 text-sm",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="text-lg" />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
