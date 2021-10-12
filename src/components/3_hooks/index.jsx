import React, { Component } from "react";
import ReactDom from "react-dom";

// export default class index extends Component {
//   state = {
//     count: 0,
//   };

//   myRef = React.createRef()

//   add = () => {
//     const { count } = this.state;
//     this.setState(() => ({
//       count: count + 1,
//     }));
//   };

//   show = () => {
//     alert(this.myRef.current.value)
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log(this.state.count);
//       this.setState((state) => ({ count: state.count + 1 }));
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   unmount = () => {
//     ReactDom.unmountComponentAtNode(document.getElementById("root"));
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <input type="text" ref={this.myRef}/>
//         <h1>当前求和为{count}</h1>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击展示数据</button>
//       </div>
//     );
//   }
// }

function Demo() {
  // 调用1+n次 初次渲染一次，之后每次状态更新一次
  // console.log("Demo");
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("eric");
  const myRef = React.useRef()
  React.useEffect(() => {
    // 相当于生命周期钩子
    console.log("@");
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); // 监测count
  // 加的回调
  function add() {
    setCount((count) => count + 1);
  }
  // 改名的回调
  function changeName() {
    setName((name) => name + "Lee");
  }
  // 提示输入的文字
  function show() {
    alert(myRef.current.value);
  }

  function unmount() {
    ReactDom.unmountComponentAtNode(document.getElementById("root"));
  }
  return (
    <div>
      
      <input type="text" ref={myRef}/>

      <h1>当前求和为{count}</h1>
      <h1>我的名字为{name}</h1>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>改名字了</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击我提示数据</button>
    </div>
  );
}
export default Demo;
