import React from "react"
import './List.css'

class List extends React.Component {


  render() {
    const { array, deleteTodo } = this.props;
    return (
      <div>
        <ul className={"ul-container"}>
          {
            array.map((arr, index) => (
              <li key={arr.id}>
                <div className={"li-conteiner"}>
                  <div>
                    {index+1}
                  </div>
                  <div>
                    {arr.inputText}
                  </div>
                  <div>
                    <button type = "buttun" className = {'btn btn-danger'}
                        onClick={() => deleteTodo(arr.id)}
                    >  X
                    </button>
                  </div>
                </div>
               </li>
            ))
          }

        </ul>
      </div>
    )
  }

}

export default List