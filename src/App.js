import React from "react";
import TodoConteiner from "./TodoConteiner/TodoConteiner";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <TodoConteiner></TodoConteiner>
        </div>
      </div>
    );
  }
}

export default App;
