import React, { Component } from "react";

export default class index extends Component {
  addPerson = () => {
    const userName = this.userName.value;
    const userAge = this.userAge.value;
    console.log(userName, userAge);
  };
  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <input
          ref={(c) => (this.userName = c)}
          placeholder="输入用户姓名"
        ></input>
        <input
          ref={(c) => (this.userAge = c)}
          placeholder="输入用户年龄"
        ></input>
        <button onClick={this.addPerson}>添加用户</button>
        <hr></hr>
        <ul>
          <li>用户01</li>
          <li>用户02</li>
          <li>用户03</li>
        </ul>
      </div>
    );
  }
}
