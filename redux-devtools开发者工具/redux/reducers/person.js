import { ADD_PERSON } from "../constant";
const initialState = [];
const personReducer = (preState = initialState, action) => {
  // 从action对象中获取：type、data
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      // preState.unshift(data) // 此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
      return [data, ...preState];
    default:
      return preState;
  }
};
export default personReducer;
