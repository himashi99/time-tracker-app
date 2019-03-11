import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyDogs } from './ui/features';
import { Cat} from './ui/components/cats'
import { TorontoLitter} from './ui/features/toronto-litter'
import {TimeInput} from './ui/features/time-input'

class App extends Component {
  
  render() {
    const TheCat = [
    { name: "Mary",message: "Yelp" },
    { name: "Joe",message: "Helloo" },
    { name: "Bob",message: "Whatsup" },
  ]
    return (
      <div className="App">
        {/* <MyDogs />
        <TorontoLitter cats={TheCat}/> */}
        <TimeInput />
      </div>
    );
  }
}

export default App;
