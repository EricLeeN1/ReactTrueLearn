import React, { Component } from "react";

export default class index extends Component {
  state = {
    count: 0,
  };
  add = () => {
    // 1、获取原来的count值
    const { count } = this.state;
    // 2、更新状态
    // this.setState({ count: count + 1 }, () => {
    //   console.log("输出", this.state.count);
    //   // 这个方法功能类似vue的nextTick方法
    // });
    // console.log("输出", this.state.count); // 与callback输出是不一致的
    // 函数式的setState
    this.setState((state, props) => {
      console.log(state, props);
      return { count: count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>当前求和为{count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}
