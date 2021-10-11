// 引入Coun的UI组件
import CountUI from "../../components/Count/index";

import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

/**
 * 1. mapStateToProps函数返回的是一个对象
 * 2. mapStateToProps函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
 * 3. mapStateToProps用于传递状态
 * @param {*} state 
 */
function mapStateToProps(state) {
  return { count: state };
}

/**
 * 1. mapDispatchToProps函数返回的是一个对象
 * 2. mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
 * 3. mapDispatchToProps用于传递操作状态的方法
 * @param {*} state 
 */
function mapDispatchToProps(dispatch) {
  return {
    createIncrementAction: (data) => {
      // 通知redux执行加法
      console.log(data);
      dispatch(createIncrementAction(data));
    },
    createDecrementAction: (data) => {
      // 通知redux执行加法
      console.log(data);
      dispatch(createDecrementAction(data));
    },
    createIncrementAsyncAction: (data) => {
      // 通知redux执行加法
      console.log(data);
      dispatch(createIncrementAsyncAction(data));
    },
  };
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
