import React from "react";
import "./Todo.css";

function Todo(props) {
  const handleDeleteBtn = (key) => {
    props.onDeleteItemHandler(key);
  };

  const handleUpdateBtn = (key) => {
    props.onUpdateItemHandler(key);
  };

  return (
    <div>
      <h1 className="nothing-to-show">Your to-do list</h1>
      <ul>
        {props.arrayItems.map((item) => (
          <div className="to-do__container">
            <li key={item.id} className="to-do__title">
              {item.value}
            </li>
            <button
              className="buttons"
              onClick={() => {
                handleDeleteBtn(item.id);
              }}
            >
              Delete
            </button>
            <button
              className="buttons"
              onClick={() => {
                handleUpdateBtn(item.id);
              }}
            >
              Update
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
