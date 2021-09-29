import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </header>
        <div className="row">
            <aside className="col-xs-2 col-xs-offset-2">
              <ul className="list-group">
                <li>
                  <Link className="list-group-item" to="/home">
                    home
                  </Link>
                </li>
                <li>
                  <Link className="list-group-item" to="/about">
                    about
                  </Link>
                </li>
              </ul>
            </aside>
            <main className="col-xs-6">
              <div class="panel">
                <div class="panel-body">
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
