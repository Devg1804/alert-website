import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-secondary mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "The Aalart smart locks have transformed our business security. 
                The mobile app integration is seamless, and the build quality is outstanding. 
                Highly recommend for anyone looking for reliable security solutions."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">MG</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Mayank Gupta</p>
                  <p className="text-muted-foreground">Business Owner, Mumbai</p>
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
