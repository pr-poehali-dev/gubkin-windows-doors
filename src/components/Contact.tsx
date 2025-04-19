import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-gray-600">г. Губкин, ул. Лазарева, 6</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <a href="tel:+79040872377" className="text-gray-600 hover:text-primary">
                    8-904-087-23-77
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@okna-gubkin.ru" className="text-gray-600 hover:text-primary">
                    info@okna-gubkin.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Время работы</p>
                  <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  <p className="text-gray-600">Сб: 10:00-16:00</p>
                  <p className="text-gray-600">Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
            
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="w-full"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Ваше сообщение"
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Отправить заявку
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
