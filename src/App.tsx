import React, { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home/Home';
import Header from './components/Header/Header';

import './reset.css';
import './App.scss';

const Cart = lazy(() => import(/* webpackChunkName: 'Cart' */ './components/Pages/Cart/Cart'));
const ProductCard = lazy(() => import(/* webpackChunkName: 'ProductCard' */ './components/ProductCard/ProductCard'));

function App() {

  return (
    <div className="wrapper">
      
      <main className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}> <Cart /> </Suspense>} />
            <Route path='/cart/:id' element={<Suspense fallback={<div>Loading...</div>}> <ProductCard /> </Suspense>} />
          </Routes>
        </div>
      </main>
      <footer className='footer'>FOOTER</footer>
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