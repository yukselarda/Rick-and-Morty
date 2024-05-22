// src/App.js
import React from 'react';
import HomePage from './pages/HomePage';
import './styles/styles.css';

const App = () => {
  return (
    <>
    <h1 className='c-white text-aling-center'>Rick And Morty</h1>
      <div className="App">
        <HomePage />
      </div>
    </>

  );
};

export default App;
