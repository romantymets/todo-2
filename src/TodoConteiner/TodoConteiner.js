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
      date: new Date(),
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
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
      inputText: "",
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
    const { inputText, array, date } = this.state;
    const inputRef = this.inputRef;
    return (
      <div className="container">
        <div className="row ">
          <div className="col">
            <h1 className="color"> Add Todo </h1>
            <div className="col">
              <Form
                inputText={inputText}
                onTextChange={this.onTextChange}
                onButtonClick={this.onButtonClick}
                inputRef={inputRef}
              />
            </div>
            <List
              inputText={inputText}
              onTextChange={this.onTextChange}
              array={array}
              deleteTodo={this.deleteTodo}
              onItemCheck={this.onItemCheck}
            />
            <div className="row">
              <div className="col">
                <footer>
                  <div>Total : {array.length}</div>
                  <div>Completed :{this.getComplied()}</div>
                  <clock> {date.toLocaleTimeString()}</clock>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoConteiner;
