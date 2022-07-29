import logo from './logo.svg';
import './app.css';
import './card.css';
import 'bootstrap/dist/css/bootstrap.css';
import ColorSchemesExample from './components/NavBar';
import Card from './components/Card';

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
          <ColorSchemesExample/>
          <Card/>
        </a>
      </header>
    </div>
  );
} 

export default App;


