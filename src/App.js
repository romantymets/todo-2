import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nawbar from "./Nawbar/Nawbar";
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";
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
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
