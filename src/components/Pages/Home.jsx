import React, { useState, useEffect } from 'react';

import Category from '../Category/Category';
import Sort from '../Sort/Sort';
import ItemCard from '../ItemCard/ItemCard';

import Pagination from '../Pagination/Pagination';

const Home = ({ search }) => {
   const [items, setItems] = useState([]);
   const [categoryType, setCategoryType] = useState(0);
   const [sortType, setSortType] = useState('name');
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(10);

   const lastItem = itemsPerPage * currentPage;
   const firstItem = lastItem - itemsPerPage;
   const currentItems = items.slice(firstItem, lastItem);


   const url = 'https://64efad78219b3e2873c4c415.mockapi.io/items?' +
      `${categoryType ? `category=${categoryType}` : ''}` +
      `&sortBy=${sortType}`;

   useEffect(() => {
      fetch(url)
         .then((res) => res.json())
         .then((data) => setItems(data));

      setCurrentPage(1)
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
               {currentItems
                  .filter(obj => obj.name.toLowerCase().includes(search.toLowerCase()))
                  .map(obj =>
                     <ItemCard key={obj.id} {...obj} />)}
            </div>
         </section>
         <Pagination
            items={items}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage} />
      </>
   );
}

export default Home;