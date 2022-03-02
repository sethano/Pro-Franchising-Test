import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import './App.css';
import Provider from './context/Provider';
import { Login, Home, NewProduct } from './pages/index';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path='/' element={ <Login /> } />
        <Route exact path='/home' element={ <Home /> } />
        <Route exact path='/product/new' element={ <NewProduct />} />
      </Routes>
    </Provider>
  );
}

export default App;
