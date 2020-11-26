import React from "react";
import Button from "../../../components/Button/Button";

// import LoginContainer from "./containers/LoginContainer/LoginContainer";

class Form extends React.Component {
  render() {
    const { onTextChange, onButtonClick, inputRef } = this.props;
    return (
      <>
        <form onSubmit={onButtonClick}>
          <div className="form-group">
            <input
              onChange={onTextChange}
              ref={inputRef}
              className="form-control"
            />
          </div>
          <Button className={"btn btn-primary"}>Add Name</Button>
        </form>
      </>
    );
  }
}

export default Form;
