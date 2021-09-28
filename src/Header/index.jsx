import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./header.css";
export default class Header extends Component {
  handleKeyUp = (e) => {
    const { keyCode, target } = e;
    if (keyCode !== 13) return;
    if (!target.value.trim()) {
      alert("输入不能为空");
      return;
    }
    // 将生成数据传递给app父级组件
    this.props.addTodo({
      id: nanoid(),
      name: target.value,
      done: false,
    });
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
