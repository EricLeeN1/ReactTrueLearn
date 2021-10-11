import React, { Component } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addPersonAction } from "../../redux/actions/person";
class Person extends Component {
  addPerson = () => {
    const name = this.userName.value;
    const age = this.userAge.value;
    const personObj = {
      id: nanoid(),
      name,
      age,
    };
    this.props.addPersonAction(personObj);
    this.userName.value = "";
    this.userAge.value = "";
  };
  render() {
    console.log(this.props);
    const { person, personLen, count } = this.props;
    return (
      <div>
        <h2>我是Person组件,总人数{personLen}</h2>
        <h2>上方Count组件,总人数{count}</h2>
        <input
          ref={(c) => (this.userName = c)}
          placeholder="输入用户姓名"
        ></input>
        <input
          ref={(c) => (this.userAge = c)}
          placeholder="输入用户年龄"
        ></input>
        <button onClick={this.addPerson}>添加用户</button>
        <hr></hr>
        <ul>
          {person.map((item) => {
            return (
              <li key={item.id}>
                {item.id}-{item.name}-{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    person: state.person,
    personLen: state.person.length,
    count: state.count,
  }),
  { addPersonAction }
)(Person);
