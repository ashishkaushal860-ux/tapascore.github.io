import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Industry Leading",
      description: "Recognized globally for safety excellence and operational performance.",
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Operating across 15+ countries with partnerships worldwide.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "5,000+ nuclear professionals and engineers driving innovation.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
              Shaping the Future of 
              <span className="text-gradient-primary"> Clean Energy</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              For over five decades, NucleoCore has been at the forefront of nuclear energy innovation. 
              We combine cutting-edge technology with uncompromising safety standards to deliver 
              reliable, carbon-free power that meets the world's growing energy demands.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our mission is clear: accelerate the global transition to sustainable energy through 
              advanced nuclear solutions that are safer, more efficient, and economically competitive.
            </p>
            <Button variant="hero" size="lg">
              Our Story
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Highlights Grid */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
