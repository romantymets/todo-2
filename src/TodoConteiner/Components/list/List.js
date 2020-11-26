import React from "react";
import style from "./List.module.css";
import Button from "../../../components/Button/Button";

class List extends React.Component {
  render() {
    const { array, deleteTodo, onItemCheck } = this.props;
    return (
      <div>
        <ul className={style.ulContainer}>
          {array.map((arr, index) => (
            <li key={arr.id} className={style.item}>
              <div
                className={`${
                  arr.checkk ? style.liConteinerCheckbox : style.liConteiner
                }`}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={arr.checkk}
                    onChange={onItemCheck(arr.id)}
                  />
                </div>
                <div>{index + 1}</div>
                <div>{arr.inputText}</div>
                <div>
                  <Button
                    type="buttun"
                    className={"btn btn-danger"}
                    onClick={() => deleteTodo(arr.id)}
                  >
                    {" "}
                    X
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
