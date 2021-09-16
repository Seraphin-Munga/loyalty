import { Table } from "antd";
import { Form, Input, Button } from "antd";
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axiosInstance from "../../environments/api";
import storeModel from "../../core/models/store-model";
import { Select } from "antd";
import ISubscribeModel from "../../core/models/subscribe-model";

const mysISubscribeModel = ISubscribeModel;

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      store_code: "",
      line_items: [
        {
          code: "",
          description: "",
          quantity: "",
          price: "",
        },
      ],
      order_total: "",
      gross_order_total: "",
      order_reference: "",
      order_date: "",
    };
  }

  handleCodeChange = (event, index) => {
    this.setState({
      code: event.target.value,
    });
  };

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleOrderRefChange = (event) => {
    this.setState({
      order_reference: event.target.value,
    });
  };

  handleGrossOrderChange = (event) => {
    this.setState({
      gross_order_total: event,
    });
  };

  handleOrderTotalChange = (event) => {
    this.setState({
      order_total: event.target.value,
    });
  };

  handleStoreCodeChange = (event) => {
    this.setState({
      store_code: event.target.value,
    });
  };

  addItem = () => {
    this.setState({
      items: [...this.state.items, ""],
    });
  };

  submit = () => {
    const api_token = sessionStorage.getItem("token");

    mysISubscribeModel.store_code = this.state.store_code;
    mysISubscribeModel.order_total = this.state.order_total;
    mysISubscribeModel.gross_order_total = this.state.gross_order_total;
    mysISubscribeModel.order_reference = this.state.order_reference;
    axiosInstance
      .post(
        `loyalty/transaction/earn/${this.props.match.params.phoneNumber}?api_token=${api_token}`,
        mysISubscribeModel
      )
      .then((data) => {
        alert("subscribed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const vm = this.state.items;

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
            label="Store Code"
            name="store_code"
            rules={[
              { required: true, message: "Please input your Store Code!" },
            ]}
          >
            <Input
              className="store-input"
              value={this.state.first_name}
              onChange={this.handleStoreCodeChange}
            />
          </Form.Item>

          <Form.Item
            label="Order Total"
            name="order_total"
            rules={[
              { required: true, message: "Please input your Order Total" },
            ]}
          >
            <Input
              type="text"
              className="store-input"
              value={this.state.last_name}
              onChange={this.handleOrderTotalChange}
            />
          </Form.Item>

          <Form.Item
            label="Gross Order Total"
            name="gross_order_total"
            rules={[
              {
                required: true,
                message: "Please input your Gross Order Total!",
              },
            ]}
          >
            <Input
              type="text"
              className="store-input"
              value={this.state.last_name}
              onChange={this.handleGrossOrderChange}
            />
          </Form.Item>

          <Form.Item
            label="Order Reference"
            name="order_reference"
            rules={[
              { required: true, message: "Please input your Order Reference!" },
            ]}
          >
            <Input
              onChange={this.handleOrderRefChange}
              className="store-input"
              value={this.state.cell_number}
            />
          </Form.Item>

          <div>
            {this.state.items.map(function (item, index) {
              return (
                <div>
                  <Form.Item
                    label="Code"
                    name={`name${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Order code!",
                      },
                    ]}
                  >
                    <Input
                      className="store-input"
                      value={item}
                      onChange={(e) => this.handleCodeChange(e, index)}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Description"
                    name={`description${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Description!",
                      },
                    ]}
                  >
                    <Input
                      className="store-input"
                      value={item}
                      onChange={(e) => this.handleDescriptionChange(e, index)}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Quantity"
                    name={`quantity${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Quantity!",
                      },
                    ]}
                  >
                    <Input
                      className="store-input"
                      value={item}
                      onChange={(e) => this.handleQuantityChange(e, index)}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Price"
                    name={`price${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Price!",
                      },
                    ]}
                  >
                    <Input
                      className="store-input"
                      value={item}
                      onChange={(e) => this.handlePriceChange(e, index)}
                    />
                  </Form.Item>
                </div>
              );
            })}
          </div>

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
        <Button
          type="primary"
          onClick={this.addItem}
          className="btn-add"
          htmlType="submit"
        >
          Add Item
        </Button>
      </div>
    );
  }
}

export default Subscribe;
