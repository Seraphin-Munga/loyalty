import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import React, { Component, useState } from "react";
import "../layout/dashboard.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class DashboardLoyout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            className="menu"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Link to="/dashboard">
              <Menu.Item key="1">Dashboard</Menu.Item>
            </Link>
            <Link to="/store">
              <Menu.Item key="2">Store</Menu.Item>
              <Link to="/loyalty">
                <Menu.Item key="3">Loyalty</Menu.Item>
              </Link>
              <Link to="/">
                <Menu.Item key="3">Log out</Menu.Item>
              </Link>
            </Link>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          ></Content>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardLoyout;
