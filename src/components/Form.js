import React, { useState } from "react";
import Todo from "./Todo";
import "./Form.css";

function Form(props) {
  const [todo, setTodo] = useState("");

  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      value: todo,
    };

    props.onAddItemHandler(todoData);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="Form">
        <label>To Do</label>
        <input
          type="text"
          value={todo}
          onChange={todoChangeHandler}
          className="input__field"
        ></input>
        <div>
          <button type="submit" className="buttons">
            Add New
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
