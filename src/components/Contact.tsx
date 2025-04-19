import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-shop-dark mb-8 text-center">Контактная информация</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-shop-red mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-shop-dark">Адрес</h4>
                    <p className="text-gray-700">г. Губкин, ул. Лазарева, 6</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-shop-red mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-shop-dark">Телефон</h4>
                    <p className="text-gray-700">8-904-087-23-77</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-shop-red mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-shop-dark">Режим работы</h4>
                    <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-700">Сб: 10:00 - 16:00</p>
                    <p className="text-gray-700">Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8086693011454!2d37.54444231579945!3d51.29217397950148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41268e6d4e46cde1%3A0xdc8c20feaf695c8e!2z0YPQuy4g0JvQsNC30LDRgNC10LLQsCwgNiwg0JPRg9Cx0LrQuNC9LCDQkdC10LvQs9C-0YDQvtC00YHQutCw0Y8g0L7QsdC7LiwgMzA5MTkw!5e0!3m2!1sru!2sru!4v1653388200183!5m2!1sru!2sru" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-shop-dark mb-4">Оставить заявку</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Ваше имя</label>
                <Input placeholder="Иван Иванов" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Что вас интересует?</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Выберите тип продукции</option>
                  <option value="entrance_doors">Входные двери</option>
                  <option value="interior_doors">Межкомнатные двери</option>
                  <option value="windows">Пластиковые окна</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Комментарий</label>
                <Textarea placeholder="Опишите, что вас интересует..." className="min-h-[100px]" />
              </div>
              <Button className="w-full bg-shop-red hover:bg-shop-brown text-white">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
