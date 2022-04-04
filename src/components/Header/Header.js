import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import image from "../../image/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container justify-content-lg-between align-items-center d-md-flex flex-column flex-lg-row">
        <div>
          <div className="pt-3 pt-lg-0">
            <img className="img-fluid" src={image} alt="" />
          </div>
        </div>

        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/review"
          >
            Review
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/about"
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
