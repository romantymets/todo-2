import React from "react";
import { Link } from "react-router-dom";

import "./Nawbar.css";

class Nawbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.state;

    return (
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="/">
            MyTODØ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {" "}
                  About{" "}
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
