import React, { Component } from "react";

// export default class index extends Component {
//   state = {
//     count: 0,
//   };
//   add = () => {
//     const { count } = this.state;
//     this.setState(() => ({
//       count: count + 1,
//     }));
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1>当前求和为{count}</h1>
//         <button onClick={this.add}>点我+1</button>
//       </div>
//     );
//   }
// }

function Demo() {
  // 调用1+n次 初次渲染一次，之后每次状态更新一次
  console.log("Demo");
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('eric');
  // 加的回调
  function add() {
    setCount((count) => count + 1);
  }
  // 改名的回调
  function changeName() {
    setName((name) => name + 'Lee');
  }
  return (
    <div>
      <h1>当前求和为{count}</h1>
      <h1>我的名字为{name}</h1>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>改名字了</button>
    </div>
  );
}
export default Demo;
