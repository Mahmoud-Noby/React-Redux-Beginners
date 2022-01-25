import Ninjas from './Ninjas';
import AddNinja from './addNinja';
import React, {Component} from 'react';
class App extends Component {
  state = {
    ninjas: [
      {name: 'Runo', age: '20', belt: 'green' , id: 1},
      {name: 'Tio', age: '27', belt: 'yellow' , id: 2},
      {name: 'Lymdi', age: '37', belt: 'black' , id: 3},
    ]
  }

  addNinja = (newNinja) => {
    console.log(newNinja);
    newNinja.id = Math.random();
    let newNinjasArr = [ ...this.state.ninjas, newNinja];
    this.setState({
      ninjas: newNinjasArr
    })
  }

  deleteNinja = (id) => {
    console.log(id);
    let filteredNinjas = this.state.ninjas.filter( ninja => {
      return ninja.id !== id;
    })

    this.setState({
      ninjas: filteredNinjas
    })

  }

  render() {

    return (
      <div className="App">
        <h1>Welcome My First React App ':)'</h1> 
        <Ninjas  ninjas={this.state.ninjas}  deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}  />
      </div>
    );
  }
}

export default App;
