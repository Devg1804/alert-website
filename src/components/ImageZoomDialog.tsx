import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { ZoomIn, ZoomOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageZoomDialogProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageZoomDialog = ({ src, alt, isOpen, onClose }: ImageZoomDialogProps) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setScale(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) { onClose(); setScale(1); } }}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95 border-none">
        <VisuallyHidden>
          <DialogTitle>Product Image Zoom View</DialogTitle>
        </VisuallyHidden>
        
        {/* Controls */}
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomOut}
            disabled={scale <= 0.5}
            className="bg-white/20 hover:bg-white/30 text-white"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleReset}
            className="bg-white/20 hover:bg-white/30 text-white"
          >
            <span className="text-xs font-medium">{Math.round(scale * 100)}%</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomIn}
            disabled={scale >= 3}
            className="bg-white/20 hover:bg-white/30 text-white"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Image Container */}
        <div className="w-full h-[90vh] overflow-auto flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-w-none transition-transform duration-200 cursor-move"
            style={{ transform: `scale(${scale})` }}
            onClick={handleReset}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoomDialog;
