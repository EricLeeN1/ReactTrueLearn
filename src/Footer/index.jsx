import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
  getDoneLength = (arr) => {
    return arr.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0);
    }, 0);
  };

  // 全选/取消全选
  checkedToggle = (e) => {
    this.props.checkedAllTodo(e.target.checked);
  };

  // 清除所有done
  clearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    // 已完成
    let donLen = this.getDoneLength(todos);
    let arrLen = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            onChange={this.checkedToggle}
            type="checkbox"
            checked={donLen === arrLen}
          />
        </label>
        <span>
          <span>已完成{donLen}</span> / 全部{arrLen}
        </span>
        <button onClick={this.clearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
