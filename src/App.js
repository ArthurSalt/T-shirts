import React, { useEffect } from 'react';

import logoPng from './assets/img/t_shirt_logo.png';
import cartIcon from './assets/img/cart_icon.png';
import Category from './components/Category/Category';
import Sort from './components/Sort/Sort';
import ItemCard from './components/ItemCard/ItemCard';

import './reset.css';
import './App.css';





function App() {
  const [items, setItems] = React.useState([]);
  const categories = ['All', 'T-Shirt', 'Hoodie', 'Longsleeve', 'Sweatshirt'];

  useEffect(() => {
    fetch("https://64efad78219b3e2873c4c415.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">
          <header className='header'>
            <div className="header_logo">
              <div className="header_icon">
                <img className='logo_img' src={logoPng} alt="logo_img" />
              </div>
              <div className='logo_text'>
                <h4>ALL T-SHIRTS</h4>
                <p>Best T-shirts all in one place</p>
              </div>

            </div>
            <div className='search'>
              <input className='search_input' type="text" placeholder='search...' />
            </div>
            <div className="cart_wrapper">
              <div className="cart">
                <p>$4050</p>
                <p>|</p>
                <img className='cart_img' src={cartIcon} alt="cart_logo" />
                <b>5</b>
              </div>
            </div>
          </header>
          <section className='content_top'>
            <Category />
            <Sort />
          </section>
          <section className='items'>
            <h1 className='items_list_name'>All T-Shirts</h1>
            <div className="items_list">
              {items.map(obj => 
                <ItemCard {...obj}/>)}
            </div>
          </section>


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