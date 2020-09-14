import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import List from "../containers/List";


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="col-sm-12">
            <List />
            <br></br>
          </div>
        </div>
      </Fragment>
    )
  }
}