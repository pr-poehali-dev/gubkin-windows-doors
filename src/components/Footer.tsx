import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shop-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">
              <span className="text-shop-red">ОКНА</span>
              <span className="mx-2">•</span>
              <span className="text-white">ДВЕРИ</span>
            </div>
            <p className="text-gray-400 text-sm">
              Высококачественные окна и двери в Губкине
            </p>
          </div>

          <div className="text-center mb-4 md:mb-0">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-shop-red mr-2" />
              <span className="text-white">8-904-087-23-77</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">
              г. Губкин, ул. Лазарева, 6
            </p>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            © {currentYear} Окна и Двери в Губкине. <br />
            Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
