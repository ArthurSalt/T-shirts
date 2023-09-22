import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {useSelector} from 'react-redux';

import Category from '../Category/Category';
import Sort from '../Sort/Sort';
import ItemCard from '../ItemCard/ItemCard';
import Pagination from '../Pagination/Pagination';


const Home = ({ search }) => {
   const [items, setItems] = useState([]);
   const categoryType = useSelector(state => state.filter.categoryType)
   const sortType = useSelector(state => state.filter.sortType)
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(10);

   const lastItem = itemsPerPage * currentPage;
   const firstItem = lastItem - itemsPerPage;
   const currentItems = items.slice(firstItem, lastItem);

   const url = 'https://64efad78219b3e2873c4c415.mockapi.io/items?' +
      `${categoryType ? `category=${categoryType}` : ''}` +
      `&sortBy=${sortType}`;

   useEffect(() => {

      axios.get(url).then((res) => setItems(res.data))
      setCurrentPage(1)

   }, [categoryType, sortType, search])



   return (
      <>
         <section className='content_top'>
            <Category/>
            <Sort/>
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