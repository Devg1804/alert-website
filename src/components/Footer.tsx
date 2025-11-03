import { Lock, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <Lock className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">AALART LOCKS</h3>
                <p className="text-xs opacity-80">Alert India No. 1</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Premium security solutions since 1975
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#products" className="opacity-80 hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Smart Locks</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Padlocks</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Mortise Handles</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Main Door Locks</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.indiamart.com/aalart-locks/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors group"
                title="Visit us on IndiaMART"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 text-sm opacity-80">
              <p>Alert India No. 1</p>
              <p>Aligarh, Uttar Pradesh</p>
              <p>info@aalartindia.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80">
          <p>&copy; {currentYear} AALART LOCKS - Alert India No. 1. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
