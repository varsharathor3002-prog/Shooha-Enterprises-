import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import BrandsStrip from "../components/home/BrandsStrip";
import CTASection from "../components/home/CTASection";
import { galleryItems } from "../data/gallery";

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Our Expertise in Action"
        subtitle="A look at the kind of repairs and services we handle every day, across devices and brands."
        crumb="Gallery"
      />

      <section className="py-20 sm:py-24 bg-white">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Repair Categories"
            title="What Our Workshop Handles"
            subtitle="Every device is different — here's a glimpse into the range of repairs we specialize in."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map(({ icon: Icon, title, tag }) => (
              <div
                key={title}
                className="card-hover group relative overflow-hidden rounded-2xl circuit-bg aspect-square flex flex-col items-center justify-center gap-4 p-6 text-center"
              >
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-brand-yellow bg-white/10 border border-white/15 rounded-full px-2.5 py-1">
                  {tag}
                </span>
                <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/15 text-brand-yellow text-3xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Icon />
                </span>
                <p className="text-sm font-semibold text-white leading-snug">{title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BrandsStrip />
      <CTASection />
    </>
  );
}
