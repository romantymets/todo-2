import React from "react";

class Spiner extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"> </span>
        </div>
      </div>
    );
  }
}

export default Spiner;
