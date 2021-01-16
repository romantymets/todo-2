import React from "react";
import { withRouter } from "react-router-dom";
import Api from "../api/api";

class TodoItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: undefined,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { _id } = match.params;
    Api.get(`/todo/${_id}`)
      .then((response) => {
        const { data } = response;
        this.setState({ todo: data });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  onButtonClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { todo = {} } = this.state;
    return (
      <div className="card">
        <h5 className="card-header">Todo</h5>
        <div className="card-body">
          <h5 className="card-title"> {todo.title} </h5>
          <button className="btn btn-primary" onClick={this.onButtonClick}>
            Go back
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(TodoItemPage);
