import React from "react";
import Button from "../../../components/Button/Button";

// import LoginContainer from "./containers/LoginContainer/LoginContainer";

class Form extends React.Component {
  render() {
    const { onTextChange, onButtonClick, inputRef } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={onButtonClick}>
                <div className="form-group">
                  <input
                    onChange={onTextChange}
                    ref={inputRef}
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Please enter</div>
                </div>
                <Button className={"btn btn-primary"}>Add Todo</Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
