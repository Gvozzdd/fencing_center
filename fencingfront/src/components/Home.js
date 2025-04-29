// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1>Центр Фехтования</h1>
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
      <section id="hero">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="/videos/fencing.mp4" type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Добро пожаловать в Центр Фехтования</h1>
          <p className="text-lg md:text-xl mb-6">Мы предлагаем качественные занятия по фехтированию для всех возрастов и уровней подготовки.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Подробнее</button>
        </div>
      </section>
      <section id="about">
        <div className="about-content">
          <img src="/images/center.jpg" alt="Центр Фехтования" className="w-full md:w-1/2 rounded-lg shadow-lg mb-8 md:mb-0" />
          <div className="md:w-1/2 pl-0 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">О нас</h2>
            <p className="text-lg text-gray-700">
              Наш центр — это место, где каждый может открыть для себя фехтование. Мы стремимся развивать этот вид спорта, передавая знания и опыт новым поколениям. Наша миссия — воспитывать сильных и дисциплинированных спортсменов.
            </p>
          </div>
        </div>
      </section>
      <section id="services">
        <h2 className="text-3xl font-bold text-center mb-8">Спортивная подготовка по фехтованию</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3 className="text-xl font-bold mb-2">Фехтование на шпагах</h3>
            <p className="text-gray-700">Занятия для начинающих и продвинутых спортсменов.</p>
          </div>
          <div className="service-card">
            <h3 className="text-xl font-bold mb-2">Фехтование на рапирах</h3>
            <p className="text-gray-700">Традиционный стиль фехтования с использованием рапиры.</p>
          </div>
          <div className="service-card">
            <h3 className="text-xl font-bold mb-2">Фехтование на саблях</h3>
            <p className="text-gray-700">Энергичные тренировки с использованием сабель.</p>
          </div>
          <div className="service-card">
            <h3 className="text-xl font-bold mb-2">Фехтование на колясках</h3>
            <p className="text-gray-700">Программа для людей с ограниченными возможностями.</p>
          </div>
        </div>
      </section>
      <section id="news">
        <h2 className="text-3xl font-bold text-center mb-8">Новости</h2>
        <div className="news-grid" id="news-grid">
          {/* Новости будут загружены через JavaScript */}
        </div>
      </section>
      <section id="gallery">
        <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>
        <div className="gallery-grid">
          <img src="/images/gallery1.jpg" alt="Галерея 1" className="rounded-lg shadow-lg" />
          <img src="/images/gallery2.jpg" alt="Галерея 2" className="rounded-lg shadow-lg" />
          <img src="/images/gallery3.jpg" alt="Галерея 3" className="rounded-lg shadow-lg" />
          {/* Добавьте остальные изображения */}
        </div>
      </section>
      <section id="reviews">
        <h2 className="text-3xl font-bold text-center mb-8">Отзывы</h2>
        <div className="review-grid" id="review-grid">
          {/* Отзывы будут загружены через JavaScript */}
        </div>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Центр Фехтования</p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        axios.get('https://yourdomain.com/api/news/')
          .then(function(response) {
            const newsGrid = document.getElementById('news-grid');
            response.data.forEach(newsItem => {
              const newsCard = document.createElement('div');
              newsCard.className = 'news-card';
              newsCard.innerHTML = `
                <h3>${newsItem.title}</h3>
                <p>${newsItem.content}</p>
              `;
              newsGrid.appendChild(newsCard);
            });
          })
          .catch(function(error) {
            console.error('Error fetching news:', error);
          });

        axios.get('https://yourdomain.com/api/reviews/')
          .then(function(response) {
            const reviewGrid = document.getElementById('review-grid');
            response.data.forEach(reviewItem => {
              const reviewCard = document.createElement('div');
              reviewCard.className = 'review-card';
              reviewCard.innerHTML = `
                <h3>${reviewItem.author}</h3>
                <p>${reviewItem.text}</p>
              `;
              reviewGrid.appendChild(reviewCard);
            });
          })
          .catch(function(error) {
            console.error('Error fetching reviews:', error);
          });
      });
    </script>
  </div>
);

export default Home;
