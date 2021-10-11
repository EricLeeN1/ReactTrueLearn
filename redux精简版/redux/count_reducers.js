// 该文件是用于创建一个为Count服务的reducer,reducer的本质就是一个函数
// reducer函数会接到两个参数，分别为：之前的状态preState，动作对象action

const initialState = 0
function countReducer(preState = initialState,action){
  // 从action对象中获取：type、data
  const {type,data} = action;
  // 根据type决定如何加工数据
  switch (type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    case 'incrementIfOdd':
      return preState + data;
    case 'incrementAsync':
      return preState + data;
    default:
      return preState
  }
}

export default countReducer;