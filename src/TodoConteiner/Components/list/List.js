import React from "react";
import style from "./List.module.css";
import Button from "../../../components/Button/Button";

class List extends React.Component {
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
                          />
                        </div>
                        <div className="col-1">{index + 1}</div>
                        <div className="col-8">{todo.title} </div>
                        <div className="col-2">
                          <Button
                            disabled={todoItemsRemoving}
                            todoLoadin={todoItemsRemoving}
                            type="buttun"
                            className="btn btn-danger"
                            onClick={() => deleteTodo(todo._id)}
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
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
