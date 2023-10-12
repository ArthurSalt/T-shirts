import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { useWhyDidYouUpdate } from 'ahooks';
import qs from 'query-string';

import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../../../redux/slices/getItemsSlice';
import { setCurrentPage } from '../../../redux/slices/paginationSlice';
import { setFilters } from '../../../redux/slices/filterSlice';

import Category from './Filter/Category/Category';
import Sort from './Filter/Sort/Sort';
import ItemCard from './ItemCard/ItemCard';
import Pagination from './Pagination/Pagination';
import Skeleton from '../../Skeleton';
import { useNavigate } from 'react-router-dom';


const Home = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(true);
   const isMounted = useRef(false);
   const isSearch = useRef(false);



   const items = useSelector(state => state.items.items);
   const { categoryType, sortType, sortOrderType, searchValue } = useSelector(state => state.filter);
   const { currentPage, itemsPerPage } = useSelector(state => state.pages);

   const lastItem = itemsPerPage * currentPage;
   const firstItem = lastItem - itemsPerPage;
   const searchResult = [...items].filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()));
   const searchActive = searchValue ? searchResult : items;
   const currentItems = searchActive.slice(firstItem, lastItem);


   const getItems = async () => {
      try {
         setIsLoading(true)
         dispatch(fetchItems({ categoryType, sortType, sortOrderType }));
         dispatch(setCurrentPage(1));
         setIsLoading(false);
      } catch (error) {
         alert('Failed to get data from server')
      }
   }

   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         dispatch(
            setFilters(params)
         );
         isSearch.current = true;
      }
   }, [])

   useEffect(useCallback(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            category: categoryType,
            sortBy: sortType,
            order: sortOrderType,
         })
         navigate(`?${queryString}`)
      }
      isMounted.current = true;
   }), [categoryType, sortType, sortOrderType])

   useEffect(() => {
      if (!isSearch.current) {
         getItems()
      }
      isSearch.current = false;
   }, [categoryType, sortType, sortOrderType])

   console.log('Home rendered')
   useWhyDidYouUpdate('Home', { categoryType, sortType, sortOrderType, currentPage, itemsPerPage, items, searchValue });
   return (
      <>
         <section className='content_top'>
            <Category />
            <Sort />
         </section>
         <section className='items'>
            <h1 className='items_list_name'>All T-Shirts</h1>
            <div className="items_list">
               {isLoading
                  ? [...new Array(5)].map((_, idx) => <Skeleton key={idx} />)
                  : currentItems.map(obj => <ItemCard key={obj.id} {...obj} />)}
            </div>
         </section>
         <Pagination
            items={searchActive}
         />
      </>
   );
}

export default Home;