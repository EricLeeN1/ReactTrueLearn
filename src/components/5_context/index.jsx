import React, { Component } from "react";
import "./index.css";

// 创建Context对象
const MyContext = React.createContext();
const { Provider,Consumer } = MyContext;
export default class A extends Component {
  state = {
    username: "tom",
    age: 12,
  };
  render() {
    const { username, age } = this.state;
    return (
      <div className="box-a">
        <h3>我是A组件</h3>
        <h4>我的用户名是:{username}</h4>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log(this);
    return (
      <div className="box-b">
        <h3>我是B组件</h3>
        <C />
      </div>
    );
  }
}

// class C extends Component {
//   static contextTypes = MyContext;
//   render() {
//     console.log(this);
//     return (
//       <div className="box-c">
//         <h3>我是C组件</h3>
//         <h4>我从B组件接收到的的用户名是:</h4>
//       </div>
//     );
//   }
// }

function C() {
  console.log(this);
  return (
    <div className="box-c">
      <h3>我是C组件</h3>
      <h4>
        我从B组件接收到的的用户名是:
        <Consumer>
          {(value) => {
            return `${value.username}`;
          }}
        </Consumer>
      </h4>
    </div>
  );
}
