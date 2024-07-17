import React from "react";
import Avatar from "../../../assets/avatar.svg";
import Dashboard from "../../../assets/dashboard.svg";
import Notification from "../../../assets/notification.svg";
import Settings from "../../../assets/settings.svg";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ name = 'Admin 1234' }) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={Avatar} alt="Profile" className="avatar" />
        <h3>{name}</h3>
      </div>
      <div className="menu">
        <Link to="/student" className="menu-item active">
          <i className="fas fa-tachometer-alt">
            <img src={Dashboard} alt="" />
          </i>
          Dashboard
        </Link>
      </div>
      <div className="footer">
        <Link to="/logout" className="menu-item">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
