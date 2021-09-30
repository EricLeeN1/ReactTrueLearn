import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    messagesArr: [
      { id: "01", title: "消息 1", content: "Message 1" },
      { id: "02", title: "消息 2", content: "Message 2" },
      { id: "03", title: "消息 3", content: "Message 3" },
    ],
  };
  render() {
    // 接受params参数
    const {
      match: {
        params: { id, title },
      },
    } = this.props;
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
