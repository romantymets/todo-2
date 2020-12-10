import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nawbar from "./Nawbar/Nawbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Router>
            <Nawbar></Nawbar>
            <Switch>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/">
                <HomePage></HomePage>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
