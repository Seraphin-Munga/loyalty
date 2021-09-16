import { Table } from "antd";
import { Form, Input, Button } from "antd";
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axiosInstance from "../../environments/api";
import storeModel from "../../core/models/store-model";
import { Select } from "antd";
import ILoyaltyModel from "../../core/models/loyalty.model";

const mysILoyaltyModel = storeModel;

class Balance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Option, OptGroup } = Select;
    return <div className="container-store"></div>;
  }
}

export default Balance;
