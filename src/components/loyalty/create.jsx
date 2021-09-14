import { Table } from "antd";
import { Form, Input, Button } from "antd";
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axiosInstance from "../../environments/api";
import storeModel from "../../core/models/store-model";
import { Select } from "antd";
import ILoyaltyModel from "../../core/models/loyalty.model";

const mysILoyaltyModel = storeModel;

class Create_loyalty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      cell_number: "",
      store_code: "",
      dob: "",
      gender: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      first_name: event.target.value,
    });
  };

  handLastNameChange = (event) => {
    this.setState({
      last_name: event.target.value,
    });
  };

  handleGenderChange = (event) => {
    this.setState({
      gender: event,
    });
  };

  handleCellChange = (event) => {
    this.setState({
      cell_number: event.target.value,
    });
  };

  handleStoreCodeChange = (event) => {
    this.setState({
      store_code: event.target.value,
    });
  };

  submit = () => {
    const api_token = sessionStorage.getItem("token");

    mysILoyaltyModel.first_name = this.state.first_name;
    mysILoyaltyModel.last_name = this.state.last_name;
    mysILoyaltyModel.gender = this.state.gender;
    mysILoyaltyModel.cell_number = this.state.cell_number;
    mysILoyaltyModel.store_code = this.state.store_code;

    axiosInstance
      .post(`loyalty/member/store?api_token=${api_token}`, mysILoyaltyModel)
      .then((data) => {
        alert("created");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { Option, OptGroup } = Select;
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
            label="First Name"
            name="first_name"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input
              className="store-input"
              value={this.state.first_name}
              onChange={this.handleNameChange}
            />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input
              type="text"
              className="store-input"
              value={this.state.last_name}
              onChange={this.handLastNameChange}
            />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please input your Gender!" }]}
          >
            <Select
              style={{ width: 200 }}
              onChange={this.handleGenderChange}
              value={this.state.gender}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Cell Number"
            name="cell_number"
            rules={[
              { required: true, message: "Please input your Cell Number!" },
            ]}
          >
            <Input
              onChange={this.handleCellChange}
              className="store-input"
              value={this.state.cell_number}
            />
          </Form.Item>
          <Form.Item
            label="Store Code"
            name="store_code"
            rules={[
              { required: true, message: "Please input your Store Code!" },
            ]}
          >
            <Input
              onChange={this.handleStoreCodeChange}
              className="store-input"
              value={this.state.store_code}
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

export default Create_loyalty;
