// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from "redux";
// 引入redux-chunk，用于支持异步action
import thunk from "redux-thunk";
// 引入汇总之后的reducers的
import allReducers from "./reducers";
// 引入redux-devtools-extensions
import { composeWithDevTools } from "redux-devtools-extension";
export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
