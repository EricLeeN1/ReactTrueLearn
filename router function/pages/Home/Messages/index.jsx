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

  replaceShow = (id, title) => {
    // 编写一段代码，让其实现跳转到detail组件。params传参
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`);
    // search传参
    // this.props.history.replace(
    //   `/home/messages/detail/?id=${id}&title=${title}`
    // );
    // state传参
    this.props.history.replace(`/home/messages/detail`,{
      id, title
    });
  };
  pushShow = (id, title) => {
    // 编写一段代码，让其实现跳转到detail组件。
    this.props.history.push(`/home/messages/detail/${id}/${title}`,{
      id: id,
      title: title,
    });
  };
  goShow = (id, title) => {
    // 编写一段代码，让其实现跳转到detail组件。
    this.props.history.go(-2);
  };
  backShow = (id, title) => {
    // 编写一段代码，让其实现跳转到detail组件。
    this.props.history.goBack();
  };
  forwardShow = (id, title) => {
    // 编写一段代码，让其实现跳转到detail组件。
    this.props.history.goForward();
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
                <Link
                  to={`/home/messages/detail/${message.id}/${message.title}`}
                >
                  {message.title}
                </Link>
                &nbsp;&nbsp;
                <button
                  onClick={() => this.pushShow(message.id, message.title)}
                >
                  push查看
                </button>
                <button
                  onClick={() => this.replaceShow(message.id, message.title)}
                >
                  replace查看
                </button>
                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/messages/detail?id=${message.id}&title=${message.title}`} > {message.title}</Link>&nbsp;&nbsp; */}
                {/* 向路由组件传递state参数 */}
                {/* <Link
                  to={{
                    pathname: `/home/messages/detail`,
                    state: { id: message.id, title: message.title },
                  }}
                >
                  {" "}
                  {message.title}
                </Link>
                &nbsp;&nbsp; */}
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
