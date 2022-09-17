import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand">
            {" "}
            <FaHouseUser /> User Managment System{" "}
          </span>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/profile">
                Add New
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Logout{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="wrapper" class="toggled">
        <div class="container-fluid">
          <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
              <li class="sidebar-brand"></li>
              <li class="sidebar-brand">
                <a href="javascript:void(0)" class="navbar-brand">
                  <span
                    class="glyphicon glyphicon-user"
                    aria-hidden="true"
                  ></span>{" "}
                  Profile
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <span
                    class="glyphicon glyphicon-home"
                    aria-hidden="true"
                  ></span>{" "}
                  Home
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <span
                    class="glyphicon glyphicon-search"
                    aria-hidden="true"
                  ></span>{" "}
                  Search
                </a>
              </li>
              <li>
                <span
                  class="glyphicon glyphicon-search"
                  aria-hidden="true"
                ></span>
                <font color="#337AB7"> STATISTICS</font>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <span
                    class="glyphicon glyphicon-tasks"
                    aria-hidden="true"
                  ></span>{" "}
                  Reports
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <span
                    class="glyphicon glyphicon-stats"
                    aria-hidden="true"
                  ></span>{" "}
                  Statistic
                </a>
              </li>
              <li>
                <span
                  class="glyphicon glyphicon-search"
                  aria-hidden="true"
                ></span>
                <font color="#337AB7"> ADMINISTRATION</font>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <span
                    class="glyphicon glyphicon-user"
                    aria-hidden="true"
                  ></span>{" "}
                  Users
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <span
                    class="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></span>{" "}
                  Messages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
