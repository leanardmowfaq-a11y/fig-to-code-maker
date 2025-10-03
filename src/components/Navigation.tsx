import { ShoppingCart, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-3xl font-serif font-bold text-foreground">HARD</h1>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-muted-foreground transition-colors">
              Shop <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#sale" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              On Sale
            </a>
            <a href="#new" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              New Arrivals
            </a>
            <a href="#brands" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Brands
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
