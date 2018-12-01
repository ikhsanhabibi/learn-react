import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Ikhsan",
        age: 20
      },
      {
        name: "Habibi",
        age: 19
      }
    ],
    otherState: "some value"
  };

  switchNameHandler = newName => {
    // alert("was clicked");
    // DON't DO THIS: this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        {
          name: newName,
          age: 20
        },
        {
          name: "Habibisss",
          age: 19
        }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: "Ikhsan",
          age: 20
        },
        {
          name: event.target.value,
          age: 19
        }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>This is p</p>

        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Maximilian")}
        >
          Switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangeHandler}
        />

        <Person name="Ikhsan Habibi" age="24">
          Hobby: Singing
        </Person>
      </div>
    );
  }
}

export default App;
