import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import ImageZoomDialog from "./ImageZoomDialog";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden bg-muted/30 aspect-square">
          <img 
            src={product.thumbnail} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
            loading="lazy"
            onClick={() => setIsZoomOpen(true)}
          />
          {/* Zoom button overlay */}
          <button
            onClick={() => setIsZoomOpen(true)}
            className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Zoom image"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
              New
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4 flex-1 flex flex-col">
          <Link to={`/products/${product.category}/${product.id}`}>
            <h3 className="font-semibold text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-xs text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>
          
          <div className="mt-auto">
            <Button 
              asChild
              size="sm" 
              className="w-full"
            >
              <Link to={`/products/${product.category}/${product.id}`}>
                View Details
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <ImageZoomDialog
        src={product.thumbnail}
        alt={product.name}
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
      />
    </>
  );
};

export default ProductCard;
