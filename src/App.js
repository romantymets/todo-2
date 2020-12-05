import React from "react";
import TodoConteiner from "./TodoConteiner/TodoConteiner";
import Nawbar from "./Nawbar/Nawbar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nawbar></Nawbar>
          <TodoConteiner></TodoConteiner>
        </div>
      </div>
    );
  }
}

export default App;
