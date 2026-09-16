import Hero from "../components/home/Hero";
import BrandsStrip from "../components/home/BrandsStrip";
import ServicesPreview from "../components/home/ServicesPreview";
import ProductCategories from "../components/home/ProductCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSteps from "../components/home/ProcessSteps";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <ServicesPreview />
      <ProductCategories />
      <WhyChooseUs />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
