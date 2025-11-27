import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import brandImage from "@/assets/aalart-brand.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-16">
      {/* Mobile: Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${brandImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6 animate-fade-in">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-[#E36E4A]" />
              <span className="text-[#E36E4A] md:text-foreground font-bold text-sm md:text-base tracking-wider uppercase">
                Since 1975 • Trusted by Millions
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white md:text-foreground animate-fade-up leading-tight">
              India's Most Trusted
              <span className="text-[#E36E4A] block mt-2 bg-gradient-to-r from-[#E36E4A] to-[#F59E0B] bg-clip-text text-transparent">
                Security Solutions
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-100 md:text-muted-foreground mb-6 md:mb-8 animate-fade-up max-w-2xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
              50 years of excellence in manufacturing premium locks and security systems. 
              Combining traditional craftsmanship with cutting-edge technology.
            </p>

            <div className="flex items-center gap-6 mb-6 md:mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 text-white md:text-foreground">
                <Award className="h-5 w-5 text-[#F59E0B]" />
                <span className="text-sm font-semibold">Quality Assured</span>
              </div>
              <div className="h-6 w-px bg-white/30 md:bg-border"></div>
              <div className="flex items-center gap-2 text-white md:text-foreground">
                <Shield className="h-5 w-5 text-[#F59E0B]" />
                <span className="text-sm font-semibold">Made in India</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-[#E36E4A] hover:bg-[#D35E3A] text-white shadow-lg hover:shadow-xl transition-all group">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 md:bg-background text-white md:text-foreground border-white/40 md:border-border hover:bg-white/20 md:hover:bg-accent backdrop-blur-sm">
                <a href="tel:+919412517442">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Full Image (Desktop Only) */}
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={brandImage} 
              alt="Aalart Security Solutions - Premium Locks and Security Systems" 
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
