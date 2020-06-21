import React from "react"

const ColumnItem = (props) => {
  return (
    <div className="column">
      <div className="notification is-primary">
        <img src={props.logo} alt="light-icon" />
        <h1 className="title is-6 is-uppercase">
          {props.title}
        </h1>
      </div>
    </div>
  )
}

export default ColumnItem;
