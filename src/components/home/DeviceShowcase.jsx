import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { devices } from "../../data/devices";

const TAG_STYLES = {
  Laptop: "bg-brand-blue/10 text-brand-blue",
  Desktop: "bg-navy-800/10 text-navy-800",
  Printer: "bg-brand-yellow-dark/10 text-brand-yellow-dark",
};

export default function DeviceShowcase() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Devices We Repair"
          title="Every Device, Every Brand"
          subtitle="A quick look at the kind of laptops, desktops and printers that come through our workshop every day."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {devices.map(({ id, image, title, tag }) => (
            <div
              key={id}
              className="card-hover rounded-2xl bg-white border border-slate-100 overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-5">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 border-t border-slate-100">
                <span
                  className={`self-start text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${TAG_STYLES[tag]}`}
                >
                  {tag}
                </span>
                <h3 className="text-sm font-bold text-navy-950 leading-snug">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
