import React, { useContext } from 'react';
import { BookListContext } from '../contexts/BookListContext';

const NavBar = () => {
  const { books } = useContext(BookListContext);
  return (
    <div className='navbar'>
      <div>Kitap Listesi</div>
      <p>{books.length} tane kitap</p>
    </div>
  );
};

export default NavBar;
