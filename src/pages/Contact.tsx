import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 94125 17442",
    link: "tel:+919412517442",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aalertindiano.1@gmail.com",
    link: "mailto:aalertindiano.1@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Alert India No. 1, 18/21, Sarai Mishra, Jaiganj, Aligarh, Uttar Pradesh",
    link: "#",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    link: "https://wa.me/919412517442",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Sat: 9:00 AM - 7:00 PM",
    link: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A%0A*Message:*%0A${encodeURIComponent(formData.message)}`;
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/919412517442?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Complete your message in WhatsApp to send it to us.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1C396A] to-[#2C4A7A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Have questions? We're here to help. Reach out to us through any of the channels below 
              and our team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-2 hover:border-primary/20 transition-all">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you soon</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 h-12"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 h-12"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-semibold">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 h-12"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-base bg-[#E36E4A] hover:bg-[#D35E3A]">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-3">Contact Information</h2>
              <p className="text-lg text-muted-foreground">
                Reach out to us through any of these channels. We're available during business hours to assist you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="hover:shadow-lg hover:border-[#E36E4A]/20 transition-all border-2">
                    <CardContent className="p-6">
                      <a
                        href={info.link}
                        className="flex items-start gap-5 group"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#E36E4A]/10 to-[#F59E0B]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="h-7 w-7 text-[#E36E4A]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wide">{info.label}</p>
                          <p className="text-lg font-semibold group-hover:text-[#E36E4A] transition-colors break-words">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map */}
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3113.6105932187393!2d78.06818337547332!3d27.873674476087555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDUyJzI1LjIiTiA3OMKwMDQnMTQuNyJF!5e1!3m2!1sen!2sin!4v1765088163874!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alert India Location - Aligarh"
                  className="w-full"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
