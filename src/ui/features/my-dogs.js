import React from 'react';
import { getDogs } from '../../api'


export class MyDogs extends React.PureComponent {

  state = {
    dogs: [],
    food: ''
  }

  componentDidMount() {

    setTimeout(() => {
      
      this.setState({
        food: 'beef'
      })

      console.log('done')
    }, 2000)



    getDogs().then((otherStuff) => {
      console.log('annonamouse', otherStuff)
    })
  }

  render() {
    return (
      <React.Fragment>
        <p>Dog food is: { this.state.food }</p>
        <p>Cat food is: { this.props.catFood }</p>
        <ul>
          {
            this.state.dogs.map((dog) =>
              <li key={dog.id}>{dog.name}</li>
            )
          }
        </ul>
      </React.Fragment>
    )
  }

}