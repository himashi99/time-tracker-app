import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyDogs, MyCats } from './ui/features';


class App extends Component {

  // after a 1 second i want to change the cat food

  // first create some state
  state = {
    momsCatFood: 'grose cat beef'
  }

  // 2 change the state
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        momsCatFood: 'milk, yumm'
      })
    }, 3000);
  }


  render() {
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



        <MyDogs catFood={this.state.momsCatFood}/>




        <MyCats message={'Meow'} />



      </div>
    );
  }
}

export default App;
