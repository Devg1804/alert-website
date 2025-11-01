import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardContent className="p-6 md:p-10">
              <Quote className="h-10 w-10 md:h-12 md:w-12 text-secondary mb-4" />
              <blockquote className="text-lg md:text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
                "The Aalart smart locks have transformed our business security. 
                The mobile app integration is seamless, and the build quality is outstanding. 
                Highly recommend for anyone looking for reliable security solutions."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-primary">MG</span>
                </div>
                <div>
                  <p className="font-bold text-base md:text-lg">Mayank Gupta</p>
                  <p className="text-sm md:text-base text-muted-foreground">Business Owner, Mumbai</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
