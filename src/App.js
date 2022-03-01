import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path='/' element={ <Login /> } />
      </Routes>
    </Provider>
  );
}

export default App;
