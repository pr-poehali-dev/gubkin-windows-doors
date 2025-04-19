import { Shield, Truck, Tool, Award, ThumbsUp, BadgePercent } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-doorshop-red" />,
      title: "Надежность и безопасность",
      description: "Все двери и окна изготовлены из высокопрочных материалов, обеспечивающих безопасность вашего дома"
    },
    {
      icon: <Truck className="h-10 w-10 text-doorshop-red" />,
      title: "Быстрая доставка",
      description: "Доставим заказ в течение 1-3 дней по Губкину и области"
    },
    {
      icon: <Tool className="h-10 w-10 text-doorshop-red" />,
      title: "Профессиональный монтаж",
      description: "Установка окон и дверей производится опытными специалистами с многолетним стажем"
    },
    {
      icon: <Award className="h-10 w-10 text-doorshop-red" />,
      title: "Высокое качество",
      description: "Работаем только с проверенными производителями и качественными материалами"
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-doorshop-red" />,
      title: "Индивидуальный подход",
      description: "Учитываем все пожелания клиента и помогаем с выбором оптимального варианта"
    },
    {
      icon: <BadgePercent className="h-10 w-10 text-doorshop-red" />,
      title: "Доступные цены",
      description: "Предлагаем лучшие цены в городе и регулярные акции для наших клиентов"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-doorshop-dark mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по выбору, доставке и установке 
            качественных окон и дверей для вашего дома или офиса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-white inline-flex p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-doorshop-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
