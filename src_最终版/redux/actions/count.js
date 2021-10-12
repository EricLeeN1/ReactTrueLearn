// 该文件专门为Count组件生成action对象
import { INCREMENT, DECREMENT } from "../constant";
export const increment = (data) => ({
  type: INCREMENT,
  data,
});

export const decrement = (data) => ({
  type: DECREMENT,
  data,
});

// 异步action,及时指action的值为函数，异步action中一般都会调用同步aciton，异步action不是必须要用的

export const incrementAsync = (data, time = 500) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
