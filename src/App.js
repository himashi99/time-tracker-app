import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyDogs } from './ui/features';
import { Cat} from './ui/components/cats'
import { TorontoLitter} from './ui/features/toronto-litter'

class App extends Component {
  
  render() {
    const TheCat = [
    { name: "Mary",message: "Yelp" },
    { name: "Joe",message: "Helloo" },
    { name: "Bob",message: "Whatsup" },
  ]
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
            Learn React
          </a>
        </header>
        <MyDogs />
        <TorontoLitter cats={TheCat}/>
      </div>
    );
  }
}

export default App;
