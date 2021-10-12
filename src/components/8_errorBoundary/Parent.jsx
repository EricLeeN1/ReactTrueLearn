import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    hasError: "", // 用于表示子组件是否产生错误
  };

  // 当Parent的子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息、
  static getDerivedStateFromError(error) {
    console.log("error: " + error);
    return {
      hasError: error,
    };
  }

  componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    return (
      <div>
        <h2>Parent组件</h2>
        {hasError ? <h2>网路不稳定，稍后再试</h2> : <Child />}
      </div>
    );
  }
}
