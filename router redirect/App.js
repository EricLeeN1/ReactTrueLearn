import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
        to: "/home",
      },
      {
        children: "About",
        to: "/about",
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
                <Switch>
                  {/* 注册路由, 默认模糊匹配。设置exact严格匹配,正常不设置，有问题以后才设置 */}
                  <Route path="/home" component={Home}></Route>
                  <Route path="/about" component={About}></Route>
                  <Redirect to="/home"></Redirect>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
