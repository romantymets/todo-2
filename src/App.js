import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nawbar from "./Nawbar/Nawbar";
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";
import TodoItemPage from "./TodoItemPage/TodoItemPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Router>
            <Nawbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/todoitem/:_id">
                <TodoItemPage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
