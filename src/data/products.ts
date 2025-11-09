import model3003 from "@/assets/model-3003.jpg";
import model3004 from "@/assets/model-3004.jpg";
import model3005 from "@/assets/model-3005.jpg";
import model3006 from "@/assets/model-3006.jpg";
import model1001 from "@/assets/model-1001.jpg";
import model1002 from "@/assets/model-1002.jpg";
import model1003 from "@/assets/model-1003.jpg";
import model1004 from "@/assets/model-1004.jpg";
import model1005 from "@/assets/model-1005.jpg";
import model1006 from "@/assets/model-1006.jpg";
import model2001 from "@/assets/model-2001.jpg";
import model2002 from "@/assets/model-2002.jpg";
import model2003 from "@/assets/model-2003.jpg";
import model2004 from "@/assets/model-2004.jpg";
import model2005 from "@/assets/model-2005.jpg";
import model2006 from "@/assets/model-2006.png";
import model2007 from "@/assets/model-2007.jpg";
import model2008 from "@/assets/model-2008.jpg";
import model3001 from "@/assets/model-3001.jpg";
import model3002 from "@/assets/model-3002.jpg";

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
  materialAvailable?: string;
  finishAvailable?: string;
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
  },
  {
    id: "mortise-1001",
    name: "Mortise Handle 1001",
    category: "mortise-handles",
    price: 1899,
    rating: 4.7,
    reviewCount: 156,
    images: [model1001, model1001, model1001],
    thumbnail: model1001,
    description: "Premium mortise handle with Rose Gold finish. Elegant design perfect for modern interiors and commercial spaces.",
    features: [
      "Premium Rose Gold finish",
      "8 inch size",
      "Ergonomic design",
      "Smooth operation",
      "Corrosion resistant",
      "Easy to install"
    ],
    specifications: {
      material: "Multiple options available",
      finish: "Rose Gold",
      dimensions: "8 inch",
      weight: "1.0 kg",
      warranty: "2 Years",
      modelNo: "1001",
      type: "Mortise Handle"
    },
    materialAvailable: "Iron plate + iron handle, Zinc plate + zinc handle, Steel plate + steel handle, Steel plate + zinc handle",
    finishAvailable: "Rose Gold, Brass Antique, Matt Black, S.S, CP",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "mortise-1002",
    name: "Mortise Handle 1002",
    category: "mortise-handles",
    price: 1599,
    rating: 4.6,
    reviewCount: 143,
    images: [model1002, model1002, model1002],
    thumbnail: model1002,
    description: "Classic mortise handle with CP (Chrome Plated) finish. Durable and stylish solution for all door types.",
    features: [
      "Chrome Plated finish",
      "8 inch size",
      "Sleek modern design",
      "Anti-tarnish coating",
      "Universal compatibility",
      "Long-lasting durability"
    ],
    specifications: {
      material: "Multiple options available",
      finish: "CP",
      dimensions: "8 inch",
      weight: "1.0 kg",
      warranty: "2 Years",
      modelNo: "1002",
      type: "Mortise Handle"
    },
    materialAvailable: "Iron plate + iron handle, Zinc plate + zinc handle, Steel plate + steel handle, Steel plate + zinc handle",
    finishAvailable: "Rose Gold, Brass Antique, Matt Black, S.S, CP",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "mortise-1003",
    name: "Mortise Handle 1003",
    category: "mortise-handles",
    price: 1799,
    rating: 4.8,
    reviewCount: 178,
    images: [model1003, model1003, model1003],
    thumbnail: model1003,
    description: "Brass Antique mortise handle combining vintage aesthetics with modern functionality. Perfect for traditional and contemporary spaces.",
    features: [
      "Brass Antique finish",
      "8 inch size",
      "Vintage aesthetic",
      "Premium quality",
      "Sturdy construction",
      "Elegant appearance"
    ],
    specifications: {
      material: "Multiple options available",
      finish: "Brass Antique",
      dimensions: "8 inch",
      weight: "1.1 kg",
      warranty: "2 Years",
      modelNo: "1003",
      type: "Mortise Handle"
    },
    materialAvailable: "Iron plate + iron handle, Zinc plate + zinc handle, Steel plate + steel handle, Steel plate + zinc handle",
    finishAvailable: "Rose Gold, Brass Antique, Matt Black, S.S, CP",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "mortise-1004",
    name: "Mortise Handle 1004",
    category: "mortise-handles",
    price: 1799,
    rating: 4.7,
    reviewCount: 165,
    images: [model1004, model1004, model1004],
    thumbnail: model1004,
    description: "Brass Antique mortise handle with ergonomic design. Classic finish that adds character to any door.",
    features: [
      "Brass Antique finish",
      "8 inch size",
      "Ergonomic lever",
      "Classic design",
      "Weather resistant",
      "Superior grip"
    ],
    specifications: {
      material: "Multiple options available",
      finish: "Brass Antique",
      dimensions: "8 inch",
      weight: "1.1 kg",
      warranty: "2 Years",
      modelNo: "1004",
      type: "Mortise Handle"
    },
    materialAvailable: "Iron plate + iron handle, Zinc plate + zinc handle, Steel plate + steel handle, Steel plate + zinc handle",
    finishAvailable: "Rose Gold, Brass Antique, Matt Black, S.S, CP",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "mortise-1005",
    name: "Mortise Handle 1005",
    category: "mortise-handles",
    price: 1799,
    rating: 4.8,
    reviewCount: 189,
    images: [model1005, model1005, model1005],
    thumbnail: model1005,
    description: "Premium Brass Antique mortise handle with rounded plate design. Elegant solution for residential and commercial applications.",
    features: [
      "Brass Antique finish",
      "8 inch size",
      "Rounded plate design",
      "Premium aesthetics",
      "Durable construction",
      "Smooth operation"
    ],
    specifications: {
      material: "Multiple options available",
      finish: "Brass Antique",
      dimensions: "8 inch (8\")",
      weight: "1.1 kg",
      warranty: "2 Years",
      modelNo: "1005",
      type: "Mortise Handle"
    },
    materialAvailable: "Iron plate + iron handle, Zinc plate + zinc handle, Steel plate + steel handle, Steel plate + zinc handle",
    finishAvailable: "Rose Gold, Brass Antique, Matt Black, S.S, CP",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "mortise-1006",
    name: "Mortise Handle 1006",
    category: "mortise-handles",
    price: 1399,
    rating: 4.6,
    reviewCount: 134,
    images: [model1006, model1006, model1006],
    thumbnail: model1006,
    description: "Compact CP finish mortise handle available in 5 and 6 inch sizes. Perfect for smaller doors and cabinets.",
    features: [
      "Chrome Plated finish",
      "5 inch, 6 inch sizes",
      "Compact design",
      "Space-efficient",
      "Versatile application",
      "Easy installation"
    ],
    specifications: {
      material: "Multiple options available",
      finish: "CP",
      dimensions: "5 inch, 6\"",
      weight: "0.8 kg",
      warranty: "2 Years",
      modelNo: "1006",
      type: "Mortise Handle"
    },
    materialAvailable: "Iron plate + iron handle, Zinc plate + zinc handle, Steel plate + steel handle, Steel plate + zinc handle",
    finishAvailable: "Rose Gold, Brass Antique, Matt Black, S.S, CP",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "deadbolt-2001",
    name: "Mortise Lock 2001",
    category: "deadbolts",
    price: 1299,
    rating: 4.7,
    reviewCount: 98,
    images: [model2001, model2001, model2001],
    thumbnail: model2001,
    description: "High-security mortise lock with iron construction and S.S finish. Perfect for main doors and commercial applications.",
    features: [
      "Heavy-duty iron construction",
      "S.S finish for durability",
      "70mm size",
      "Smooth locking mechanism",
      "Corrosion resistant",
      "Easy installation"
    ],
    specifications: {
      material: "Iron",
      finish: "S.S",
      dimensions: "70mm",
      weight: "1.2 kg",
      warranty: "2 Years",
      modelNo: "2001",
      type: "Mortise Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "deadbolt-2002",
    name: "Mortise Lock 2002",
    category: "deadbolts",
    price: 1299,
    rating: 4.6,
    reviewCount: 87,
    images: [model2002, model2002, model2002],
    thumbnail: model2002,
    description: "Reliable mortise lock with superior iron construction. Ideal for residential and commercial main doors.",
    features: [
      "Robust iron construction",
      "S.S finish coating",
      "70mm standard size",
      "Anti-rust protection",
      "Durable mechanism",
      "Universal compatibility"
    ],
    specifications: {
      material: "Iron",
      finish: "S.S",
      dimensions: "70mm",
      weight: "1.2 kg",
      warranty: "2 Years",
      modelNo: "2002",
      type: "Mortise Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "deadbolt-2003",
    name: "Mortise Lock 2003",
    category: "deadbolts",
    price: 1299,
    rating: 4.7,
    reviewCount: 102,
    images: [model2003, model2003, model2003],
    thumbnail: model2003,
    description: "Premium quality mortise lock designed for maximum security and durability.",
    features: [
      "Premium iron material",
      "S.S protective finish",
      "70mm dimensions",
      "High security design",
      "Weather resistant",
      "Long-lasting performance"
    ],
    specifications: {
      material: "Iron",
      finish: "S.S",
      dimensions: "70mm",
      weight: "1.2 kg",
      warranty: "2 Years",
      modelNo: "2003",
      type: "Mortise Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "deadbolt-2004",
    name: "Mortise Lock 2004",
    category: "deadbolts",
    price: 1299,
    rating: 4.8,
    reviewCount: 115,
    images: [model2004, model2004, model2004],
    thumbnail: model2004,
    description: "Heavy-duty mortise lock with advanced locking mechanism. Built for strength and reliability.",
    features: [
      "Heavy-duty construction",
      "S.S finish quality",
      "70mm size",
      "Advanced lock mechanism",
      "Anti-tamper design",
      "Professional grade"
    ],
    specifications: {
      material: "Iron",
      finish: "S.S",
      dimensions: "70mm",
      weight: "1.2 kg",
      warranty: "2 Years",
      modelNo: "2004",
      type: "Mortise Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "deadbolt-2005",
    name: "Baby Mortise Lock 2005",
    category: "deadbolts",
    price: 999,
    rating: 4.5,
    reviewCount: 76,
    images: [model2005, model2005, model2005],
    thumbnail: model2005,
    description: "Compact baby mortise lock perfect for interior doors and smaller applications.",
    features: [
      "Compact design",
      "Iron construction",
      "S.S finish",
      "70mm size",
      "Ideal for interior doors",
      "Easy to install"
    ],
    specifications: {
      material: "Iron",
      finish: "S.S",
      dimensions: "70mm",
      weight: "0.9 kg",
      warranty: "2 Years",
      modelNo: "2005",
      type: "Baby Mortise Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "deadbolt-2006",
    name: "Door Kit 2006",
    category: "deadbolts",
    price: 2499,
    rating: 4.9,
    reviewCount: 142,
    images: [model2006, model2006, model2006],
    thumbnail: model2006,
    description: "Complete door kit in stainless steel with multiple size options and finish varieties. Professional solution for all door types.",
    features: [
      "Complete door kit",
      "Multiple sizes available",
      "Various finish options",
      "Professional grade",
      "Includes all components",
      "Versatile application"
    ],
    specifications: {
      material: "S.S",
      finish: "T.T, P.L, C.L, R.G, S.L, PRINT, B.A, L.A",
      dimensions: "9-2, 3, 10-2, 3, 12-2,3, 13-2,3, 14-2, 3, 16-3,4,5, 19-5",
      weight: "2.5 kg",
      warranty: "2 Years",
      modelNo: "2006",
      type: "Door Kit"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "deadbolt-2007",
    name: "Ultra Key Pin Cylinder Lock 2007",
    category: "deadbolts",
    price: 1799,
    rating: 4.8,
    reviewCount: 124,
    images: [model2007, model2007, model2007],
    thumbnail: model2007,
    description: "Ultra-secure pin cylinder lock available in Brass and Zinc with multiple size options. All finishes available for customization.",
    features: [
      "Ultra key security",
      "Pin cylinder mechanism",
      "Multiple sizes: 60mm, 70mm, 90mm",
      "Brass/Zinc material options",
      "All finishes available",
      "High precision engineering"
    ],
    specifications: {
      material: "Brass / Zinc",
      finish: "All Finish Available",
      dimensions: "60mm, 70mm, 90mm",
      weight: "0.8 kg",
      warranty: "2 Years",
      modelNo: "2007",
      type: "Pin Cylinder Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "deadbolt-2008",
    name: "Simple Key Pin Cylinder Lock 2008",
    category: "deadbolts",
    price: 1499,
    rating: 4.6,
    reviewCount: 95,
    images: [model2008, model2008, model2008],
    thumbnail: model2008,
    description: "Simple and reliable pin cylinder lock with Brass/Zinc construction. Multiple sizes and all finishes available.",
    features: [
      "Simple key design",
      "Pin cylinder system",
      "Sizes: 60mm, 70mm, 90mm",
      "Brass/Zinc material",
      "All finishes available",
      "Easy key operation"
    ],
    specifications: {
      material: "Brass / Zinc",
      finish: "All Finish Available",
      dimensions: "60mm, 70mm, 90mm",
      weight: "0.7 kg",
      warranty: "2 Years",
      modelNo: "2008",
      type: "Pin Cylinder Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: "shutter-3001",
    name: "10 Chal Super 3001",
    category: "shutter-locks",
    price: 1899,
    rating: 4.7,
    reviewCount: 88,
    images: [model3001, model3001, model3001],
    thumbnail: model3001,
    description: "Super strong 10-bolt shutter lock with iron construction. Ideal for high-security commercial shutters.",
    features: [
      "10-bolt locking system",
      "Heavy iron construction",
      "CP finish for durability",
      "90mm size",
      "Commercial grade security",
      "Weather resistant"
    ],
    specifications: {
      material: "Iron",
      finish: "CP",
      dimensions: "90mm",
      weight: "1.5 kg",
      warranty: "2 Years",
      modelNo: "3001",
      type: "10 Chal Lock"
    },
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: "shutter-3002",
    name: "10 Chal Super 3002",
    category: "shutter-locks",
    price: 1899,
    rating: 4.8,
    reviewCount: 96,
    images: [model3002, model3002, model3002],
    thumbnail: model3002,
    description: "Premium 10-bolt shutter lock with enhanced security features. Perfect for warehouses and commercial properties.",
    features: [
      "10-bolt mechanism",
      "Robust iron build",
      "CP protective coating",
      "90mm dimensions",
      "Maximum security",
      "Industrial strength"
    ],
    specifications: {
      material: "Iron",
      finish: "CP",
      dimensions: "90mm",
      weight: "1.5 kg",
      warranty: "2 Years",
      modelNo: "3002",
      type: "10 Chal Lock"
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
