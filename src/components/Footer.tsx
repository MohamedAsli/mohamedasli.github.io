import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-white border-t">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          © 2025 Mohamed ASLI. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Chambéry-Paris
        </p>
      </div>
    </footer>
  );
};

export default Footer;