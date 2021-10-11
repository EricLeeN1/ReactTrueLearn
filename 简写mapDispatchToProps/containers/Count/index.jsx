// 引入Coun的UI组件
import CountUI from "../../components/Count/index";
// 引入connect用于链接UI组件与redux
import { connect } from "react-redux";

// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

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
    createIncrementAsyncAction
  }
)(CountUI);
