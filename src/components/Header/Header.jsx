import React from 'react';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import CartPanel from './CartPanel/CartPanel';

const Header = () => {
   return (
      <header className='header'>
         <Logo />
         <Search />
         <CartPanel/>
      </header>
   );
}

export default Header;