import { Phone, MapPin, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-doorshop-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-doorshop-red">О</span>
              <span className="text-white">К</span>
              <span className="text-doorshop-red">Н</span>
              <span className="text-white">А</span>
              <span className="mx-2">•</span>
              <span className="text-doorshop-red">Д</span>
              <span className="text-white">В</span>
              <span className="text-doorshop-red">Е</span>
              <span className="text-white">Р</span>
              <span className="text-doorshop-red">И</span>
            </div>
            <p className="text-gray-300 mb-4">
              Широкий выбор высококачественных окон и дверей на любой вкус и бюджет в городе Губкин.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-doorshop-red">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-doorshop-red">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-doorshop-red">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Продукция</h3>
            <ul className="space-y-2">
              <li>
                <a href="#doors" className="text-gray-300 hover:text-doorshop-red">Входные двери</a>
              </li>
              <li>
                <a href="#doors" className="text-gray-300 hover:text-doorshop-red">Межкомнатные двери</a>
              </li>
              <li>
                <a href="#windows" className="text-gray-300 hover:text-doorshop-red">Пластиковые окна</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-doorshop-red">Фурнитура</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-doorshop-red">Аксессуары</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-doorshop-red">Замер</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-doorshop-red">Доставка</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-doorshop-red">Установка</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-doorshop-red">Гарантийное обслуживание</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-doorshop-red">Ремонт и реставрация</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-doorshop-red mr-3" />
                <span className="text-gray-300">г. Губкин, ул. Лазарева, 6</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-doorshop-red mr-3" />
                <span className="text-gray-300">8-904-087-23-77</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-doorshop-red mr-3" />
                <span className="text-gray-300">info@okna-dveri-gubkin.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Окна и Двери в Губкине. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
