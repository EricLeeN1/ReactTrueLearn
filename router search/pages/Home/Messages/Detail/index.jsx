import React, { Component } from "react";
import qs from "querystring";

export default class Detail extends Component {
  state = {
    messagesArr: [
      { id: "01", title: "消息 1", content: "Message 1" },
      { id: "02", title: "消息 2", content: "Message 2" },
      { id: "03", title: "消息 3", content: "Message 3" },
    ],
  };
  render() {
    // 接受search参数
    const {
      location: { search },
    } = this.props; // 得到的是一个 urlencoded编码 id=01&title=%E6%B6%88%E6%81%AF%201
    const { id, title } = qs.parse(search.slice(1));
    const { messagesArr } = this.state;
    const findRes = messagesArr.find((ele) => {
      return ele.id === id;
    });
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findRes.content}</li>
      </ul>
    );
  }
}
