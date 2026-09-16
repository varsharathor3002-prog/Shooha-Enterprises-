import PageHeader from "../components/ui/PageHeader";
import ProductCategories from "../components/home/ProductCategories";
import CTASection from "../components/home/CTASection";

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Shop With Us"
        title="Explore Our Products"
        crumb="Products"
      />

      <ProductCategories />

      <CTASection />
    </>
  );
}
