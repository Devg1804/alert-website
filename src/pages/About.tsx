import { Shield, Award, Users, Factory, Target, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import brandImage from "@/assets/aalart-brand.jpg";

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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${brandImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              About Aalart Locks
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-4">
              50 Years of Excellence in Security Solutions
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              From humble beginnings in 1975 to becoming India's most trusted lock manufacturer,
              our journey has been driven by innovation, quality, and an unwavering commitment to security.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story with Image */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#1C396A] to-[#E36E4A] bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1975, Aalart Locks began as a small workshop with a big vision: to provide 
                  every Indian home and business with world-class security solutions at affordable prices.
                </p>
                <p>
                  Over five decades, we've evolved from traditional lock-making to pioneering smart security 
                  systems, while never compromising on the craftsmanship that made us trusted by millions.
                </p>
                <p>
                  Today, Aalart stands as a symbol of reliability and innovation, combining traditional 
                  expertise with cutting-edge technology to protect what matters most to our customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={brandImage} 
                alt="Aalart Brand" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#E36E4A] text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">50+</p>
                <p className="text-sm">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E36E4A] to-[#1C396A] hidden md:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-6 md:gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E36E4A] to-[#F59E0B] flex items-center justify-center text-white font-bold shadow-lg z-10">
                        {milestone.year}
                      </div>
                    </div>
                    <Card className="flex-1 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Manufacturing Excellence</h2>
            <p className="text-lg text-muted-foreground">
              State-of-the-art facilities combined with decades of expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: "Modern Facilities", desc: "ISO-certified manufacturing units with advanced machinery" },
              { icon: CheckCircle, title: "Quality Control", desc: "Rigorous testing at every stage of production" },
              { icon: Shield, title: "Certified Standards", desc: "Meeting international security and quality standards" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1C396A]/10 to-[#E36E4A]/10 rounded-2xl mb-6">
                      <Icon className="h-8 w-8 text-[#1C396A]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#E36E4A]/20">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E36E4A]/10 to-[#F59E0B]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-[#E36E4A]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
