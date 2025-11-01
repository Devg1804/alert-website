import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lock.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 57, 106, 0.9), rgba(15, 33, 62, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 md:mb-6 animate-fade-in">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
            <span className="text-secondary font-semibold text-sm md:text-base">Premium Security Solutions</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white animate-fade-up leading-tight">
            Next-Gen Lock Solutions
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Innovative and reliable security products for homes and businesses. 
            Trusted by millions since 1975.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
              <Link to="/products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
