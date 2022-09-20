import React from 'react';
import logo from './logo.svg';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index'
import './index.css'
import  NavBar from './components/NavBar';
import Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/CartContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <NavBar/>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/" element={ <ItemDetailContainer/>} />
      </Routes>
      <CartProvider/>
      </BrowserRouter>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Aprendamos React con CoderHouse
          <ItemListContainer greeting = 'Texto de prueba'/>
          <ItemDetailContainer itemid={3}/>
          <Card/>
        </a>
      </header>
    </div>
  );
} 

export default App;


