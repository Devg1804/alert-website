import { Award, Users, Package, MapPin } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "45+",
    label: "Years of Excellence",
  },
  {
    icon: Users,
    value: "1M+",
    label: "Happy Customers",
  },
  {
    icon: Package,
    value: "20+",
    label: "Product Variants",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Cities Served",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/20 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
