import React, { Component } from "react";

// 引入connect用于链接UI组件与redux
import { connect } from "react-redux";

// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
// 引入actionCreator,专门用于创建action对象

// 编写Count的UI组件
class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.createIncrementAction(value - 0);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.createDecrementAction(value - 0);
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const { count } = this.props;
    if (count % 2 !== 0) {
      this.props.createIncrementAction(value - 0);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.createIncrementAsyncAction(value - 0);
  };
  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>当前求和为：{count}</h1>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state }),

  // mapDispatchToProps的一般写法
  // (dispatch) => ({
  //   createIncrementAction: (data) => dispatch(createIncrementAction(data)),
  //   createDecrementAction: (data) => dispatch(createDecrementAction(data)),
  //   createIncrementAsyncAction: (data) =>
  //     dispatch(createIncrementAsyncAction(data)),
  // })

  // mapDispatchToProps的简写
  {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
  }
)(Count);
