import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-doorshop-dark mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и наши специалисты помогут вам выбрать идеальный вариант 
            для вашего дома или офиса
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-doorshop-dark mb-6">Оставить заявку</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" className="w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Тип продукции</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Выберите тип продукции</option>
                  <option value="entrance_doors">Входные двери</option>
                  <option value="interior_doors">Межкомнатные двери</option>
                  <option value="windows">Пластиковые окна</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Комментарий</label>
                <Textarea 
                  placeholder="Опишите, что вас интересует..." 
                  className="w-full min-h-[120px]" 
                />
              </div>
              <Button className="w-full bg-doorshop-red hover:bg-doorshop-brown text-white text-lg py-6">
                Отправить заявку
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-doorshop-dark mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-doorshop-red mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-doorshop-dark">Адрес</h4>
                    <p className="text-gray-600">г. Губкин, ул. Лазарева, 6</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-doorshop-red mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-doorshop-dark">Телефон</h4>
                    <p className="text-gray-600">8-904-087-23-77</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-doorshop-red mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-doorshop-dark">Email</h4>
                    <p className="text-gray-600">info@okna-dveri-gubkin.ru</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-doorshop-red mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium text-doorshop-dark">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                    <p className="text-gray-600">Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8086693011454!2d37.54444231579945!3d51.29217397950148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41268e6d4e46cde1%3A0xdc8c20feaf695c8e!2z0YPQuy4g0JvQsNC30LDRgNC10LLQsCwgNiwg0JPRg9Cx0LrQuNC9LCDQkdC10LvQs9C-0YDQvtC00YHQutCw0Y8g0L7QsdC7LiwgMzA5MTkw!5e0!3m2!1sru!2sru!4v1653388200183!5m2!1sru!2sru" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
