import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import chair1 from "@/assets/chair-1.jpg";
import chair2 from "@/assets/chair-2.jpg";
import chair3 from "@/assets/chair-3.jpg";
import chair4 from "@/assets/chair-4.jpg";

const categories = ["Chair", "Beds", "Sofa", "Lamp"];

const products = [
  { id: 1, image: chair1, category: "Chair", name: "Sakarias Armchair", price: 392 },
  { id: 2, image: chair2, category: "Chair", name: "Baltsar Chair", price: 299 },
  { id: 3, image: chair3, category: "Chair", name: "Anjay Chair", price: 519 },
  { id: 4, image: chair4, category: "Chair", name: "Nyantuy Chair", price: 921 },
];

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Chair");

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Best Selling Product
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-2 bg-secondary rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
