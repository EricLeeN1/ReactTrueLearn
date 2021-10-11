import { ADD_PERSON } from "../constant";
const initialState = [];
export default function personReducer(preState = initialState, action) {
  // 从action对象中获取：type、data
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
