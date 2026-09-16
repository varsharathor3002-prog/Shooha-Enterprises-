import { FaStar, FaRegHeart, FaRegCommentDots } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { siteConfig } from "../../data/siteConfig";
import { products } from "../../data/products";

function formatPrice(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export default function ProductCategories() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Now Selling"
          title="Genuine Electronics, Straight From Us"
          subtitle="Laptops, ACs, CCTV cameras, tablets and TVs — trusted brands, fair prices, and the same reliable after-sales support that's kept our repair customers coming back for years."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const discount = Math.round(
              ((product.mrp - product.price) / product.mrp) * 100
            );
            const enquiryLink = `${siteConfig.social.whatsappLink}?text=${encodeURIComponent(
              `Hi, I'm interested in the ${product.title}. Please share more details.`
            )}`;

            return (
              <div
                key={product.id}
                className="card-hover rounded-2xl bg-white border border-slate-100 overflow-hidden flex flex-col shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-slate-50 flex items-center justify-center p-5">
                  <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                    {discount}% OFF
                  </span>
                  <span className="absolute top-3 right-3 z-10 bg-navy-950/90 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {product.tag}
                  </span>
                  <button
                    type="button"
                    aria-label="Save to wishlist"
                    className="absolute bottom-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-navy-800 shadow hover:bg-white hover:text-red-500 transition-colors"
                  >
                    <FaRegHeart />
                  </button>
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-4 flex flex-col gap-2 border-t border-slate-100 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                    {product.brand}
                  </span>
                  <h3 className="text-sm font-bold text-navy-950 leading-snug line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 bg-emerald-600 text-white text-[11px] font-bold px-1.5 py-0.5 rounded">
                      {product.rating} <FaStar className="text-[10px]" />
                    </span>
                    <span className="text-xs text-slate-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-auto">
                    <span className="text-lg font-extrabold text-navy-950">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      {formatPrice(product.mrp)}
                    </span>
                  </div>

                  <a
                    href={enquiryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-950 text-white text-sm font-semibold py-2.5 hover:bg-navy-800 transition-colors"
                  >
                    <FaRegCommentDots />
                    Enquire Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
