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
      array: [...oldArray, {
        inputText: inputText,
        id: oldArray.length+1,
        check: false
      }]}
      );
    this.inputRef.current.focus();
    this.inputRef.current.value = "";
  };

 deleteTodo = (id) => {
   const findElement =  this.state.array.findIndex(arr => (arr.id === id));
   const newArray = [...this.state.array];
   newArray.splice(findElement, 1);
   this.setState({array: newArray });
   this.inputRef.current.focus();
   this.inputRef.current.value = "";
 };

  // deleteTodo =(id) => {
  //   this.setState({array: this.state.array.filter(arr => arr.id !== id)})
  // };

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
            deleteTodo ={this.deleteTodo}

      />
      </div>
    )
  }
}

export default TodoConteiner;