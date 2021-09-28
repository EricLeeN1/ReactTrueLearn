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
        done: false,
      },
      {
        id: 2,
        name: "工作",
        done: false,
      },
      {
        id: 3,
        name: "学习",
        done: false,
      },
    ],
  };

  // add todo 用于添加一个todo,接收的参数是todo对象
  addTodo = (data) => {
    const { todos } = this.state;
    this.setState({
      todos: [data, ...todos],
    });
  };

  // updateTodo 用于添加一个todo,接收的参数是todo对象
  updateTodo = (id, checked) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.done = checked;
      }
      return item;
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos={todos} addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} />
          <Footer todos={todos} />
        </div>
      </div>
    );
  }
}
