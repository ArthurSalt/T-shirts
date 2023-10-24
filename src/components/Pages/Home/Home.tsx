import React, { useEffect, useState, useRef } from 'react';
import qs from 'query-string';

import { IGetItemsSlice, fetchItems, selectItems } from '../../../redux/slices/getItemsSlice';
import { selectPages, setCurrentPage, setItemsPerPage } from '../../../redux/slices/paginationSlice';
import { IFilterSlice, selectFilter, setFilters } from '../../../redux/slices/filterSlice';

import Category from './Filter/Category/Category';
import Sort from './Filter/Sort/Sort';
import ItemCard from './ItemCard/ItemCard';
import Pagination from './Pagination/Pagination';
import Skeleton from '../../Skeleton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';


const Home = () => {
   const dispatch = useAppDispatch();
   const useSelector = useAppSelector;
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(true);
   const isMounted = useRef(false);
   const isSearch = useRef(false);



   const { items } = useSelector<IGetItemsSlice>(selectItems);
   const { categoryType, sortType, sortOrderType, searchValue } = useSelector<IFilterSlice>(selectFilter);
   const { currentPage, itemsPerPage } = useSelector<Record<string, number>>(selectPages);

   const lastItem = itemsPerPage * currentPage;
   const firstItem = lastItem - itemsPerPage;
   const searchResult = [...items].filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()));
   const searchActive = searchValue ? searchResult : items;
   const currentItems = searchActive.slice(firstItem, lastItem);


   const getItems = async () => {
      try {
         setIsLoading(true)
         dispatch(fetchItems({ categoryType, sortType, sortOrderType }));
         setIsLoading(false);
      } catch (error) {
         alert('Failed to get data from server')
      }
   };

   useEffect(() => {
      dispatch(setCurrentPage(1))
   }, [categoryType])

   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         dispatch(setFilters(params));
         dispatch(setCurrentPage(Number(params.page)));
         dispatch(setItemsPerPage(Number(params.limit)));
         isSearch.current = true;
      }
   }, [])

   useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            ...(categoryType ? { category: categoryType } : {}),
            sortBy: sortType,
            order: sortOrderType,
            page: currentPage,
            limit: itemsPerPage
         })
         navigate(`?${queryString}`)
      }
      isMounted.current = true;
   }, [categoryType, sortType, sortOrderType, itemsPerPage, currentPage])

   useEffect(() => {
      if (!isSearch.current) {
         getItems()
      }
      isSearch.current = false;
   }, [categoryType, sortType, sortOrderType, itemsPerPage, currentPage])

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