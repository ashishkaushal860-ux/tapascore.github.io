import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-secondary to-card border border-border p-12 md:p-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
          
          {/* Animated Ring */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block">
            <div className="w-48 h-48 rounded-full border border-primary/20 animate-float">
              <div className="absolute inset-4 rounded-full border border-primary/30 animate-glow" />
            </div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Power Your Future with{" "}
              <span className="text-gradient-primary">Clean Nuclear Energy?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join the global leaders transitioning to reliable, carbon-free nuclear power. 
              Our team is ready to help you explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
