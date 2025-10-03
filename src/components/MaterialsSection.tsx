const MaterialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-muted rounded-2xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop" 
                  alt="Material sample" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-muted rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop" 
                  alt="Material sample" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-12">
              <div className="bg-muted rounded-2xl overflow-hidden aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=533&fit=crop" 
                  alt="Material sample" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-[hsl(var(--brand-orange))] uppercase tracking-[3px] text-lg font-semibold">
              Materials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Very serious materials for making furniture
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
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

export default MaterialsSection;