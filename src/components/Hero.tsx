import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Image */}
          <div className="hidden md:block md:col-span-3">
            <img
              src={heroImage1}
              alt="Modern chair"
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>

          {/* Center Content */}
          <div className="md:col-span-6 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                ULTIMATE
              </h2>
              <h1 className="text-6xl md:text-8xl lg:text-[150px] font-bold tracking-tight leading-none"
                  style={{ WebkitTextStroke: '1px currentColor', WebkitTextFillColor: 'transparent' }}>
                SALE
              </h1>
            </div>
            <Button
              size="lg"
              className="px-12 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              SHOP NOW
            </Button>
          </div>

          {/* Right Image */}
          <div className="hidden md:block md:col-span-3">
            <img
              src={heroImage2}
              alt="Designer furniture"
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Bottom Image Strip */}
        <div className="mt-6 hidden md:flex justify-center">
          <img
            src={heroImage3}
            alt="Furniture collection"
            className="h-[150px] w-[426px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
