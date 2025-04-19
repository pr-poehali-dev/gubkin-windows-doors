const Footer = () => {
  return (
    <footer className="bg-doorshop-dark text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ОКНА ДВЕРИ</h3>
            <p className="text-gray-300 text-sm">
              Магазин окон и дверей в Губкине. Широкий ассортимент качественных окон и дверей по доступным ценам.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Категории товаров</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Входные двери</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Межкомнатные двери</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Пластиковые окна</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Фурнитура</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300">
              <p>г. Губкин, ул. Лазарева, 6</p>
              <p>Телефон: <a href="tel:+79040872377" className="hover:text-white">8-904-087-23-77</a></p>
              <p>Email: <a href="mailto:info@okna-gubkin.ru" className="hover:text-white">info@okna-gubkin.ru</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2023 ОКНА ДВЕРИ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
