import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class Search extends Component {
  keywordRef = React.createRef();

  search = async () => {
    //获取用户输入，(连续解构赋值+重命名)
    const {
      keywordRef: {
        current: { value: data },
      },
    } = this;
    PubSub.publish("updateState", {
      isFirst: false,
      isLoading: true,
    });
    // 发送网络请求

    try {
      const response = await fetch(`/api/search/users?q=${data}`);
      const res = await response.json();
      PubSub.publish("updateState", {
        users: res.items,
        isLoading: false,
      });
    } catch (error) {
      PubSub.publish("updateState", {
        err: error,
        isLoading: false,
      });
    }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={this.keywordRef}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
