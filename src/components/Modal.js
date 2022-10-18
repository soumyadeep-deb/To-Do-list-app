import React, { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const [title, setTitle] = useState("");
  const modalInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  // Close modal
  const handleCloseModal = () => {
    setTitle("");
    props.onCloseModal();
  };

  // Call parent with the new data
  const handleUpdateName = () => {
    const newTitleData = {
      id: props.targetID,
      title: title,
    };
    props.updateName(newTitleData);
    setTitle("");
    console.log("Name updated through modal and App.js!");
    //console.log("----------");
  };

  if (!props.open) {
    return null;
  }
  return (
    <div className="modal">
      <div>Enter new title</div>
      <input
        type="text"
        value={title}
        onChange={modalInputChangeHandler}
      ></input>
      <button onClick={handleCloseModal} className="buttons">
        x
      </button>
      <button className="buttons" onClick={handleUpdateName}>
        Enter
      </button>
    </div>
  );
}

export default Modal;
