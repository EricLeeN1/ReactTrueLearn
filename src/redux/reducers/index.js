/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */
// 引入combineReducers，用于汇总所有的combineReducers
import { combineReducers } from "redux";
// 引入为Count组件服务的reducer
import countReducer from "./count";
// 引入为Person组件服务的reducer
import personReducer from "./person";

const allReducers = combineReducers({
  count: countReducer,
  person: personReducer,
});

export default allReducers;
