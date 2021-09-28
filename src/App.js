import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: "学习",
      },
      {
        id: 2,
        name: "工作",
      },
      {
        id: 3,
        name: "学习",
      },
    ],
  };

  // add todo 用于添加一个todo,接收的参数是todo对象
  addTodo = (data) => {
    const { todos } = this.state;
    this.setState({
      todos: [data, ...todos]
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos={todos} addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer todos={todos} />
        </div>
      </div>
    );
  }
}
