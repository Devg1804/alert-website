import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
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
      <Stats />
      
      {/* Why Choose Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Choose Aalart Locks
            </h2>
            <p className="text-muted-foreground">
              Trusted by millions since 1975, blending traditional craftsmanship with modern technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-card hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Secure Your Space?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Explore our full range of premium security solutions or get in touch for expert consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />
    </div>
  );
};

export default Home;
