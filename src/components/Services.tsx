import { Atom, Building2, Cog, FlaskConical, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Atom,
      title: "Reactor Technology",
      description: "Next-generation reactor designs with enhanced safety features and improved efficiency for reliable baseload power generation.",
    },
    {
      icon: Building2,
      title: "Plant Construction",
      description: "Full-service nuclear facility development from site selection through commissioning, ensuring on-time and on-budget delivery.",
    },
    {
      icon: Cog,
      title: "Operations & Maintenance",
      description: "Comprehensive O&M services maximizing plant availability and extending operational life cycles safely and efficiently.",
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "State-of-the-art safety and security systems exceeding international standards for ultimate plant protection.",
    },
    {
      icon: FlaskConical,
      title: "Fuel Services",
      description: "Complete nuclear fuel cycle management including enrichment, fabrication, and responsible waste handling solutions.",
    },
    {
      icon: Zap,
      title: "Grid Integration",
      description: "Advanced solutions for seamless integration of nuclear power into modern electrical grids with smart load following.",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
            Comprehensive Nuclear Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From cutting-edge reactor technology to complete lifecycle management, 
            we deliver integrated nuclear energy solutions for a sustainable future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
