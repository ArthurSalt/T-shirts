import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/paginationSlice';

import './Pagination.scss'

const Pagination = ({ items}) => {

   const dispatch = useDispatch();
   const pages = [];
   const currentPage = useSelector(state => state.pages.currentPage)
   const itemsPerPage = useSelector(state => state.pages.itemsPerPage)

   for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pages.push(i);
   }

   return (
      <div className='pagination'>
         <ul className='pages_row'>
            {pages.map((num, i) => (
               <li onClick={() => dispatch(setCurrentPage(num))} className={currentPage === i + 1 ? 'active page' : 'page'} key={num}>{num}</li>
            ))}
         </ul>
      </div>
   );
}

export default Pagination;