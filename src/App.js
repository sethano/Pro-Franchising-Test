import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import './App.css';
import Provider from './context/Provider';
import Pages from './pages/index';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path='/' element={ <Pages.Login /> } />
        <Route exact path='/home' element={ <Pages.Home /> } />
      </Routes>
    </Provider>
  );
}

export default App;
