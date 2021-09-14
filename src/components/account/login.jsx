import React, { Component, useState } from "react";
import { Form, Input, Button } from "antd";
import "../account/login.scss";
import ILoginModel from "../../core/models/login-model";
import axiosInstance from "../../environments/api";
import { withRouter } from "react-router-dom";

const loginModel = ILoginModel;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  login = () => {
    // use history.push('/some/path') here
    loginModel.email = this.state.email;
    loginModel.password = this.state.password;
    axiosInstance
      .post("auth/login", loginModel)
      .then((data) => {
        sessionStorage.setItem("token", data.data.data.token);
        sessionStorage.setItem("id", data.data.data.id);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="login-input"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              type="password"
              className="login-input"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              onClick={this.login}
              className="btn-login"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
