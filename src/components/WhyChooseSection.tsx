const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-0 relative">
            <div className="bg-muted rounded-2xl p-8 md:p-12 flex items-end">
              <img 
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=700&fit=crop" 
                alt="Modern chair" 
                className="w-full h-auto object-contain relative z-10 transform translate-x-12"
              />
            </div>
            <div className="bg-muted rounded-2xl mt-24 h-64"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 lg:pl-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
            </p>
            <button className="flex items-center gap-3 text-[hsl(var(--brand-orange))] font-medium hover:gap-4 transition-all">
              More Info
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="w-12 h-6">
                <path d="M0 12H46M46 12L35 1M46 12L35 23" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;