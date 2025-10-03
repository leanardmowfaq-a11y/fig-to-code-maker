import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: number;
}

const ProductCard = ({ image, category, name, price }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative bg-muted aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <p className="text-muted-foreground text-sm mb-2">{category}</p>
          <h3 className="text-xl font-semibold text-foreground capitalize">{name}</h3>
        </div>

        {/* Price & Add Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-semibold text-foreground">$</span>
            <span className="text-2xl font-bold text-foreground">{price}</span>
          </div>
          <Button
            size="icon"
            className="rounded-full w-12 h-12 hover:scale-110 transition-transform"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
