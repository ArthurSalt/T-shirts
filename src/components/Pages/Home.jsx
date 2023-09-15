import React, { useEffect } from 'react';

import Category from '../Category/Category';
import Sort from '../Sort/Sort';
import ItemCard from '../ItemCard/ItemCard';

const Home = ({search}) => {
   const [items, setItems] = React.useState([]);
   const [categoryType, setCategoryType] = React.useState(0);
   const [sortType, setSortType] = React.useState('name');

   const url = 'https://64efad78219b3e2873c4c415.mockapi.io/items?' + 
   `${categoryType ? `category=${categoryType}` : ''}` + 
   `&sortBy=${sortType}`;

   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => setItems(data));
   }, [categoryType, sortType, search])

   return (
      <>
         <section className='content_top'>
            <Category categoryType={categoryType} setCategoryType={setCategoryType} />
            <Sort sortType={sortType} setSortType={setSortType} />
         </section>
         <section className='items'>
            <h1 className='items_list_name'>All T-Shirts</h1>
            <div className="items_list">
               {items
               .filter(obj => obj.name.toLowerCase().includes(search.toLowerCase()))
               .map(obj =>
                  <ItemCard key={obj.id} {...obj} />)}
            </div>
         </section>
      </>
   );
}

export default Home;