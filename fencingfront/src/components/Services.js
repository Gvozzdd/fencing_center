// src/components/Services.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const services = [
    {
      title: 'Фехтование на шпагах',
      description: 'Занятия для начинающих и продвинутых спортсменов.',
    },
    {
      title: 'Фехтование на рапирах',
      description: 'Традиционный стиль фехтования с использованием рапиры.',
    },
    {
      title: 'Фехтование на саблях',
      description: 'Энергичные тренировки с использованием сабель.',
    },
    {
      title: 'Фехтование на колясках',
      description: 'Программа для людей с ограниченными возможностями.',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Услуги спортивной подготовки</h1>
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
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Спортивная подготовка по фехтованию</h2>
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white p-4 rounded-lg shadow-lg flex items-center justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <i className={`fas ${activeAccordion === index ? 'fa-minus' : 'fa-plus'}`}></i>
              </button>
              {activeAccordion === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg shadow-lg">
                  <p className="text-gray-700">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2023 Центр Фехтования</p>
      </footer>
    </div>
  );
};

export default Services;
