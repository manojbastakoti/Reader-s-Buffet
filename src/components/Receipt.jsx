import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/Receipt.css";

export default function Receipt() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <div className="container-fluid wrapper">
        <h3 className="header">Order Summary:</h3>

        <table border={3}>
          <tr>
            <th>State</th>
            <th>Values</th>
          </tr>
          <tr>
            <td>Payment by:</td>
            <td>
              <b>{state.name}</b>
            </td>
          </tr>
          <tr>
            <td>Payment type:</td>
            <td>
              <b>{state.type}</b>
            </td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>
              <b>{state.state}</b>
            </td>
          </tr>
          <tr>
            <td>Product Id.:</td>
            <td>
              <b>{state.product_id}</b>
            </td>
          </tr>
          <tr>
            <td>Product name:</td>
            <td>
              <b>{state.title}</b>
            </td>
          </tr>
          <tr>
            <td>Total Amount(in paisa):</td>
            <td>
              <b>{state.total}</b>
            </td>
          </tr>
        </table>

<Link to="/">
        <Button variant="outline-primary" className="home">Homepage</Button>
        </Link>
      </div>
    </>
  );
}
