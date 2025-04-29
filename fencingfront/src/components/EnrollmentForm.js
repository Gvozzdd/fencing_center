// src/components/EnrollmentForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    style: 'шпаги',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let errors = {};
    if (!data.name) {
      errors.name = 'Имя обязательно';
    }
    if (!data.email) {
      errors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email некорректен';
    }
    if (!data.phone) {
      errors.phone = 'Телефон обязателен';
    } else if (!/^\d{10,15}$/.test(data.phone)) {
      errors.phone = 'Телефон некорректен';
    }
    if (!data.age) {
      errors.age = 'Возраст обязателен';
    } else if (isNaN(data.age) || parseInt(data.age) <= 0) {
      errors.age = 'Возраст должен быть числом больше 0';
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      axios.post('https://yourdomain.com/enrollment/', formData)
        .then(response => {
          setResponseMessage('Вы успешно записались на секцию!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            age: '',
            style: 'шпаги',
          });
          setErrors({});
        })
        .catch(error => {
          setResponseMessage('Ошибка при записи на секцию.');
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Запись на секцию по фехтованию</h1>
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
        <section id="enrollment">
          <h2 className="text-3xl font-bold text-center mb-8">Запись на секцию по фехтованию</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Телефон:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Возраст:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </div>
            <div className="mb-6">
              <label htmlFor="style" className="block text-gray-700 font-bold mb-2">Стиль фехтования:</label>
              <select
                id="style"
                name="style"
                value={formData.style}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="шпаги">Фехтование на шпагах</option>
                <option value="рапиры">Фехтование на рапирах</option>
                <option value="сабли">Фехтование на саблях</option>
                <option value="коляски">Фехтование на колясках</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Записаться</button>
            </div>
            <div className="response-message">{responseMessage}</div>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Центр Фехтования</p>
      </footer>
    </div>
  );
};

export default EnrollmentForm;
