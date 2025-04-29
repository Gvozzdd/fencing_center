// src/components/Gallery.js
import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => (
  <div className="App">
    <header className="App-header">
      <h1>Галерея</h1>
      <nav>
        <Link to="/" className="mx-2 text-lg hover:text-gray-300 flex items-center">
          <i className="fas fa-home mr-2"></i> Главная
        </Link>
        <Link to="/about" className="mx-2 text-lg hover:text-gray-300 flex items-center">
          <i className="fas fa-info-circle mr-2"></i> О нас
        </Link>
        <Link to="/services" className="mx-2 text-lg hover:text-gray-300 flex items-center">
          <i className="fas fa-dumbbell mr-2"></i> Услуги
        </Link>
        <Link to="/news" className="mx-2 text-lg hover:text-gray-300 flex items-center">
          <i className="fas fa-newspaper mr-2"></i> Новости
        </Link>
        <Link to="/gallery" className="mx-2 text-lg hover:text-gray-300 flex items-center">
          <i className="fas fa-images mr-2"></i> Галерея
        </Link>
        <Link to="/reviews" className="mx-2 text-lg hover:text-gray-300 flex items-center">
          <i className="fas fa-comments mr-2"></i> Отзывы
        </Link>
        <Link to="/enrollment" className="mx-2 text-lg hover:text-gray-300 flex items-center">
          <i className="fas fa-calendar-alt mr-2"></i> Запись
        </Link>
      </nav>
    </header>
    <main>
      <section id="gallery">
        <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>
        <div className="gallery-grid">
          <img src="/images/gallery1.jpg" alt="Галерея 1" className="rounded-lg shadow-lg" />
          <img src="/images/gallery2.jpg" alt="Галерея 2" className="rounded-lg shadow-lg" />
          <img src="/images/gallery3.jpg" alt="Галерея 3" className="rounded-lg shadow-lg" />
          {/* Добавьте остальные изображения */}
        </div>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Центр Фехтования</p>
    </footer>
  </div>
);

export default Gallery;
