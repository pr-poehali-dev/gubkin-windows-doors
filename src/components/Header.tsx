import { PhoneCall, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-shop-dark">
            <span className="text-shop-red">ОКНА</span>
            <span className="mx-2">•</span>
            <span className="text-shop-brown">ДВЕРИ</span>
          </div>

          {/* Мобильная навигация */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#catalog" className="text-shop-dark hover:text-shop-red transition">
              Каталог
            </a>
            <a href="#doors" className="text-shop-dark hover:text-shop-red transition">
              Двери
            </a>
            <a href="#windows" className="text-shop-dark hover:text-shop-red transition">
              Окна
            </a>
            <a href="#contact" className="text-shop-dark hover:text-shop-red transition">
              Контакты
            </a>
            <Button className="bg-shop-red hover:bg-shop-brown text-white">
              <PhoneCall className="mr-2 h-4 w-4" /> 8-904-087-23-77
            </Button>
          </nav>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-md p-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#catalog" 
                className="text-shop-dark hover:text-shop-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </a>
              <a 
                href="#doors" 
                className="text-shop-dark hover:text-shop-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Двери
              </a>
              <a 
                href="#windows" 
                className="text-shop-dark hover:text-shop-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Окна
              </a>
              <a 
                href="#contact" 
                className="text-shop-dark hover:text-shop-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <Button className="bg-shop-red hover:bg-shop-brown text-white w-full">
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
