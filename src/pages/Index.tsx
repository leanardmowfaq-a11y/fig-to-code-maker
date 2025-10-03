import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import WhyChooseSection from "@/components/WhyChooseSection";
import MaterialsSection from "@/components/MaterialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ProductGrid />
        <WhyChooseSection />
        <ProductGrid />
        <MaterialsSection />
      </main>
    </div>
  );
};

export default Index;
