import React from 'react';
import BookList from './component/BookList';
import NavBar from './component/NavBar';
import BookListContextProvider from './contexts/BookListContext';
import NewBookForm from '../src/component/NewBookForm';

function App() {
  return (
    <div className='App'>
      <BookListContextProvider>
        <NavBar></NavBar>
        <BookList></BookList>
        <NewBookForm></NewBookForm>
      </BookListContextProvider>
    </div>
  );
}

export default App;
