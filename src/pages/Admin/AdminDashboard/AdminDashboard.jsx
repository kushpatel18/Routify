import React from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <Sidebar  name={"Admin 1234"}/>
      </div>

      <div className="dashboard">
        <div className="table-container">
          <table className="routes-table">
            <thead>
              <tr>
                <th>Routes</th>
                <th>Driver</th>
                <th>Pick Up</th>
                <th>Drop off</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bharat Niwas - Parul University</td>
                <td>David Miller</td>
                <td>7:00 am</td>
                <td>7:30 am</td>
              </tr>
              <tr>
                <td>Gotri - Parul University</td>
                <td>Ashley Young</td>
                <td>9:00 am</td>
                <td>9:30 am</td>
              </tr>
              <tr>
                <td>Transpek Company - Parul University</td>
                <td>John Doe</td>
                <td>9:00 am</td>
                <td>9:30 am</td>
              </tr>
              <tr>
                <td>Makarpura - Parul University</td>
                <td>Jane Smith</td>
                <td>7:00 am</td>
                <td>7:30 am</td>
              </tr>
              <tr>
                <td>Manjalpur - Parul University</td>
                <td>Micheal Williams</td>
                <td>9:00 am</td>
                <td>9:30 am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
