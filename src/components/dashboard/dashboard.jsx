import { Card, Col, Row } from "antd";
import React, { Component, useState, useEffect } from "react";
import "../dashboard/dashboard.scss";
import axiosInstance from "../../environments/api";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registered_stores: "",
      stores_no_loyalty: "",
      stores_no_voucher: "",
      active_stores: "",
      total_members: "",
      active_loyalty_members: "",
      blocked_members: "",
      total_orders: "",
      total_order_value: "",
      avg_order_value: "",
    };

    const api_token = sessionStorage.getItem("token");
    const user_id = sessionStorage.getItem("id");
    axiosInstance
      .post(`dashboard/client?api_token=${api_token}&user_id=${user_id}`)
      .then((data) => {
        this.setState({
          registered_stores: data.data.data.registered_stores,
          stores_no_loyalty: data.data.data.stores_no_loyalty,
          stores_no_voucher: data.data.data.stores_no_voucher,
          active_stores: data.data.data.active_stores,
          total_members: data.data.data.total_members,
          active_loyalty_members: data.data.data.active_loyalty_members,
          blocked_members: data.data.data.blocked_members,
          total_orders: data.data.data.total_orders,
          total_order_value: data.data.data.total_order_value,
          avg_order_value: data.data.data.avg_order_value,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container-dashboard">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Register Stores" className="card" bordered={false}>
              {this.state.registered_stores}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Store No Loyalty" className="card" bordered={false}>
              {this.state.stores_no_loyalty}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Store No Voucher" className="card" bordered={false}>
              {this.state.stores_no_voucher}
            </Card>
          </Col>
        </Row>

        <Row gutter={16} className="inner-conntainer">
          <Col span={8}>
            <Card title="Active Stores" className="card" bordered={false}>
              {this.state.active_stores}
            </Card>
          </Col>

          <Col span={8}>
            <Card title="Total Members" className="card" bordered={false}>
              {this.state.total_members}
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Active Loyalty Members"
              className="card"
              bordered={false}
            >
              {this.state.active_loyalty_members}
            </Card>
          </Col>
        </Row>

        <Row gutter={16} className="inner-conntainer">
          <Col span={8}>
            <Card title="Blocked Members" className="card" bordered={false}>
              {this.state.blocked_members}
            </Card>
          </Col>

          <Col span={8}>
            <Card title="Total Orders" className="card" bordered={false}>
              {this.state.total_orders}
            </Card>
          </Col>

          <Col span={8}>
            <Card title="Total Order Value" className="card" bordered={false}>
              {this.state.total_order_value}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
