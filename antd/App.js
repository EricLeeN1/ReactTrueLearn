import React, { Component } from "react";
import { Button } from "antd";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">按钮1</Button>
        <Button danger>按钮2</Button>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </div>
    );
  }
}
