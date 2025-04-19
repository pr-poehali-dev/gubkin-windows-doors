import { Button } from "@/components/ui/button";
import { ShieldCheck, DoorClosed, MousePointer } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-white to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-shop-dark mb-4">
              Найдите идеальные 
              <span className="text-shop-red"> окна и двери </span> 
              в Губкине!
            </h1>
            <p className="text-gray-700 mb-6">
              Мы предлагаем широкий выбор высококачественных окон и дверей на любой вкус и бюджет.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-shop-red hover:bg-shop-brown text-white">
                Получить консультацию
              </Button>
              <Button variant="outline" className="border-shop-brown text-shop-brown hover:bg-shop-brown/10">
                <MousePointer className="mr-2 h-4 w-4" />
                Каталог продукции
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-shop-red mr-2" />
                <span className="text-gray-700">Гарантия качества</span>
              </div>
              <div className="flex items-center">
                <DoorClosed className="h-5 w-5 text-shop-red mr-2" />
                <span className="text-gray-700">Большой выбор</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative h-[350px] w-full">
              <div className="absolute top-0 left-0 h-full w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/77b13406-3d47-4bd5-aa3a-9e2c86aad627.jpg" 
                  alt="Современные двери" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-[180px] w-[180px] rounded-lg overflow-hidden shadow-lg">
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
