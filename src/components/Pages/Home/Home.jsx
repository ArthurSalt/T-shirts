import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../../redux/slices/getItemsSlice';
import { setCurrentPage } from '../../../redux/slices/paginationSlice';

import Category from './Filter/Category/Category';
import Sort from './Filter/Sort/Sort';
import ItemCard from './ItemCard/ItemCard';
import Pagination from './Pagination/Pagination';


const Home = () => {
   const dispatch = useDispatch();

   const items = useSelector(state => state.items.items);
   const { categoryType, sortType, searchValue } = useSelector(state => state.filter);
   const { currentPage, itemsPerPage } = useSelector(state => state.pages);

   const lastItem = itemsPerPage * currentPage;
   const firstItem = lastItem - itemsPerPage;
   const searchResult = items.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()));
   const searchActive = searchValue ? searchResult : items;
   const currentItems = searchActive.slice(firstItem, lastItem);


   const getItems = async () => {
      try {
         dispatch(fetchItems({ categoryType, sortType }));
         dispatch(setCurrentPage(1));
      } catch (error) {
         alert('Failed to get data from server')
      }
   }

   useEffect(() => {
      getItems();
   }, [categoryType, sortType])



   return (
      <>
         <section className='content_top'>
            <Category />
            <Sort />
         </section>
         <section className='items'>
            <h1 className='items_list_name'>All T-Shirts</h1>
            <div className="items_list">
               {currentItems.map(obj =>
                  <ItemCard key={obj.id} {...obj} />)}
            </div>
         </section>
         <Pagination
            items={searchActive}
         />
      </>
   );
}

export default Home;