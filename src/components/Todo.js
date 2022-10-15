import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
    };
  }

  addItem() {
    console.log("Function within todo class called!");
  }

  render() {
    return <div onClick={this.addItem}>Todo</div>;
  }
}

export default Todo;
