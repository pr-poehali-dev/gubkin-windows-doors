import { Button } from "@/components/ui/button";
import { CalendarCheck, DoorClosed, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-gray-100 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-doorshop-dark mb-6">
              Найдите идеальные 
              <span className="text-doorshop-red"> окна и двери </span> 
              в Губкине!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Мы предлагаем широкий выбор высококачественных окон и дверей на любой вкус и бюджет. 
              Надежные материалы, современный дизайн и доступные цены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-doorshop-red hover:bg-doorshop-brown text-white text-lg py-6">
                Заказать консультацию
              </Button>
              <Button variant="outline" className="border-doorshop-brown text-doorshop-brown hover:bg-doorshop-brown/10 text-lg py-6">
                Каталог продукции
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <ShieldCheck className="h-8 w-8 text-doorshop-red mr-3" />
                <span className="text-gray-700">Гарантия качества</span>
              </div>
              <div className="flex items-center">
                <CalendarCheck className="h-8 w-8 text-doorshop-red mr-3" />
                <span className="text-gray-700">Быстрая установка</span>
              </div>
              <div className="flex items-center">
                <DoorClosed className="h-8 w-8 text-doorshop-red mr-3" />
                <span className="text-gray-700">Большой выбор</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative h-[450px] w-full">
              <div className="absolute top-0 left-0 h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/77b13406-3d47-4bd5-aa3a-9e2c86aad627.jpg" 
                  alt="Современные двери" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-[250px] w-[250px] rounded-2xl overflow-hidden shadow-xl transform rotate-6">
                <img 
                  src="https://cdn.poehali.dev/files/0265ee53-7fc8-4e61-aa8b-ed1f2463ee3b.jpg" 
                  alt="Стальные двери" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
