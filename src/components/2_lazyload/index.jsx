import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Loading from './Loading'
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class LazyLoad extends Component {
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
        <div className="row">
          <aside className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {link.map((item) => {
                return (
                  <NavLink
                    activeClassName="active"
                    className="list-group-item"
                    key={item.to}
                    {...item}
                  />
                );
              })}
            </div>
          </aside>
          <main className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading/>}>
                  <Switch>
                    {/* 注册路由, 默认模糊匹配。设置exact严格匹配,正常不设置，有问题以后才设置 */}
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                  </Switch>
                </Suspense>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
