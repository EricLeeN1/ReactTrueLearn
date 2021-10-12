import React, { Component, PureComponent } from "react";
import "./index.css";
export default class Parent extends Component {
  state = {
    carName: "奔驰C36",
  };
  changeCar = () => {
    this.setState({
      // carName: "迈巴赫",
    });
  };
  render() {
    console.log('Parent----render');
    const { carName } = this.state;
    return (
      <div className="box-a">
        <h3>我是Parent组件</h3>
        <span>车名字是{carName}</span>
        <button onClick={this.changeCar}>点击换车</button>
        <Child carName={carName} />
      </div>
    );
  }
}

class Child extends PureComponent { // 或者使用PureComponent

  // shouldComponentUpdate(nextProps,nextState) {
  //   console.log(nextProps,nextState);
  //   console.log(this.props,this.state);
  //   return !this.props.carName === nextProps.carName
  // }

  render() {
    console.log('Child----render');
    const { carName } = this.props;
    return (
      <div className="box-b">
        <h3>我是B组件</h3>
        <span>我接到的名字是{carName}</span>
      </div>
    );
  }
}
