import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/about";
import Home from "./pages/home";
import MyNavLink from "./components/MyNavLink";
import "./App.css";

export default class App extends Component {
  state = {
    link: [
      {
        children: "Home",
        to: "/eric/home",
      },
      {
        children: "About",
        to: "/eric/about",
      },
    ],
  };
  render() {
    const { link } = this.state;
    return (
      <div className="container">
        <Header></Header>
        <div className="row">
          <aside className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {link.map((item) => {
                return <MyNavLink key={item.to} {...item}></MyNavLink>;
              })}
            </div>
          </aside>
          <main className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由, 默认模糊匹配。设置exact严格匹配,正常不设置，有问题以后才设置 */}
                <Route exact path="/eric/home" component={Home}></Route>
                <Route exact path="/eric/about" component={About}></Route>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
