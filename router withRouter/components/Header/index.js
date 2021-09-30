import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  backShow = () => {
    // 编写一段代码，让其实现跳转到detail组件。
    this.props.history.goBack();
  };
  render() {
    console.log(this.props);
    return (
      <header className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.backShow}>回退</button>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);