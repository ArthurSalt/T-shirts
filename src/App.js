import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home/Home';
import Cart from './components/Pages/Cart/Cart';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';

import './reset.css';
import './App.css';


function App() {

  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/:id' element={<ProductCard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

// npm install -g json-server
// npm i -D concurrently
// npm run server
// npm run dev

// {
//    "name": "tshirt",
//    "imageUrl": "https://storage.vsemayki.ru/images/0/1/1879/1879869/previews/people_5_man_jacket_front_black_500.jpg",
//    "price": 200,
//    "size": ["S", "M", "L", "XL", "2XL", "3XL"]
// }