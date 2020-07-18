import React from "react"

const ColumnItem = (props) => {
  return (
    <div className="column">
      <div className="notification is-primary">
        <img src={props.logo} alt="light-icon" />
        <p className="is-size-6 is-uppercase ">
          {props.title}
        </p>
      </div>
    </div>
  )
}

export default ColumnItem;
