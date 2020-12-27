import React from "react";

class Error extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="alert alert-danger" role="alert">
        {children}
      </div>
    );
  }
}

export default Error;
