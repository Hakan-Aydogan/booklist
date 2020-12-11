import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BookListContext = createContext();

const BookListContextProvider = (props) => {
  const getLocalData = () => {
    const localData = localStorage.getItem('books');
    console.log(JSON.parse(localData));
    return localData ? JSON.parse(localData) : [];
  };

  const [books, dispatch] = useReducer(bookReducer, [], getLocalData);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookListContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookListContextProvider;
