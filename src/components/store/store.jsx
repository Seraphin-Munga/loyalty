import "../store/store.scss";
import { Table } from "antd";
import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axiosInstance from "../../environments/api";

class Store extends React.Component {
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
      .get(`store/all/${user_id}?api_token=${api_token}`)
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
          <td>{data.name}</td>
          <td>{data.total_members}</td>
          <td>{data.address}</td>
          <td>{data.code}</td>
        </tr>
      );
    });
    return (
      <div className="container-store">
        <Link to="/create">
          <button className="btn-create"> CREATE</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Members</th>
              <th>Address</th>
              <th>Code</th>
            </tr>
          </thead>

          <tbody>{renObjData}</tbody>
        </table>
      </div>
    );
  }
}

export default Store;
