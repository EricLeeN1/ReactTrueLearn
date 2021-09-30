import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Messages extends Component {
  state = {
    messagesArr: [
      { id: "01", title: "消息 1" },
      { id: "02", title: "消息 2" },
      { id: "03", title: "消息 3" },
    ],
  };
  render() {
    const { messagesArr } = this.state;
    return (
      <div>
        <ul>
          {messagesArr.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/messages/detail/${message.id}/${message.title}`} > {message.title}</Link>&nbsp;&nbsp; */}
                {/* 向路由组件传递search参数 */}
                <Link to={`/home/messages/detail?id=${message.id}&title=${message.title}`} > {message.title}</Link>&nbsp;&nbsp;

                {/* <Link to={`/home/messages/detail/${message.id}/${message.title}`} > {message.title}</Link>&nbsp;&nbsp; */}
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接受params参数 */}
        <Route
          path="/home/messages/detail"
          component={Detail}
        ></Route>
      </div>
    );
  }
}
