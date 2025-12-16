import { Lock, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from "lucide-react"; 
import indiamartLogo from "@/assets/INDIAMART.png";
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
                <p className="text-sm opacity-80">Alert India No. 1</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Premium security solutions since 1975
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="/products" className="opacity-80 hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-base">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="opacity-80 hover:opacity-100 transition-opacity">Mortise Handles</a></li>
              <li><a href="/products" className="opacity-80 hover:opacity-100 transition-opacity">Main Door Locks</a></li>
              <li><a href="/products" className="opacity-80 hover:opacity-100 transition-opacity">Shutter Locks</a></li>
              <li><a href="/products" className="opacity-80 hover:opacity-100 transition-opacity">Padlocks</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-base">Connect With Us</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a 
                href="https://www.indiamart.com/alert-indiano1-aligarh/profile.html?srsltid=AfmBOooPdTLGWxqGqo8TaeieZcYxmKTipZtDEpMZj-8IxWxCXWfNulxj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                title="Visit us on IndiaMART"
              >
                <ExternalLink className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.indiamart.com/alert-indiano1-aligarh/profile.html?srsltid=AfmBOooPdTLGWxqGqo8TaeieZcYxmKTipZtDEpMZj-8IxWxCXWfNulxj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                title="Visit us on IndiaMART"
              >
                <img
                  src={indiamartLogo}
                  alt="IndiaMART"
                  className="h-5 w-5 object-contain"
                />
              </a>

            </div>
            <div className="mt-4 text-sm opacity-80 space-y-1">
              <p className="font-semibold text-primary-foreground opacity-100">ALERT INDIA NO-1</p>
              <p>Proprietor: ATAL GUPTA</p>
              <p>18/21, Sarai Mishra, Jaiganj</p>
              <p>Aligarh - 202001, Uttar Pradesh</p>
              <p className="mt-2">
                <a href="tel:9412517442" className="hover:opacity-100">📞 9412517442</a>
              </p>
              <p>
                <a href="tel:9634933897" className="hover:opacity-100">📞 9634933897</a>
              </p>
              <p className="mt-2">
                <a href="mailto:aalertindiano.1@gmail.com" className="hover:opacity-100">✉️ aalertindiano.1@gmail.com</a>
              </p>
              <p className="mt-2">GSTIN: 09ANRPG4894Q1ZS</p>
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
