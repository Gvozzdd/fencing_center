// src/components/About.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>О нас</h1>
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
        <section>
          <h2>О нашем центре</h2>
          <p>Мы занимаемся фехтированием уже более 10 лет и предлагаем высококачественные занятия для детей и взрослых. Наш опыт позволяет нам предлагать программы для всех уровней подготовки и возрастов.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 mt-4" onClick={openModal}>
            Подробнее
          </button>
        </section>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Подробная информация о нас</h2>
            <p className="text-lg text-gray-700 mb-6">
              Мы занимаемся фехтированием уже более 10 лет и предлагаем высококачественные занятия для детей и взрослых. Наш опыт позволяет нам предлагать программы для всех уровней подготовки и возрастов.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
      <footer>
        <p>&copy; 2023 Центр Фехтования</p>
      </footer>
    </div>
  );
};

export default About;
