import { FileDown, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface CatalogueDownloadProps {
  variant?: "full" | "compact";
}

const CatalogueDownload = ({ variant = "full" }: CatalogueDownloadProps) => {
  const handleDownload = () => {
    // In production, this would link to actual PDF
    // const link = document.createElement("a");
    // link.href = "assets/Alart-catalogue.pdf";
    // link.download = "Alart-catalogue.pdf";
    // link.click();
    const link = document.createElement("a");
    link.href = "/Aalart-Locks-Catalogue.pdf"; // root-relative
    link.download = "Aalart-Locks-Catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (variant === "compact") {
    return (
      <Button
        onClick={handleDownload}
        variant="outline"
        className="w-full gap-2 border-primary/20 hover:border-primary/40"
      >
        <FileDown className="h-5 w-5" />
        Download Product Catalogue
      </Button>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/10 hover:border-primary/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
            <FileText className="h-10 w-10 text-primary" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Download Our Product Catalogue</h3>
          <p className="text-muted-foreground mb-4">
            View our complete range of security solutions, specifications, and pricing details in one comprehensive PDF
          </p>
          <Button
            onClick={handleDownload}
            size="lg"
            className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            <FileDown className="h-5 w-5" />
            Download Catalogue (PDF, 8.2 MB)
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CatalogueDownload;
