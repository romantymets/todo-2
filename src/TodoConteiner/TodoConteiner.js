import React from 'react'
// import LoginContainer from "./containers/LoginContainer/LoginContainer";
import Form from "./Components/form/form"
import './TodoConteiner.css';
import List from "./Components/list/List";



class TodoConteiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      array: [],
    };
    this.inputRef = React.createRef()
  }
  componentDidMount() { this.inputRef.current.focus();
  }

  onTextChange = (e) => {
    this.setState({ inputText: e.target.value, })
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const oldArray = this.state.array;
    const inputText = this.state.inputText;
    this.setState({
      array: [{
        inputText: inputText
      }, ...oldArray]}
      );
    this.inputRef.current.focus()
    this.inputRef.current.value = "";
  };

  render() {
    const {inputText, array } = this.state;
    const inputRef = this.inputRef;
    return (
      <div>
      <Form inputText = {inputText}
            onTextChange ={this.onTextChange}
            onButtonClick = {this.onButtonClick}
            inputRef ={inputRef}

      />
      <List inputText = {inputText}
            onTextChange ={this.onTextChange}
            array = {array}

      />
      </div>
    )
  }
}

export default TodoConteiner;