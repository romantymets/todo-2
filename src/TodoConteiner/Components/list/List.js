import React from "react"

class List extends React.Component {
  render() {
    const { array } = this.props;
    return (
      <div>
        <ul>
          {
            array.map((arr) => (<li> <p>{arr.inputText}  </p></li>))
          }

        </ul>
      </div>
    )
  }

}

export default List