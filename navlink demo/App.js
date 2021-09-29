import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/about";
import Home from "./pages/home";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="row">
          <aside className="col-xs-2 col-xs-offset-2">
            <ul className="list-group">
              <li>
                <NavLink
                  activeClassName="demo"
                  className="list-group-item"
                  to="/home"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="demo" className="list-group-item" to="/about">
                  about
                </NavLink>
              </li>
            </ul>
          </aside>
          <main className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
