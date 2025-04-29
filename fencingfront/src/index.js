// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import EnrollmentForm from './components/EnrollmentForm';
import './index.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/news" component={News} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/enrollment" component={EnrollmentForm} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
