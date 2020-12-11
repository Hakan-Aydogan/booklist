import React, { useContext, useState } from 'react';
import { BookListContext } from '../contexts/BookListContext';

const NewBookForm = () => {
  const { dispatch } = useContext(BookListContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author } });
    setAuthor('');
    setTitle('');
  };

  return (
    <div className='new-form'>
      <form onSubmit={HandleSubmit}>
        <input
          type='text'
          placeholder='Kitap adı'
          value={title}
          onChange={(e) => setTitle(e.target.value)}></input>
        <input
          type='text'
          placeholder='Yazar'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}></input>
        <input type='submit' value='Ekle' />
      </form>
    </div>
  );
};

export default NewBookForm;
