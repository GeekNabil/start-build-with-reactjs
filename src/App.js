import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Mohamed", age: 25},
      {name: "Ahmed", age: 20},
      {name: "Omar", age: 10}
    ]
  };

  switchNameHandler = (changeName, changeAge) => {
    this.setState({
    persons: [
      {name: "Mohamed", age: 25},
      {name: "Ahmed", age: 20},
      {name: changeName, age: changeAge}
    ]
  })
  }

  changeNameHandler = (event) => {
    this.setState({
    persons: [
      {name: "Mohamed", age: 25},
      {name: "Ahmed", age: 20},
      {name: event.target.value, age: 10}
    ]
  })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1>Hello from React App.</h1>
        <p>This is really working.</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Fayrous", 5)}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Mama", 40)}>click to change next name and age!</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.changeNameHandler}/>
      </div>
    );
  }
}

export default App;
