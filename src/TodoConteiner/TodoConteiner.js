import React from "react";
import { uid } from "uid";
// import LoginContainer from "./containers/LoginContainer/LoginContainer";
import Form from "./Components/form/form";
import List from "./Components/list/List";
import Api from "../api/api";
import "./TodoConteiner.css";

class TodoConteiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      array: [],
      date: new Date(),
      isTodoItemsCreating: false,
      isTodoLoading: false,
      isTodoItemsRemoving: false,
      isTodoItemsUpdating: false,
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    this.setState({ isTodoLoading: true });
    // send a request to the server
    Api.get("/todo")
      .then((response) => {
        this.setState({ isTodoLoading: false });
        // take data from the server
        const { data } = response;
        //add data to the site
        this.setState({ array: data });
      })
      .catch((error) => {
        this.setState({ isTodoLoading: false });
        alert(error.message);
      });
  }

  onTextChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const oldArray = this.state.array;
    const inputText = this.state.inputText;
    this.setState({ isTodoItemsCreating: true });
    Api.post("/todo", {
      title: inputText,
      date: new Date(),
    })
      .then((response) => {
        //take data from srver
        this.setState({ isTodoItemsCreating: false });
        const { data } = response;
        const newTodo = data;
        // add data to the site component
        this.setState({
          array: [...oldArray, newTodo],
          inputText: "",
        });
      })
      .catch((error) => {
        // 2. if error
        this.setState({ isTodoItemsCreating: false });
        alert(error.message);
      });
    // add focus to input
    this.inputRef.current.focus();
    // clear input
    this.inputRef.current.value = "";
  };

  deleteTodo = (_id) => {
    const findIndexElement = this.state.array.findIndex(
      (todo) => todo._id === _id
    );
    // 1. send data to the server
    this.setState({ isTodoItemsRemoving: true });
    Api.remove(`/todo/${_id}`)
      .then(() => {
        this.setState({ isTodoItemsRemoving: false });
        // 3. remove data component from site
        const newArray = [...this.state.array];
        newArray.splice(findIndexElement, 1);
        this.setState({ array: newArray });
      })
      .catch((error) => {
        // 2. if error
        this.setState({ isTodoItemsRemoving: false });
        alert(error.message);
      });

    this.inputRef.current.focus();
    this.inputRef.current.value = "";
  };

  // deleteTodo =(id) => {
  //   this.setState({array: this.state.array.filter(arr => arr.id !== id)})
  // };

  onItemCheck = (_id) => (e) => {
    const checked = e.target.checked;
    this.setState({ isTodoItemsUpdating: _id });
    Api.patch(`/todo/${_id}`, { completed: checked })
      .then(() => {
        this.setState({ isTodoItemsUpdating: "" });
        const carrentTodo = this.state.array.find((todo) => todo._id === _id);
        carrentTodo.completed = checked;
        const newArray = [];
        this.state.array.forEach((todo) => {
          if (todo._id === _id) {
            newArray.push(carrentTodo);
          } else {
            newArray.push(todo);
          }
          this.setState({ array: newArray });
        });
      })
      .catch((error) => {
        // 2. if error
        this.setState({ isTodoItemsUpdating: false });
        alert(error.message);
      });
  };
  getComplied = () => {
    return this.state.array.filter((todo) => todo.completed).length;
  };

  render() {
    const {
      inputText,
      array,
      date,
      isTodoItemsCreating,
      isTodoLoading,
      isTodoItemsRemoving,
      isTodoItemsUpdating,
    } = this.state;
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
                isTodoItemsCreating={isTodoItemsCreating}
              />
            </div>
            <List
              inputText={inputText}
              isTodoLoading={isTodoLoading}
              onTextChange={this.onTextChange}
              array={array}
              deleteTodo={this.deleteTodo}
              onItemCheck={this.onItemCheck}
              isTodoItemsRemoving={isTodoItemsRemoving}
              isTodoItemsUpdating={isTodoItemsUpdating}
            />
            {isTodoLoading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden"> </span>
                </div>
              </div>
            ) : null}
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
