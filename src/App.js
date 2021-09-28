import React, { Component } from "react";
import List from "./List";
import Search from "./Search";

export default class App extends Component {
  state = {
    users: [], // users初始值为数组
    isLoading: false, // 是否为第一次打开页面
    isFirst: false, // 标识是否处于加载中
    err: "", // 存储请求相关的错误信息
  };
  updateAppState = (obj) => {
    this.setState(obj);
  };
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
