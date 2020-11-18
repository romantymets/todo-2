import React from 'react'
// import LoginContainer from "./containers/LoginContainer/LoginContainer";


class Form extends React.Component {
constructor() {
  super();
}



  render() {
    const { onTextChange , onButtonClick , inputRef } = this.props;
    return (
      <div>
      <form onSubmit={onButtonClick} >
      <input onChange={onTextChange} ref={inputRef}/> <button  className={"btn btn-primary" }> Add Todo </button>
      </form>
      </div>

    )
  }
}

export default Form;