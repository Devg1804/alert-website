import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
      <Link to={`/products/${product.category}/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-muted/30 aspect-square">
          <img 
            src={product.thumbnail} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
              New
            </Badge>
          )}
          {discountPercent > 0 && (
            <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
              {discountPercent}% OFF
            </Badge>
          )}
        </div>
      </Link>
      
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
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          
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
  );
};

export default ProductCard;
