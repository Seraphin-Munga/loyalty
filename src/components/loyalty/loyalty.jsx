import { Table } from "antd";
import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axiosInstance from "../../environments/api";

class Loyalty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const api_token = sessionStorage.getItem("token");
    const user_id = sessionStorage.getItem("id");
    axiosInstance
      .get(`loyalty/member/all/${user_id}?api_token=${api_token}`)
      .then((data) => {
        this.setState({
          data: data.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const renObjData = this.state.data.map(function (data, idx) {
      return (
        <tr>
          <td>{data.first_name}</td>
          <td>{data.last_name}</td>
          <td>{data.cell_number}</td>
          <td>{data.balance}</td>
        </tr>
      );
    });
    return (
      <div className="container-store">
        <Link to="/create-loyalty">
          <button className="btn-create"> CREATE</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th> Cell Number</th>
              <th>Balance</th>
            </tr>
          </thead>

          <tbody>{renObjData}</tbody>
        </table>
      </div>
    );
  }
}

export default Loyalty;
