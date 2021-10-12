import React, { Component } from "react";

export default class Child extends Component {
  state = {
    // users: [
    //   { id: "001", name: "John", age: "16" },
    //   { id: "002", name: "Jack", age: "18" },
    //   { id: "003", name: "Peiki", age: "20" },
    // ],
    users: 'abc'
  };
  render() {
    return (
      <div>
        <h2>Child组件</h2>
        {this.state.users.map((item) => {
          return <h4 key={item.id}>{item.name}</h4>;
        })}
      </div>
    );
  }
}
