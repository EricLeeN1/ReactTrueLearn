import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  keywordRef = React.createRef();
  state = {
    keyword: "",
    lists: [],
  };

  search = () => {
    //获取用户输入，(连续解构赋值+重命名)
    const {
      keywordRef: {
        current: { value: data },
      },
    } = this;
    this.props.updateAppState({
      isFirst: false,
      isLoading: true,
    });
    // 发送网络请求
    axios
      .get(`/api/search/users?q=${data}`)
      .then((res) => {
        const {
          data: { items },
        } = res;
        this.props.updateAppState({
          isLoading: false,
          users: items,
        });
      })
      .catch((err) => {
        this.props.updateAppState({
          isLoading: false,
          err: err,
        });
      });
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
