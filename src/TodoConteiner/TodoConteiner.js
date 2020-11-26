import React from "react";
import { uid } from "uid";
// import LoginContainer from "./containers/LoginContainer/LoginContainer";
import Form from "./Components/form/form";
import List from "./Components/list/List";
import "./TodoConteiner.css";

class TodoConteiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      array: [],
    };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }

  onTextChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const oldArray = this.state.array;
    const inputText = this.state.inputText;
    this.setState({
      array: [
        ...oldArray,
        {
          inputText: inputText,
          id: uid(16),
          checkk: false,
        },
      ],
    });
    this.inputRef.current.focus();
    this.inputRef.current.value = "";
  };

  deleteTodo = (id) => {
    const findElement = this.state.array.findIndex((arr) => arr.id === id);
    const newArray = [...this.state.array];
    newArray.splice(findElement, 1);
    this.setState({ array: newArray });
    this.inputRef.current.focus();
    this.inputRef.current.value = "";
  };

  // deleteTodo =(id) => {
  //   this.setState({array: this.state.array.filter(arr => arr.id !== id)})
  // };

  onItemCheck = (id) => (e) => {
    const checket = e.target.checked;
    const carrentArr = this.state.array.find((arr) => arr.id === id);
    carrentArr.checkk = checket;
    const newArray = [];
    this.state.array.forEach((arr) => {
      if (arr.id === id) {
        newArray.push(carrentArr);
      } else {
        newArray.push(arr);
      }
      this.setState({ array: newArray });
    });
  };
  getComplied = () => {
    return this.state.array.filter((arr) => arr.checkk).length;
  };

  render() {
    const { inputText, array } = this.state;
    const inputRef = this.inputRef;
    return (
      <div className="container">
        <Form
          inputText={inputText}
          onTextChange={this.onTextChange}
          onButtonClick={this.onButtonClick}
          inputRef={inputRef}
        />
        <List
          inputText={inputText}
          onTextChange={this.onTextChange}
          array={array}
          deleteTodo={this.deleteTodo}
          onItemCheck={this.onItemCheck}
        />
        <footer>
          <div>Total : {array.length}</div>
          <div>Completed :{this.getComplied()}</div>
        </footer>
      </div>
    );
  }
}

export default TodoConteiner;
