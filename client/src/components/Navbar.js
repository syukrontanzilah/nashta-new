import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-warning bg-success mb-4">
        {/* Title Web */}
        <Link to="/" className="navbar-brand h1 ml-4 text-white" href="/">
          COFFee BREAK
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              {/* Tambah event */}
              <Link to="/add" className="no-underline nav-link text-warning">
                <i className="fa fa-plus mr-sm-2"></i>Tambah Event{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-4">
              {/* Beranda/List */}
              <Link to="/dashboard" className="nav-link text-white">
               Beranda
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
