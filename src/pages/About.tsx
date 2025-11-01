import { Shield, Award, Users, Factory, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  { year: "1975", title: "Foundation", description: "Started as a small workshop in Aligarh" },
  { year: "1990", title: "Expansion", description: "Opened first manufacturing facility" },
  { year: "2005", title: "Innovation", description: "Launched first smart lock technology" },
  { year: "2015", title: "Recognition", description: "Became India's leading lock manufacturer" },
  { year: "2025", title: "Present Day", description: "Serving 1M+ customers across 50+ cities" },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every product is designed with uncompromising security standards"
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Precision engineering and rigorous testing ensure superior quality"
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building trust through reliable products and exceptional service"
  },
  {
    icon: Factory,
    title: "Innovation",
    description: "Continuously evolving with cutting-edge security technology"
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Transparent operations and ethical business practices"
  },
  {
    icon: Heart,
    title: "Commitment",
    description: "Dedicated to protecting what matters most to you"
  }
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Aalart Locks</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Securing India since 1975 with innovative lock solutions
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                What began in 1975 as a modest workshop in Aligarh has grown into one of India's most trusted names in security solutions. For nearly five decades, Aalart Locks has been at the forefront of lock manufacturing, combining traditional craftsmanship with cutting-edge technology.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Our journey has been driven by a simple yet powerful mission: to provide every Indian home and business with reliable, affordable security. From traditional padlocks to smart electronic systems, we've continuously evolved to meet the changing needs of modern India.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, with over 1 million satisfied customers across 50+ cities, we remain committed to innovation, quality, and the trust that generations of families have placed in us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="shrink-0">
                          <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm">
                            {milestone.year}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">45+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Product Variants</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Cities Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
