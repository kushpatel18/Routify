import React from "react";
import Sidebar from "../../../components/Student/Sidebar/Sidebar";
import "./StudentDashboard.css";
import Map from "../../../assets/map.svg";
import Bus from "../../../assets/bus.svg";

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="dashboard">
        <div className="map-container">
          <div className="map">
            <h3>Map</h3>
            <img src={Map} alt="Map" className="map-image" />
          </div>
          <div className="info">
            <div className="info-item">
              <span className="info-label">Arrival Time:</span>
              <span className="info-value">8:00 am</span>
            </div>
            <div className="info-item">
              <span className="info-label">Departure Time:</span>
              <span className="info-value">5:00 am</span>
            </div>
            <div className="info-item">
              <span className="info-label">Starting Point:</span>
              <span className="info-value">Nagarwada</span>
            </div>
            <div className="info-item">
              <span className="info-label">Destination:</span>
              <span className="info-value">Parul University</span>
            </div>
          </div>
        </div>
        <div className="bus-container">
          <h3>Bus</h3>
          <div className="bus-info">
            <img src={Bus} alt="Bus" className="bus-image" />
            <div className="bus-details">
              <p>Bus Id: GJ 06 BV 1202</p>
              <p>Name: Kishanbhai Vasava</p>
              <p>Age: 35</p>
              <p>Id: 230</p>
              <p>Phone No.: 9090909090</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
