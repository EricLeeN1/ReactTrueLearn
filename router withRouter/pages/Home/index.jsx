import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import Messages from "./Messages";
import News from "./News";

export default class Home extends Component {
  state = {
    link: [
      {
        children: "Messages",
        to: "/home/messages",
      },
      {
        children: "News",
        to: "/home/news",
      },
    ],
  };
  render() {
    const { link } = this.state;
    return (
      <div>
        <h2>Home组件内容</h2>
        <ul className="nav nav-tabs">
          {link.map((item) => {
            return (
              <li key={item.to}>
                <MyNavLink {...item}></MyNavLink>
              </li>
            );
          })}
        </ul>
        <div className="panel">
          <div className="panel-body">
            <Switch>
              {/* 注册路由, 默认模糊匹配。设置exact严格匹配,正常不设置，有问题以后才设置 */}
              <Route path="/home/messages" component={Messages}></Route>
              <Route path="/home/news" component={News}></Route>
              <Redirect to="/home/messages"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
