import { PhoneCall, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-doorshop-dark">
              <span className="text-doorshop-red">О</span>
              <span className="text-doorshop-brown">К</span>
              <span className="text-doorshop-red">Н</span>
              <span className="text-doorshop-brown">А</span>
              <span className="mx-2">•</span>
              <span className="text-doorshop-red">Д</span>
              <span className="text-doorshop-brown">В</span>
              <span className="text-doorshop-red">Е</span>
              <span className="text-doorshop-brown">Р</span>
              <span className="text-doorshop-red">И</span>
            </div>
          </div>

          {/* Мобильная навигация */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-doorshop-dark hover:text-doorshop-red transition">
              Преимущества
            </a>
            <a href="#doors" className="text-doorshop-dark hover:text-doorshop-red transition">
              Двери
            </a>
            <a href="#windows" className="text-doorshop-dark hover:text-doorshop-red transition">
              Окна
            </a>
            <a href="#contact" className="text-doorshop-dark hover:text-doorshop-red transition">
              Контакты
            </a>
            <Button className="bg-doorshop-red hover:bg-doorshop-brown text-white">
              <PhoneCall className="mr-2 h-4 w-4" /> 8-904-087-23-77
            </Button>
          </nav>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-md p-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-doorshop-dark hover:text-doorshop-red transition"
                onClick={toggleMenu}
              >
                Преимущества
              </a>
              <a 
                href="#doors" 
                className="text-doorshop-dark hover:text-doorshop-red transition"
                onClick={toggleMenu}
              >
                Двери
              </a>
              <a 
                href="#windows" 
                className="text-doorshop-dark hover:text-doorshop-red transition"
                onClick={toggleMenu}
              >
                Окна
              </a>
              <a 
                href="#contact" 
                className="text-doorshop-dark hover:text-doorshop-red transition"
                onClick={toggleMenu}
              >
                Контакты
              </a>
              <Button className="bg-doorshop-red hover:bg-doorshop-brown text-white w-full">
                <PhoneCall className="mr-2 h-4 w-4" /> 8-904-087-23-77
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
