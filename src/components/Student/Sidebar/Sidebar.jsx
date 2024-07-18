import { React, useState } from "react";
import Avatar from "../../../assets/avatar.svg";
import Dashboard from "../../../assets/dashboard.svg";
import Notification from "../../../assets/notification.svg";
import Settings from "../../../assets/settings.svg";
import "./Sidebar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Sidebar = ({ name  }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("/student");

  const handleSetActive = (path) => {
    setActiveItem(path);
  };

  const handleLogout = () => {
    // Clear any authentication tokens or session data
    // localStorage.removeItem("authToken"); // Example: remove a token from localStorage
    // history.push("/login"); // Redirect to the login page
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={Avatar} alt="Profile" className="avatar" />
        <h3>{name}</h3>
      </div>
      <div className="menu">
        <Link
          to="/student"
          onClick={() => handleSetActive("/student")}
          className={`menu-item ${activeItem === "/student" ? "active" : ""}`}
        >
          <i className="fas fa-tachometer-alt">
            <img src={Dashboard} alt="" />
          </i>
          Dashboard
        </Link>
        <Link
          to="/student/notifications"
          onClick={() => handleSetActive("/student/notifications")}
          className={`menu-item ${
            activeItem === "/student/notifications" ? "active" : ""
          }`}
        >
          <i className="fas fa-bell">
            <img src={Notification} alt="" />
          </i>{" "}
          Notification
        </Link>
        <Link
          to="/student/settings"
          onClick={() => handleSetActive("/student/settings")}
          className={`menu-item ${
            activeItem === "/student/settings" ? "active" : ""
          }`}
        >
          <i className="fas fa-cog">
            <img src={Settings} alt="" />
          </i>
          Settings
        </Link>
      </div>
      <div className="footer">
        <Link to={"/login"} onClick={handleLogout} className="menu-item">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
