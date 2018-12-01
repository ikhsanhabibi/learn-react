import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>This is p</p>
        <Person name="Ikhsan" age="22" />
        <Person name="Habibi" age="23" />
      </div>
    );
  }
}

export default App;
