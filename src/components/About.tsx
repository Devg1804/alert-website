import { Shield, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Cutting-edge technology for uncompromised protection and peace of mind",
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

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Millions Since 1975
          </h2>
          <p className="text-xl text-muted-foreground">
            What started as a small workshop has grown into one of India's leading 
            security providers, blending traditional craftsmanship with modern technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-card hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
