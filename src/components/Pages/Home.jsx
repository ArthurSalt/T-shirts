import React, {useEffect} from 'react';

import Category from '../Category/Category';
import Sort from '../Sort/Sort';
import ItemCard from '../ItemCard/ItemCard';

const Home = () => {

   const [items, setItems] = React.useState([]);
   
   useEffect(() => {
      fetch("https://64efad78219b3e2873c4c415.mockapi.io/items")
         .then((res) => res.json())
         .then((data) => setItems(data));
   }, [])

   return (
      <>
         <section className='content_top'>
            <Category />
            <Sort />
         </section>
         <section className='items'>
            <h1 className='items_list_name'>All T-Shirts</h1>
            <div className="items_list">
               {items.map(obj =>
                  <ItemCard {...obj} />)}
            </div>
         </section>
      </>
   );
}

export default Home;