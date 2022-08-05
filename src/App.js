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

function App() {
  return (
    <div className="App">
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
          <NavBar/>
          <ItemListContainer greeting = 'Texto de prueba'/>
          <Card/>
        </a>
      </header>
    </div>
  );
} 

export default App;


