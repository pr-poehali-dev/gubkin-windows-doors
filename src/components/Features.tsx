import { Check, Shield, TruckIcon, Banknote } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <Check className="h-8 w-8 text-primary" />,
      title: "Широкий ассортимент",
      description: "Более 100 моделей дверей и окон от эконом до премиум класса"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Гарантия качества",
      description: "Все товары сертифицированы и имеют гарантию от производителя"
    },
    {
      icon: <TruckIcon className="h-8 w-8 text-primary" />,
      title: "Доставка и установка",
      description: "Профессиональная доставка и монтаж по Губкину и области"
    },
    {
      icon: <Banknote className="h-8 w-8 text-primary" />,
      title: "Выгодные цены",
      description: "Регулярные акции и специальные предложения для наших клиентов"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
