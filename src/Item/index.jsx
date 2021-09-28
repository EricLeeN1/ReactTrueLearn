import React, { Component } from "react";
import './item.css'
export default class Item extends Component {
  render() {
    const { item } = this.props
    return (
      <li>
        <label>
          <input defaultChecked={item.done} type="checkbox" />
          <span>{item.name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }
}
