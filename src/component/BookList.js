import React, { useContext } from 'react';
import { BookListContext } from '../contexts/BookListContext';
import BookDetail from './BookDetail';

const BookList = () => {
  const { books } = useContext(BookListContext);

  return (
    <div className='book-list'>
      {books.length ? (
        <ul>
          {books.map((book) => {
            return <BookDetail book={book} key={book.id}></BookDetail>;
          })}
        </ul>
      ) : (
        <p>Henüz kitap eklenmedi</p>
      )}
    </div>
  );
};
export default BookList;
