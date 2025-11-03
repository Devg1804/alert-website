import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonial from "@/components/Testimonial";
import CatalogueDownload from "@/components/CatalogueDownload";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Award, Users, Lock, Smartphone, Wrench, Star } from "lucide-react";
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

      {/* Product Categories Showcase */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Product Range
            </h2>
            <p className="text-lg text-muted-foreground">
              From traditional locks to smart security systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Smart Locks", icon: Smartphone, color: "from-blue-500 to-cyan-500" },
              { name: "Padlocks", icon: Lock, color: "from-orange-500 to-red-500" },
              { name: "Door Hardware", icon: Wrench, color: "from-purple-500 to-pink-500" },
              { name: "Premium Series", icon: Star, color: "from-amber-500 to-yellow-500" },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to="/products">
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <CardContent className="p-6">
                      <div className={`w-full h-32 bg-gradient-to-br ${category.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-center">{category.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

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
