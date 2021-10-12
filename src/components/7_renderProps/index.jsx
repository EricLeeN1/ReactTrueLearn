import React, { Component } from "react";
import "./index.css";

import C from '../1_setState'

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>Parent组件</h3>
        <A render={(name) => <C name={name} />}></A>
        <A render={(name) => <B name={name} />}></A>
      </div>
    );
  }
}

class A extends Component {
  state = {
    name: "tom",
  };
  render() {
    console.log(this.props);
    const { name } = this.state
    return (
      <div className="box-a">
        <h3>A组件</h3>
        <h4>{this.props.render(name)}</h4>
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log(this);
    return (
      <div className="box-b">
        <h3>B组件,{this.props.name}</h3>
      </div>
    );
  }
}
