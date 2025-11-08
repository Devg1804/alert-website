import smartLock from "@/assets/product-smart-lock.jpg";
import padlock from "@/assets/product-padlock.jpg";
import mortise from "@/assets/product-mortise.jpg";
import deadbolt from "@/assets/product-deadbolt.jpg";
import shutter from "@/assets/product-shutter.jpg";
import camera from "@/assets/product-camera.jpg";
import model3003 from "@/assets/model-3003.jpg";
import model3004 from "@/assets/model-3004.jpg";
import model3005 from "@/assets/model-3005.jpg";
import model3006 from "@/assets/model-3006.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  thumbnail: string;
  description: string;
  features: string[];
  specifications: {
    material: string;
    finish: string;
    dimensions: string;
    weight: string;
    warranty: string;
    [key: string]: string;
  };
  inStock: boolean;
  isNew: boolean;
  isFeatured: boolean;
}

export const categories = [
  { id: "smart-locks", name: "Smart Locks", icon: "Smartphone" },
  { id: "padlocks", name: "Padlocks", icon: "Lock" },
  { id: "mortise-handles", name: "Mortise Handles", icon: "DoorOpen" },
  { id: "deadbolts", name: "Main Door Locks", icon: "ShieldCheck" },
  { id: "shutter-locks", name: "Shutter Locks", icon: "Factory" },
  { id: "toolbox-locks", name: "Tool Box Locks", icon: "Wrench" },
  { id: "security-cameras", name: "Security Cameras", icon: "Camera" },
];

export const products: Product[] = [
  {
    id: "smart-lock-sl100",
    name: "Smart Door Lock SL-100",
    category: "smart-locks",
    price: 12999,
    originalPrice: 15999,
    rating: 4.8,
    reviewCount: 124,
    images: [smartLock, smartLock, smartLock],
    thumbnail: smartLock,
    description: "Premium smart lock with mobile app integration, fingerprint sensor, and LED indicators. Perfect for modern homes and offices.",
    features: [
      "Mobile app control (iOS & Android)",
      "Fingerprint recognition (up to 100 fingerprints)",
      "RFID card access",
      "Numeric keypad with backlight",
      "Auto-lock function",
      "Low battery alert",
      "Emergency power supply via USB",
      "Activity log tracking"
    ],
    specifications: {
      material: "Zinc Alloy & Stainless Steel",
      finish: "Satin Black",
      dimensions: "320mm x 75mm x 25mm",
      weight: "2.5 kg",
      warranty: "2 Years",
      powerSupply: "4x AA Batteries",
      compatibility: "Door thickness 40-110mm"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "smart-lock-sl200",
    name: "Smart Lock Pro SL-200",
    category: "smart-locks",
    price: 18999,
    rating: 4.9,
    reviewCount: 87,
    images: [smartLock, smartLock, smartLock],
    thumbnail: smartLock,
    description: "Advanced smart lock with facial recognition, Wi-Fi connectivity, and voice control support.",
    features: [
      "AI-powered facial recognition",
      "Wi-Fi & Bluetooth connectivity",
      "Voice control (Alexa & Google)",
      "Remote access from anywhere",
      "Temporary access codes",
      "Video doorbell integration",
      "Weather-resistant design"
    ],
    specifications: {
      material: "Aircraft-grade Aluminum",
      finish: "Champagne Gold",
      dimensions: "340mm x 80mm x 28mm",
      weight: "3.2 kg",
      warranty: "3 Years",
      powerSupply: "Rechargeable Li-ion Battery",
      connectivity: "Wi-Fi 2.4GHz, Bluetooth 5.0"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "padlock-heavy-pl50",
    name: "Heavy Duty Padlock PL-50",
    category: "padlocks",
    price: 899,
    originalPrice: 1299,
    rating: 4.6,
    reviewCount: 256,
    images: [padlock, padlock, padlock],
    thumbnail: padlock,
    description: "Chrome and brass finish padlock for maximum security outdoors. Weather-resistant and pick-proof.",
    features: [
      "Hardened steel shackle",
      "Weather-resistant chrome plating",
      "Pick-proof cylinder",
      "Anti-drill protection",
      "Suitable for gates, sheds, and storage",
      "Includes 3 keys"
    ],
    specifications: {
      material: "Brass & Chrome-plated Steel",
      finish: "Chrome",
      dimensions: "50mm body width",
      weight: "350g",
      warranty: "1 Year",
      shackle: "Hardened Steel 8mm",
      security: "High Security Grade 4"
    },
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: "padlock-marine-pl75",
    name: "Marine Padlock PL-75",
    category: "padlocks",
    price: 1499,
    rating: 4.7,
    reviewCount: 143,
    images: [padlock, padlock, padlock],
    thumbnail: padlock,
    description: "Stainless steel marine-grade padlock. Perfect for coastal areas and high-humidity environments.",
    features: [
      "100% stainless steel construction",
      "Salt-spray resistant",
      "Double-ball locking mechanism",
      "Corrosion-proof",
      "Ideal for boats, docks, and coastal properties"
    ],
    specifications: {
      material: "316 Stainless Steel",
      finish: "Brushed Stainless",
      dimensions: "75mm body width",
      weight: "580g",
      warranty: "2 Years",
      shackle: "Stainless Steel 10mm",
      security: "High Security Grade 5"
    },
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: "mortise-classic-mh100",
    name: "Classic Mortise Handle MH-100",
    category: "mortise-handles",
    price: 2499,
    rating: 4.5,
    reviewCount: 189,
    images: [mortise, mortise, mortise],
    thumbnail: mortise,
    description: "Elegant interior door solution with secure mortise mechanism. Perfect blend of style and security.",
    features: [
      "Solid brass construction",
      "Smooth lever operation",
      "Privacy lock function",
      "Universal door compatibility",
      "Easy installation",
      "Premium finish options"
    ],
    specifications: {
      material: "Solid Brass",
      finish: "Antique Brass",
      dimensions: "200mm x 50mm",
      weight: "1.2 kg",
      warranty: "3 Years",
      backset: "60mm",
      doorThickness: "35-45mm"
    },
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: "mortise-designer-mh200",
    name: "Designer Mortise MH-200",
    category: "mortise-handles",
    price: 3999,
    rating: 4.8,
    reviewCount: 97,
    images: [mortise, mortise, mortise],
    thumbnail: mortise,
    description: "Contemporary designer mortise handle with Italian design. Premium quality for luxury interiors.",
    features: [
      "Italian design aesthetics",
      "Rose gold finish",
      "Ergonomic lever design",
      "Silent operation",
      "Anti-bacterial coating",
      "Designer rosette"
    ],
    specifications: {
      material: "Zinc Alloy with Brass Inserts",
      finish: "Rose Gold PVD",
      dimensions: "220mm x 55mm",
      weight: "1.5 kg",
      warranty: "5 Years",
      backset: "60/70mm adjustable",
      doorThickness: "35-55mm"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "deadbolt-premium-db300",
    name: "Premium Deadbolt DB-300",
    category: "deadbolts",
    price: 4999,
    originalPrice: 6499,
    rating: 4.9,
    reviewCount: 167,
    images: [deadbolt, deadbolt, deadbolt],
    thumbnail: deadbolt,
    description: "Premium deadbolt with gold accents for main entries. Multi-point locking system for superior security.",
    features: [
      "5-point locking system",
      "Anti-snap, anti-drill, anti-pick",
      "Reinforced strike plate",
      "Adjustable backset",
      "Key and thumb turn operation",
      "Bump-proof technology"
    ],
    specifications: {
      material: "Hardened Steel & Brass",
      finish: "Satin Gold",
      dimensions: "240mm x 65mm",
      weight: "2.8 kg",
      warranty: "5 Years",
      boltThrow: "25mm deadbolt",
      security: "Grade 1 ANSI Certified"
    },
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: "deadbolt-smart-db400",
    name: "Smart Deadbolt DB-400",
    category: "deadbolts",
    price: 8999,
    rating: 4.7,
    reviewCount: 93,
    images: [deadbolt, deadbolt, deadbolt],
    thumbnail: deadbolt,
    description: "Electronic deadbolt with keypad and remote control. Perfect for keyless entry systems.",
    features: [
      "Electronic keypad entry",
      "Remote control included",
      "Auto-lock timer",
      "One-time use codes",
      "Audit trail (last 40 entries)",
      "Manual key override"
    ],
    specifications: {
      material: "Zinc Alloy & Stainless Steel",
      finish: "Matte Black",
      dimensions: "260mm x 70mm",
      weight: "3.1 kg",
      warranty: "3 Years",
      powerSupply: "4x AA Batteries",
      security: "Grade 2 ANSI Certified"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "shutter-industrial-sh500",
    name: "Industrial Shutter Lock SH-500",
    category: "shutter-locks",
    price: 3499,
    rating: 4.6,
    reviewCount: 134,
    images: [shutter, shutter, shutter],
    thumbnail: shutter,
    description: "Multi-point locking system for industrial shutters and rolling doors. Heavy-duty construction.",
    features: [
      "Multi-point locking (3 points)",
      "Heavy-duty steel construction",
      "Weather-sealed design",
      "Suitable for shutters up to 5m",
      "Anti-lift protection",
      "Master key system compatible"
    ],
    specifications: {
      material: "Galvanized Steel",
      finish: "Powder Coated Grey",
      dimensions: "450mm x 120mm",
      weight: "4.5 kg",
      warranty: "2 Years",
      lockingPoints: "3-point system",
      shutterWidth: "Up to 5000mm"
    },
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: "shutter-commercial-sh600",
    name: "Commercial Shutter SH-600",
    category: "shutter-locks",
    price: 5999,
    rating: 4.8,
    reviewCount: 76,
    images: [shutter, shutter, shutter],
    thumbnail: shutter,
    description: "Premium commercial-grade shutter lock with central locking mechanism. Ideal for shops and warehouses.",
    features: [
      "Central locking system",
      "Electric operation compatible",
      "Emergency release function",
      "Stainless steel bolts",
      "Vandal-resistant design",
      "Key-operated override"
    ],
    specifications: {
      material: "Stainless Steel & Aluminum",
      finish: "Anodized Silver",
      dimensions: "500mm x 150mm",
      weight: "6.2 kg",
      warranty: "3 Years",
      lockingPoints: "Central 5-point",
      motorCompatible: "Yes (12V/24V)"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "camera-smart-cam100",
    name: "Smart Security Camera CAM-100",
    category: "security-cameras",
    price: 6999,
    originalPrice: 8999,
    rating: 4.7,
    reviewCount: 213,
    images: [camera, camera, camera],
    thumbnail: camera,
    description: "HD security camera with night vision and motion detection. Cloud storage and mobile app included.",
    features: [
      "1080p Full HD recording",
      "Night vision up to 30m",
      "Motion detection alerts",
      "Two-way audio",
      "Cloud storage (30 days free)",
      "IP66 weatherproof",
      "Mobile app for iOS & Android"
    ],
    specifications: {
      material: "Aluminum Alloy",
      finish: "White",
      dimensions: "180mm x 90mm x 90mm",
      weight: "650g",
      warranty: "2 Years",
      resolution: "1920x1080p",
      connectivity: "Wi-Fi 2.4GHz, Ethernet"
    },
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: "camera-ai-cam200",
    name: "AI Security Hub CAM-200",
    category: "security-cameras",
    price: 14999,
    rating: 4.9,
    reviewCount: 142,
    images: [camera, camera, camera],
    thumbnail: camera,
    description: "Advanced AI-powered security hub with facial recognition and smart home integration.",
    features: [
      "4K Ultra HD recording",
      "AI-powered person detection",
      "Facial recognition",
      "Smart home integration",
      "360° pan-tilt-zoom",
      "Color night vision",
      "Local & cloud storage",
      "Voice control compatible"
    ],
    specifications: {
      material: "Premium Aluminum",
      finish: "Matte Black",
      dimensions: "220mm x 110mm x 110mm",
      weight: "980g",
      warranty: "3 Years",
      resolution: "3840x2160p (4K)",
      storage: "microSD up to 256GB + Cloud"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "shutter-3003",
    name: "Center Shutter Lock Bahubali",
    category: "shutter-locks",
    price: 2999,
    rating: 4.7,
    reviewCount: 85,
    images: [model3003, model3003, model3003],
    thumbnail: model3003,
    description: "Heavy-duty center shutter lock designed for maximum security. Perfect for commercial and industrial shutters.",
    features: [
      "Heavy-duty iron construction",
      "Center locking mechanism",
      "Weather-resistant PC finish",
      "Anti-tamper design",
      "Suitable for heavy shutters",
      "Easy installation"
    ],
    specifications: {
      material: "Iron",
      finish: "PC",
      dimensions: "140mm",
      weight: "1.8 kg",
      warranty: "2 Years",
      modelNo: "3003",
      type: "Center Shutter Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "shutter-3004",
    name: "Side Shutter Lock Fauladi",
    category: "shutter-locks",
    price: 1999,
    rating: 4.6,
    reviewCount: 92,
    images: [model3004, model3004, model3004],
    thumbnail: model3004,
    description: "Strong side-mounted shutter lock with iron construction. Ideal for shop shutters and warehouse doors.",
    features: [
      "Robust iron construction",
      "Side-mounting design",
      "PC finish for durability",
      "Smooth locking action",
      "Compact size",
      "Includes mounting hardware"
    ],
    specifications: {
      material: "Iron",
      finish: "PC",
      dimensions: "90mm",
      weight: "1.2 kg",
      warranty: "2 Years",
      modelNo: "3004",
      type: "Side Shutter Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "shutter-3005",
    name: "Side Shutter Lock Sleek",
    category: "shutter-locks",
    price: 1499,
    rating: 4.5,
    reviewCount: 108,
    images: [model3005, model3005, model3005],
    thumbnail: model3005,
    description: "Sleek and compact side shutter lock for modern shutters. Space-saving design without compromising security.",
    features: [
      "Compact sleek design",
      "Iron construction",
      "PC protective coating",
      "Space-efficient",
      "Easy to operate",
      "Suitable for light to medium shutters"
    ],
    specifications: {
      material: "Iron",
      finish: "PC",
      dimensions: "75mm",
      weight: "0.9 kg",
      warranty: "2 Years",
      modelNo: "3005",
      type: "Side Shutter Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "shutter-3006",
    name: "Godown Lock",
    category: "shutter-locks",
    price: 3499,
    rating: 4.8,
    reviewCount: 67,
    images: [model3006, model3006, model3006],
    thumbnail: model3006,
    description: "Heavy-duty godown lock designed for warehouses and storage facilities. Maximum security for large shutters.",
    features: [
      "Extra-heavy iron construction",
      "Designed for large shutters",
      "PC finish for weather resistance",
      "High security locking",
      "Suitable for warehouses",
      "Durable and long-lasting"
    ],
    specifications: {
      material: "Iron",
      finish: "PC",
      dimensions: "150mm",
      weight: "2.5 kg",
      warranty: "2 Years",
      modelNo: "3006",
      type: "Godown Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  }
];

export const getFeaturedProducts = () => products.filter(p => p.isFeatured).slice(0, 6);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
