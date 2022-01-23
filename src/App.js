import Nested from './Nested'
import React, {Component} from 'react';
class App extends Component {
  state = {
    ninjas: [
      {name: 'Runo', age: '20', gender: 'male' , id: 1},
      {name: 'Tio', age: '27', gender: 'male' , id: 2},
      {name: 'Lymdi', age: '37', gender: 'male' , id: 3},
    ]
  }
  render() {

    return (
      <div className="App">
        <h1>Welcome My First React App ':)'</h1> 
        <Nested  ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
