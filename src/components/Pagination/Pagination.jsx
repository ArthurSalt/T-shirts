import React from 'react';

import './Pagination.scss'

const Pagination = ({ items, currentPage, setCurrentPage, itemsPerPage }) => {
   const pages = [];

   for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pages.push(i);
   }

   return (
      <div className='pagination'>
         <ul className='pages_row'>
            {pages.map((num, i) => (
               <li onClick={() => setCurrentPage(num)} className={currentPage === i + 1 ? 'active page' : 'page'} key={num}>{num}</li>
            ))}
         </ul>
      </div>
   );
}

export default Pagination;