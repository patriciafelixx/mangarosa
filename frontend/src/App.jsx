import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Index from './pages/Index';
import Validate from './pages/Validate';
import RegisterForm from './pages/RegisterForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/registros" component={Index} />
            <Route path="/:slug/validar" component={Validate} />
            <Route path="/:slug/registrar" component={RegisterForm} />
        </Switch>
        <Footer />
    </BrowserRouter>
  )
}

export default App;