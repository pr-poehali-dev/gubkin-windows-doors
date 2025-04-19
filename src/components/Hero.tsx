import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-doorshop-red to-doorshop-brown text-white py-16">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Идеальные окна и двери для вашего дома в Губкине
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Мы предлагаем широкий выбор высококачественных окон и дверей на любой вкус и бюджет.
            Качество, надежность и доступные цены — наши главные преимущества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-doorshop-red hover:bg-gray-100">
              Посмотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
