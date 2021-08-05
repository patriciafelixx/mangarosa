import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Index from './pages/Index';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Index />
      <Footer />
    </BrowserRouter>
  )
}

export default App;