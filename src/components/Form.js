import React, { useState } from "react";
import Todo from "./Todo";

function Form() {
  const [items, setItems] = useState([]);

  const appendItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <h1>Enter details here</h1>
      <button value={items} onClick={appendItem}>
        Add new
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
