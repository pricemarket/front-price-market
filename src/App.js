import React from 'react';
import './App.css';
import RoutesNav from './data/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RoutesNav />
    </BrowserRouter>
  );
}

export default App;