import React, { Component } from "react";
import PropTypes from "prop-types";
import "./item.css";
export default class Item extends Component {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };

  // 鼠标移入移除
  handleMouse(flag) {
    return () => {
      // 函数体
      this.setState({
        focus: flag,
      });
    };
  }
  // 复选框选择
  handleCheck(id) {
    return (e) => {
      this.props.updateTodo(id, e.target.checked);
    };
  }

  // 删除回调
  handleDelete(id) {
    if(window.confirm('确定删除吗')){
      this.props.deleteTodo(id);
    }
  }
  state = {
    focus: false,
  };
  render() {
    const { item } = this.props;
    const { focus } = this.state;
    return (
      <li
        style={{ backgroundColor: focus ? "#ddd" : "#fff" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            onChange={this.handleCheck(item.id)}
            defaultChecked={item.done}
            type="checkbox"
          />
          <span>{item.name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(item.id)}
          style={{ display: focus ? "block" : "none" }}
          className="btn btn-danger"
        >
          删除
        </button>
      </li>
    );
  }
}
