import React from "react";

function ToDoList(props) {
  return (
    <li
      onClick={() => {
        props.Touched(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoList;
