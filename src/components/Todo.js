import React from "react";
import "./Todo.css"

function Todo(props) {
  const handleDeleteBtn = (key) => {
    props.onDeleteItemHandler(key);
  };

  return (
    <div>
      <h1>Your to-do list</h1>
      <ul>
        {props.arrayItems.map((item) => (
          <div className="to-do__container">
            <li key={item.id} className="to-do__title">{item.value}</li>
            <button 
              className="buttons"
              onClick={() => {
                handleDeleteBtn(item.id);
              }}
            >
              Delete above todo
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
