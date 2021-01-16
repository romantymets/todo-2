import React from "react";
import { withRouter } from "react-router-dom";

import Button from "../../../components/Button/Button";
import Spiner from "../../../components/Spiner/Spiner";

import style from "./List.module.css";

class List extends React.Component {
  onItemClick = (todo) => () => {
    this.props.history.push(`/todoitem/${todo._id}`);
  };

  render() {
    const {
      array,
      deleteTodo,
      onItemCheck,
      todoItemsRemoving,
      todoItemsUpdating,
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <ul className={style.ulContainer}>
            {array.map((todo, index) => (
              <div onClick={this.onItemClick(todo)}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <li key={todo._id} className={style.item}>
                        <div
                          className={
                            todo.completed
                              ? style.liConteinerCheckbox
                              : style.liConteiner
                          }
                        >
                          <div className={`col-1`}>
                            <input
                              disabled={todoItemsUpdating === todo._id}
                              type="checkbox"
                              checked={todo.completed}
                              onChange={onItemCheck(todo._id)}
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                          <div className="col-1">{index + 1}</div>
                          <div className="col-8">{todo.title} </div>
                          <div className="col-2">
                            <Button
                              disabled={todoItemsRemoving === todo._id}
                              isLoading={todoItemsRemoving === todo._id}
                              type="buttun"
                              className="btn btn-danger"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteTodo(todo._id);
                              }}
                            >
                              {" "}
                              x
                            </Button>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(List);
