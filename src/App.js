import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

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
  const [openModal, setModal] = useState(false);
  const [newKey, setKey] = useState(null);

  // Add item part
  const addItemHandler = (todoData) => {
    setItems((prevItems) => {
      return [...prevItems, { id: generateHash(), value: todoData.value }];
    });
    console.log("addItem clicked!");
    showItems();
  };
  // Always update the state with the end result

  // Delete item part
  const deleteItemHandler = (key) => {
    console.log("Delete executed once!");
    const updatedItems = items.filter((item) => item.id != key);
    setItems(updatedItems);
  };

  // Updation part

  // Click button handler, it opens up the modal
  const clickUpdateBtnHandler = (key) => {
    console.log("Update item clicked! " + key);
    setKey(key);
    setModal(true);
  };

  // Updation handler, actually handles the update
  const updateNameHandler = (newData) => {
    console.log(newData.id + "  " + newData.title);
    setModal(false);

    let tempItems = [...items];
    let pos = false;
    for (let i = 0; i < tempItems.length; i++) {
      if (tempItems[i].id === newData.id) {
        pos = i;
        break;
      }
    }
    //console.log("Element found at pos: " + pos);
    //console.log("Elemet has value: " + tempItems[pos].value);
    tempItems[pos].value = newData.title;
    //console.log("Elemet has new value: " + tempItems[pos].value);
    setItems(tempItems);
  };

  const closeModalHandler = () => {
    setModal(false);
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
        <Modal
          open={openModal}
          onCloseModal={closeModalHandler}
          targetID={newKey}
          updateName={updateNameHandler}
        ></Modal>
        <Todo
          arrayItems={items}
          onDeleteItemHandler={deleteItemHandler}
          onClickUpdateItemHandler={clickUpdateBtnHandler}
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
