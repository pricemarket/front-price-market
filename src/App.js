import React from 'react';
import './App.css';
import AppMain from "./components/index";
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import RoutesNav from './data/Routes';
import Login from './components/login';
import ClienteForm from './components/criarCliente';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RoutesNav />
    </BrowserRouter>
  );
}

export default App;