import React from "react";
import { Link } from "react-router-dom";
import "./Nawbar.css";

class Nawbar extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="nav-item ">
            <Link className="nav-link" to="/">
              MyTODØ
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TodoItem">
                  TodoItem
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Footer
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nawbar;
