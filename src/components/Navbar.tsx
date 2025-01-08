import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ContactDialog from "./ContactDialog";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "@/hooks/useTranslations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const t = useTranslations();

  const navItems = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.portfolio, path: "/portfolio" },
    { name: t.nav.cv, path: "/cv" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-display text-xl font-bold text-secondary flex items-center gap-3">
            <img 
              src="/images/profile.jpg" 
              alt="Mohamed ASLI" 
              className="w-10 h-10 rounded-full object-cover border-2 border-primary"
            />
            Mohamed ASLI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-secondary/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="text-secondary/80 hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-secondary/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setContactOpen(true);
                  setIsOpen(false);
                }}
                className="text-left text-secondary/80 hover:text-primary transition-colors"
              >
                {t.nav.contact}
              </button>
              <div className="pt-4 border-t">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </nav>
  );
};

export default Navbar;