import React from 'react';
import { getDogs } from '../../api'

export class MyDogs extends React.PureComponent {

  state = {
    dogs: []
  }

  componentDidMount() {
    getDogs().then((responseOfDogs) => {
      this.setState({
        dogs: responseOfDogs
      })
    })
  }

  render() {
    return (
      <ul>
        {
          this.state.dogs.map((dog) =>
            <li key={dog.id}>{dog.name}</li>
          )
        }
      </ul>
    )
  }

}