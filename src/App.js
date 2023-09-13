import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';



// components
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import Header from './components/Header/Header';

// styles
import './reset.css';
import './App.css';






function App() {

  const [search, setSearch] = React.useState('');

  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <Header/>
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