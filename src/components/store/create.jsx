import "../store/store.scss";
import { Table } from "antd";
import { Form, Input, Button } from "antd";
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axiosInstance from "../../environments/api";
import storeModel from "../../core/models/store-model";

const mystoreModel = storeModel;

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      code: "",
      address: "",
      user_id: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleCodeChange = (event) => {
    this.setState({
      code: event.target.value,
    });
  };

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  submit = () => {
    const api_token = sessionStorage.getItem("token");
    const user_id = sessionStorage.getItem("id");
    mystoreModel.name = this.state.name;
    mystoreModel.code = this.state.code;
    mystoreModel.address = this.state.address;
    mystoreModel.user_id = user_id;

    axiosInstance
      .post(`store?api_token=${api_token}`, mystoreModel)
      .then((data) => {
        alert("created");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container-store">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              className="store-input"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </Form.Item>

          <Form.Item
            label="Code"
            name="code"
            rules={[{ required: true, message: "Please input your Code!" }]}
          >
            <Input
              type="text"
              className="store-input"
              value={this.state.code}
              onChange={this.handleCodeChange}
            />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input.TextArea
              onChange={this.handleAddressChange}
              className="store-input"
              value={this.state.address}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              onClick={this.submit}
              className="btn-login"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Create;
