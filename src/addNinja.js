import { Component} from 'react';

class AddNinja extends Component{
  state ={ 
    name: null,
    age: null,
    belt: null,
    id: null
   }
   
   onSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state)
   }

   onChange = (e) => {
     this.setState({
       [e.target.id]: e.target.value 
     })
   }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" onChange={this.onChange} />
          <label htmlFor="age">age</label>

          <input type="text" id="age" placeholder="Name" onChange={this.onChange} />
          <label htmlFor="belt">belt</label>

          <input type="text" id="belt" placeholder="Name" onChange={this.onChange} />
            <button>submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinja;