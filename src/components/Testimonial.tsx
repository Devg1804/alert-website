import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Mayank Gupta",
    role: "Business Owner",
    location: "Mumbai",
    initials: "MG",
    quote: "The Aalart security locks have transformed our business security. The build quality is outstanding and installation was seamless. Highly recommend for anyone looking for reliable security solutions.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    location: "Delhi",
    initials: "PS",
    quote: "We installed Aalart padlocks across our property and feel much safer. The quality is exceptional and the customer service team was incredibly helpful throughout the process.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Retail Store Manager",
    location: "Bangalore",
    initials: "RK",
    quote: "After trying multiple brands, Aalart locks proved to be the most reliable. The mortise handles are elegant and sturdy. Great value for money and peace of mind.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by thousands of satisfied customers across India
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-2 shadow-lg h-full">
                      <CardContent className="p-6 md:p-8 flex flex-col h-full">
                        <Quote className="h-8 w-8 md:h-10 md:w-10 text-secondary mb-4" />
                        
                        {/* Star Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#E36E4A] text-[#E36E4A]" />
                          ))}
                        </div>

                        <blockquote className="text-base md:text-lg font-medium mb-6 leading-relaxed flex-grow">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-lg md:text-xl font-bold text-primary">
                              {testimonial.initials}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-sm md:text-base">{testimonial.name}</p>
                            <p className="text-xs md:text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
