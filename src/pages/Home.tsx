import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonial from "@/components/Testimonial";
import CatalogueDownload from "@/components/CatalogueDownload";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Cutting-edge technology for uncompromised protection",
  },
  {
    icon: Award,
    title: "Precision Engineering",
    description: "Meticulous craftsmanship for durability and smooth operation",
  },
  {
    icon: Users,
    title: "Customer Trust",
    description: "Over a million satisfied customers trust our reliability",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-background">
        <FeaturedProducts />
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#1C396A] to-[#E36E4A] bg-clip-text text-transparent">
              Why Choose Aalart Locks
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by millions since 1975, blending traditional craftsmanship with modern technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E36E4A]/10 to-[#F59E0B]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-[#E36E4A]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Stats />


      {/* Catalogue Download Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <CatalogueDownload />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#1C396A] to-[#2C4A7A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Space?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Explore our full range of premium security solutions or get in touch for expert consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group bg-[#E36E4A] hover:bg-[#D35E3A] text-white shadow-lg">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20 backdrop-blur-sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
