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
    { id: generateHash(), value: "sleep" },
    { id: generateHash(), value: "work" },
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

  const updateItemHandler = (key) => {
    console.log("Update item clicked! " + key);
    return <div>Hello</div>;
  };

  const showItems = () => {
    console.log(items);
  };

  if (items.length === 0) {
    return (
      <div className="App">
        <Form onAddItemHandler={addItemHandler} />
        {/*<button onClick={addItem}>Add item to todo</button>*/}
        <div className="nothing-to-show">Nothing to show</div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Form onAddItemHandler={addItemHandler} />
        <Todo
          arrayItems={items}
          onDeleteItemHandler={deleteItemHandler}
          onUpdateItemHandler={updateItemHandler}
        />
      </div>
    );
  }
}

export default App;

// How to call API in React
// Axios library
// Render response from the API call

// Lodash - has many inbuilt JS scripts

// Redux
