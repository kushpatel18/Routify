import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import About from "../../assets/about.svg";
import Notification from "../../assets/notification_logo.svg";
import Profile from "../../assets/profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="" />
          <h2>ROUTIFY</h2>
        </div>

        <nav className="navbar_body">
          <Link to="/about">
            <img src={About} alt="" />
          </Link>
          <Link to="/notifications">
            <img src={Notification} alt="" />
          </Link>
          <Link to="/profile">
            <img src={Profile} alt="" />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
