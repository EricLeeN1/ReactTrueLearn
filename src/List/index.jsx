import React, { Component } from "react";
import Card from "../Card";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {
  state = {
    users: [], // users初始值为数组
    isLoading: false, // 是否为第一次打开页面
    isFirst: false, // 标识是否处于加载中
    err: "", // 存储请求相关的错误信息
  };

  componentDidMount() {
    PubSub.subscribe("updateState", (msg, data) => {
      console.log(msg, data);
      this.setState(data)
    });
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>输入关键字随后点击搜索</h2>
        ) : isLoading ? (
          <h2>loading...</h2>
        ) : err ? (
          <h2>{err.message}</h2>
        ) : (
          users.map((item) => {
            return <Card key={item.id} item={item}></Card>;
          })
        )}
      </div>
    );
  }
}
