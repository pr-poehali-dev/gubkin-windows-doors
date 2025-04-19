import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"

export interface Product {
  id: number
  name: string
  price: number
  image: string
  description?: string
}

interface ProductCategoryProps {
  title: string
  icon?: ReactNode
  products: Product[]
}

const ProductCategory = ({ title, icon, products }: ProductCategoryProps) => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center gap-2 mb-8">
          {icon}
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="product-card overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full transition-all hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 bg-primary text-white px-3 py-1 font-medium">
                  {product.price.toLocaleString()} ₽
                </div>
              </div>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                {product.description && (
                  <p className="text-gray-600 text-sm">{product.description}</p>
                )}
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategory
