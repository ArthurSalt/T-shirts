import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import logoPng from './assets/img/t_shirt_logo.png';
import cartIcon from './assets/img/cart_icon.png';


import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';

import './reset.css';
import './App.css';





function App() {


  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <header className='header'>
            <Link to="/" className="header_logo">
              <div className="header_icon">
                <img className='logo_img' src={logoPng} alt="logo_img" />
              </div>
              <div className='logo_text'>
                <h4>ALL T-SHIRTS</h4>
                <p>Best T-shirts all in one place</p>
              </div>

            </Link>
            <div className='search'>
              <input className='search_input' type="text" placeholder='search...' />
            </div>
            <div className="cart_wrapper">
              <Link to='/cart' className="cart">
                <p>$4050</p>
                <p>|</p>
                <img className='cart_img' src={cartIcon} alt="cart_logo" />
                <b>5</b>
              </Link>
            </div>
          </header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
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