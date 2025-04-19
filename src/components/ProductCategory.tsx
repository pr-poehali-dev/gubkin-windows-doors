import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCategoryProps {
  id: string;
  title: string;
  icon: ReactNode;
  products: Product[];
}

const ProductCategory = ({ id, title, icon, products }: ProductCategoryProps) => {
  return (
    <section id={id} className="py-12 bg-white even:bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="mr-3">{icon}</div>
          <h2 className="text-2xl font-bold text-shop-dark">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                />
                <div className="absolute top-3 right-3 bg-shop-red text-white py-1 px-2 rounded-md font-semibold">
                  {product.price} ₽
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-shop-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <Button className="w-full bg-shop-red hover:bg-shop-brown text-white">
                  <PhoneCall className="mr-2 h-4 w-4" /> Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
