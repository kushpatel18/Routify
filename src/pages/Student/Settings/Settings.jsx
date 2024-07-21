import React from "react";
import "./Settings.css";
import AddPhoto from "../../../assets/addPhoto.svg";
import Sidebar from "../../../components/Student/Sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="sidebar">
        <Sidebar name={"Evelyn Walker"} />
      </div>
      <div className="settings-page">
        <div className="settings-header">
          <img src={AddPhoto} alt="Add Photo" className="add-photo-icon" />
          <h3>Add Photo</h3>
          {/* <button className="help-button">Help?</button> */}
        </div>
        <div className="settings-form-container">
          <form className="settings-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value="Evelyn Walker" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="enrollment">Enrollment No.:</label>
              <input
                type="text"
                id="enrollment"
                value="210305105395"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input type="text" id="department" value="CSE" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="time-slots">Time-Slots:</label>
              <input type="text" id="time-slots" value="9:30 - 4:30" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="pickup-points">Pickup Points:</label>
              <input
                type="text"
                id="pickup-points"
                value="Nagarwada"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Change Password:</label>
              <input type="password" id="password" value="********" />
            </div>
            <button type="submit" className="confirm-button">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
