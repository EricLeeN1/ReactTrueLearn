import React, { Component } from "react";
import Card from "../Card";
import "./index.css";
export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h2>输入关键字随后点击搜索</h2>
        ) : isLoading ? (
          <h2>loading...</h2>
        ) : err ? (
          <h2>{err.message}</h2>
        ) : (
          users.map((item) => {
            return <Card key={item.id} item={item}></Card>;
          })
        )}
      </div>
    );
  }
}
