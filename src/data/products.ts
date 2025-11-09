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
  }
];

export const getFeaturedProducts = () => products.filter(p => p.isFeatured).slice(0, 6);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
