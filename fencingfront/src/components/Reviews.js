// src/components/Reviews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('https://yourdomain.com/api/reviews/')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Отзывы</h1>
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
        <section id="reviews">
          <h2 className="text-3xl font-bold text-center mb-8">Отзывы</h2>
          <div className="review-grid">
            {reviews.map((item, index) => (
              <div key={index} className="review-card">
                <h3 className="text-xl font-bold mb-2">{item.author}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Центр Фехтования</p>
      </footer>
    </div>
  );
};

export default Reviews;
