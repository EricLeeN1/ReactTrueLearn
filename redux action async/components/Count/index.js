import React, { Component } from "react";
// 引入store用于获取状态
import store from "../../redux/store";
// 引入actionCreator,专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from "../../redux/count_action";
export default class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value - 0));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value - 0));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value - 0));
    }
  }; 
  incrementAsync = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAsyncAction(value - 0,500))
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
