import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoIcon, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCategoryProps {
  title: string;
  icon: ReactNode;
  products: Product[];
}

const ProductCategory = ({ title, icon, products }: ProductCategoryProps) => {
  // Добавляем id для навигации, преобразуя заголовок
  const sectionId = title.toLowerCase().includes("окна") ? "windows" : "doors";

  return (
    <section id={sectionId} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="mr-4">{icon}</div>
          <h2 className="text-3xl font-bold text-doorshop-dark">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-doorshop-red text-white py-1 px-3 rounded-full font-semibold">
                  {product.price} ₽
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-doorshop-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-doorshop-red hover:bg-doorshop-brown text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Заказать
                  </Button>
                  <Button variant="outline" className="border-doorshop-brown text-doorshop-brown hover:bg-doorshop-brown/10">
                    <InfoIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-doorshop-brown text-doorshop-brown hover:bg-doorshop-brown/10 text-lg px-8 py-6">
            Смотреть все {title.toLowerCase()}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
