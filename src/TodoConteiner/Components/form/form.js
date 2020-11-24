import React from 'react'

// import LoginContainer from "./containers/LoginContainer/LoginContainer";


class Form extends React.Component {

  render() {
    const { onTextChange, onButtonClick, inputRef } = this.props;
    return (
      <div>
        <form onSubmit={onButtonClick}>
          <div className="form-group" >
          <input onChange={onTextChange} ref={inputRef} className="form-control"
          />
          </div>
          <button className={"btn btn-primary"}>
            Add Todo
          </button>
        </form>
      </div>

    )
  }
}

export default Form;