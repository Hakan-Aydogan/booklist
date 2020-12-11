import React, { useContext } from 'react';
import { BookListContext } from '../contexts/BookListContext';
const BookDetail = ({ book }) => {
  const { dispatch } = useContext(BookListContext);

  return (
    <li
      onClick={() => {
        dispatch({ type: 'REMOVE_BOOK', id: book.id });
      }}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  );
};
export default BookDetail;
