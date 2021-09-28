import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  getDatas = () => {
    axios
      .get("/api/users/EricLeeN1")
      .then((result) => {
        console.log("成功了", result);
      })
      .catch((err) => {
        console.log("失败了", err);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.getDatas}>点击获取数据</button>
      </div>
    );
  }
}
