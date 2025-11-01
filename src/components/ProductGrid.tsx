import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import smartLock from "@/assets/product-smart-lock.jpg";
import padlock from "@/assets/product-padlock.jpg";
import mortise from "@/assets/product-mortise.jpg";
import deadbolt from "@/assets/product-deadbolt.jpg";
import shutter from "@/assets/product-shutter.jpg";
import camera from "@/assets/product-camera.jpg";

const products = [
  {
    name: "Smart Door Lock",
    description: "Modern smart lock with mobile app integration and LED indicators",
    image: smartLock,
  },
  {
    name: "Heavy Duty Padlock",
    description: "Chrome and brass finish for maximum security outdoors",
    image: padlock,
  },
  {
    name: "Mortise Handle",
    description: "Elegant interior door solution with secure mechanism",
    image: mortise,
  },
  {
    name: "Deadbolt Lock",
    description: "Premium deadbolt with gold accents for main entries",
    image: deadbolt,
  },
  {
    name: "Shutter Lock",
    description: "Multi-point locking system for industrial applications",
    image: shutter,
  },
  {
    name: "Security Camera",
    description: "Smart hub with camera for complete home security",
    image: camera,
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of premium security solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
