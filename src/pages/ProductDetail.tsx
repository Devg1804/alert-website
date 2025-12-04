import { useParams, Link } from "react-router-dom";
import { getProductById, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CatalogueDownload from "@/components/CatalogueDownload";
import ProductCard from "@/components/ProductCard";
import ImageZoomDialog from "@/components/ImageZoomDialog";
import { 
  MessageCircle,
  ChevronRight,
  Phone,
  ZoomIn
} from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const product = getProductById(productId || "");

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div 
              className="bg-muted/30 rounded-lg overflow-hidden aspect-square relative group cursor-pointer"
              onClick={() => setIsZoomOpen(true)}
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Zoom image"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex gap-2 mb-3">
              {product.isNew && (
                <Badge className="bg-secondary text-secondary-foreground">New</Badge>
              )}
              {product.inStock ? (
                <Badge variant="outline" className="text-success border-success">In Stock</Badge>
              ) : (
                <Badge variant="outline" className="text-destructive border-destructive">Out of Stock</Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            
            <p className="text-sm text-muted-foreground mb-6">
              Manufactured & Supply By:- <span className="font-medium">ALERT INDIA NO-1</span>
            </p>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="space-y-3 mb-6">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 5).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" variant="default" asChild className="bg-[#25D366] hover:bg-[#20BA5A]">
                  <a href={`https://wa.me/919412517442?text=I'm interested in ${product.name}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+919412517442">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
              <CatalogueDownload variant="compact" />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">All Features</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </TabsContent>
              <TabsContent value="specifications" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageZoomDialog
        src={product.thumbnail}
        alt={product.name}
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
      />
    </div>
  );
};

export default ProductDetail;
