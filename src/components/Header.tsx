import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-3 sticky top-0 z-50 shadow-md">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">ОКНА ДВЕРИ</h1>
          <span className="hidden md:inline text-sm">г. Губкин</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="font-medium">ул. Лазарева, 6</span>
            <a href="tel:+79040872377" className="text-lg font-bold hover:underline">
              8-904-087-23-77
            </a>
          </div>

          <Button size="sm" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            <Phone className="mr-2 h-4 w-4" />
            <a href="tel:+79040872377" className="md:hidden">Позвонить</a>
            <span className="hidden md:inline">Заказать звонок</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
