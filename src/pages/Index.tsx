import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategory from "@/components/ProductCategory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { DoorClosed, KeyRound, LayoutGrid } from "lucide-react";

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
      name: "Дверь «Винетта»",
      price: 26500,
      image: "https://cdn.poehali.dev/files/b26376d3-4e92-4acf-88e2-30682ddd9616.jpg",
      description: "Премиальная входная дверь с элегантным дизайном и усиленной защитой"
    }
  ];

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
      image: "https://cdn.poehali.dev/files/77b13406-3d47-4bd5-aa3a-9e2c86aad627.jpg",
      description: "Классическая дверь в светлом цвете с матовым стеклом"
    },
    {
      id: 6,
      name: "Дверь «Mistral 8S»",
      price: 6500,
      image: "https://cdn.poehali.dev/files/95b07be1-d984-4019-844a-4c1d13c6c280.jpg",
      description: "Элегантная дверь в светлых тонах с горизонтальными вставками"
    }
  ];

  const windows = [
    {
      id: 7,
      name: "Окно ПВХ стандарт",
      price: 5500,
      image: "/placeholder.svg",
      description: "Стандартное пластиковое окно с двойным стеклопакетом"
    },
    {
      id: 8,
      name: "Окно с энергосбережением",
      price: 7800,
      image: "/placeholder.svg",
      description: "Энергосберегающее окно с повышенной теплоизоляцией"
    },
    {
      id: 9,
      name: "Балконная система",
      price: 12300,
      image: "/placeholder.svg",
      description: "Комплексное остекление балкона с дверью и окнами"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductCategory 
          id="doors"
          title="Входные двери" 
          icon={<KeyRound className="h-6 w-6 text-shop-red" />}
          products={entranceDoors} 
        />
        <ProductCategory 
          id="interior-doors"
          title="Межкомнатные двери" 
          icon={<DoorClosed className="h-6 w-6 text-shop-brown" />}
          products={interiorDoors} 
        />
        <ProductCategory 
          id="windows"
          title="Пластиковые окна" 
          icon={<LayoutGrid className="h-6 w-6 text-blue-500" />}
          products={windows} 
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
