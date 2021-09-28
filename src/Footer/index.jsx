import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
  getDoneLength(arr) {
    return arr.reduce((pre, current) => {
      if (current.done) {
        return (pre = pre + 1);
      } else {
        return pre;
      }
    }, 0);
  }

  render() {
    const { todos } = this.props;
    // 已完成
    let donLen = this.getDoneLength(todos);
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成{donLen}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
