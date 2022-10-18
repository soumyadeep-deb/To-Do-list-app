import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const generateHash = () => {
    const alphaNum = "1sda5hj4l2";

    let hashKey = "";
    let index;
    for (let i = 0; i < 10; i++) {
      index = Math.floor(Math.random() * 10);
      hashKey += alphaNum[index];
    }
    return hashKey;
  };

  let defaultTodo = [
    { id: generateHash(), value: "eat" },
    { id: generateHash(), value: "sleep" },
    { id: generateHash(), value: "work" },
    { id: generateHash(), value: "workOut" },
    { id: generateHash(), value: "workIn" },
    { id: generateHash(), value: "workWithin" },
  ];

  const [items, setItems] = useState(defaultTodo);

  const addItemHandler = (todoData) => {
    setItems((prevItems) => {
      return [...prevItems, { id: generateHash(), value: todoData.value }];
    });
    console.log("addItem clicked!");
    showItems();
  };
  // Always update the state with the end result

  const deleteItemHandler = (key) => {
    console.log("Delete executed once!");
    const updatedItems = items.filter((item) => item.id != key);
    setItems(updatedItems);
  };

  const showItems = () => {
    console.log(items);
  };

  return (
    <div className="App">
      <Form onAddItemHandler={addItemHandler} />
      {/*<button onClick={addItem}>Add item to todo</button>*/}
      <Todo arrayItems={items} onDeleteItemHandler={deleteItemHandler} />
    </div>
  );
}

export default App;


// How to call API in React
// Axios library
// Render response from the API call

// Lodash - has many inbuilt JS scripts

// Redux