import React, { Component } from "react";
import Item from "../Item";
import "./list.css";

export default class List extends Component {
  render() {
    const { todos, updateTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return <Item updateTodo={updateTodo} key={item.id} item={item} />;
        })}
      </ul>
    );
  }
}
