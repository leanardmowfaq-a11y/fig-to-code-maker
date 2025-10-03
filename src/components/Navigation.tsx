import { ShoppingCart, Search, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-20 py-6">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-foreground">HARD</h1>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-1 text-base font-normal hover:text-muted-foreground transition-colors">
              Shop <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#sale" className="text-base font-normal hover:text-muted-foreground transition-colors">
              On Sale
            </a>
            <a href="#new" className="text-base font-normal hover:text-muted-foreground transition-colors">
              New Arrivals
            </a>
            <a href="#brands" className="text-base font-normal hover:text-muted-foreground transition-colors">
              Brands
            </a>
          </div>

          {/* Search Bar and Actions */}
          <div className="flex items-center gap-4 flex-1 justify-end max-w-md">
            <div className="hidden md:flex items-center gap-2 bg-muted rounded-full px-4 py-3 flex-1 shadow-sm">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search for products..." 
                className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-secondary md:hidden">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <User className="w-5 h-5" />
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
