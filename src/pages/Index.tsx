import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ProductCategory from "@/components/ProductCategory"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { DoorClosed, Windows } from "lucide-react"

const HomePage = () => {
  const entranceDoors = [
    {
      id: 1,
      name: "Стальная дверь",
      price: 9000,
      image: "https://cdn.poehali.dev/files/0265ee53-7fc8-4e61-aa8b-ed1f2463ee3b.jpg",
      description: "Надежная входная дверь с металлическим полотном и качественными замками"
    },
    {
      id: 2,
      name: "Дверь «Браво-23»",
      price: 12500,
      image: "https://cdn.poehali.dev/files/b26376d3-4e92-4acf-88e2-30682ddd9616.jpg",
      description: "Современная дверь со стеклянными вставками и улучшенной шумоизоляцией"
    },
    {
      id: 3,
      name: "Дверь «Mistral 8S»",
      price: 6500,
      image: "https://cdn.poehali.dev/files/95b07be1-d984-4019-844a-4c1d13c6c280.jpg",
      description: "Элегантная дверь в светлых тонах с горизонтальными вставками"
    }
  ]

  const interiorDoors = [
    {
      id: 4,
      name: "Дверь «Favorite 3G»",
      price: 4500,
      image: "https://cdn.poehali.dev/files/77b13406-3d47-4bd5-aa3a-9e2c86aad627.jpg",
      description: "Стильная межкомнатная дверь с горизонтальными линиями в современном дизайне"
    },
    {
      id: 5,
      name: "Дверь «VDI-01»",
      price: 4500,
      image: "https://cdn.poehali.dev/files/b26376d3-4e92-4acf-88e2-30682ddd9616.jpg",
      description: "Классическая дверь в светлом цвете с матовым стеклом"
    },
    {
      id: 6,
      name: "Дверь «Винетта»",
      price: 26500,
      image: "https://cdn.poehali.dev/files/77b13406-3d47-4bd5-aa3a-9e2c86aad627.jpg",
      description: "Премиальная межкомнатная дверь с элегантным дизайном и отделкой"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductCategory 
          title="Входные двери" 
          icon={<DoorClosed className="h-8 w-8 text-doorshop-red" />}
          products={entranceDoors} 
        />
        <ProductCategory 
          title="Межкомнатные двери" 
          icon={<DoorClosed className="h-8 w-8 text-doorshop-brown" />}
          products={interiorDoors} 
        />
        <ProductCategory 
          title="Пластиковые окна" 
          icon={<Windows className="h-8 w-8 text-blue-500" />}
          products={[
            {
              id: 7,
              name: "Окно ПВХ стандарт",
              price: 5500,
              image: "https://cdn.poehali.dev/files/77b13406-3d47-4bd5-aa3a-9e2c86aad627.jpg",
              description: "Стандартное пластиковое окно с двойным стеклопакетом"
            },
            {
              id: 8,
              name: "Окно с энергосбережением",
              price: 7800,
              image: "https://cdn.poehali.dev/files/77b13406-3d47-4bd5-aa3a-9e2c86aad627.jpg",
              description: "Энергосберегающее окно с повышенной теплоизоляцией"
            },
            {
              id: 9,
              name: "Балконная система",
              price: 12300,
              image: "https://cdn.poehali.dev/files/77b13406-3d47-4bd5-aa3a-9e2c86aad627.jpg",
              description: "Комплексное остекление балкона с дверью и окнами"
            }
          ]} 
        />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
