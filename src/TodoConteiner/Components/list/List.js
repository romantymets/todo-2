import React from "react";
import style from "./List.module.css";
import Button from "../../../components/Button/Button";

class List extends React.Component {
  render() {
    const { array, deleteTodo, onItemCheck } = this.props;
    return (
      <div className="container">
        <div className="row">
          <ul className={style.ulContainer}>
            {array.map((arr, index) => (
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <li key={arr.id} className={style.item}>
                      <div
                        className={
                          arr.checkk
                            ? style.liConteinerCheckbox
                            : style.liConteiner
                        }
                      >
                        <div className={`col-1`}>
                          <input
                            type="checkbox"
                            checked={arr.checkk}
                            onChange={onItemCheck(arr.id)}
                          />
                        </div>
                        <div className="col-1">{index + 1}</div>
                        <div className="col-8">{arr.inputText}</div>
                        <div className="col-2">
                          <Button
                            type="buttun"
                            className="btn btn-danger"
                            onClick={() => deleteTodo(arr.id)}
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
