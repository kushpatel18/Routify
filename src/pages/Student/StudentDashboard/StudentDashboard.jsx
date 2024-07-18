import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Student/Sidebar/Sidebar";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./StudentDashboard.css";

// Define custom marker icons

const stopIcon = new L.Icon({
  iconUrl: "/Public/assets/stop.png",
  iconSize: [25, 25],
});

const StudentDashboard = () => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);

  const studentDetails = {
    student_id: "10050",
    name: "Evelyn Walker",
    age: 21,
    department: "CSE",
    year: 4,
    semester: 8,
    bus_id: "BUS-1",
    stop_id: "ST-03",
  };

  const busDetails = {
    bus_id: "BUS-1",
    capacity: 50,
    route: "Transpek Company - Parul University",
    stops: ["ST-01", "ST-02", "ST-03", "ST-04", "ST-05", "ST-06"],
    driver_id: ["DRV-101", "DRV-106"],
  };

  const driverDetails = {
    driver_id: "DRV-101",
    name: "John Doe",
    age: 45,
    bus_id: "BUS-1",
  };

  const stops = [
    {
      stop_id: "ST-01",
      location: "Parul University",
      latitude: 22.288749,
      longitude: 73.363841,
      buses: ["BUS-1", "BUS-2", "BUS-3", "BUS-4", "BUS-5"],
    },
    {
      stop_id: "ST-03",
      location: "Billabong School",
      latitude: 22.2589,
      longitude: 73.18822,
      buses: ["BUS-1"],
    },
    {
      stop_id: "ST-03",
      location: "Billabong School 2",
      latitude: 22.2589,
      longitude: 73.18,
      buses: ["BUS-1"],
    },
    {
      stop_id: "ST-06",
      location: "Sardar Chowk, Tarsali Gam",
      latitude: 22.27228,
      longitude: 73.17242,
      buses: ["BUS-1", "BUS-2"],
    },
  ];

  useEffect(() => {
    const fetchRoute = async () => {
      const start = stops.find((stop) => stop.stop_id === busDetails.stops[0]);
      const end = stops.find((stop) => stop.stop_id === busDetails.stops[busDetails.stops.length - 1]);
      // 22.366801946112123, 73.33985240177286
      if (start && end) {
        const apiKey = import.meta.env.VITE_MAP_API_KEY;
        const url = `https://api.geoapify.com/v1/routing?waypoints=${start.latitude},${start.longitude}|${end.latitude},${end.longitude}&mode=drive&apiKey=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data && data.features) {
          const coordinates = data.features[0].geometry.coordinates[0].map((coord) => [coord[1], coord[0]]);
          setRouteCoordinates(coordinates);
          setLoading(false);
        }
      }
    };

    fetchRoute();
  }, []);

  return (
    <div className="student-dashboard">
      <div className="sidebar">
        <Sidebar name={studentDetails.name} />
      </div>
      <div className="dashboard" >
        <div className="map-container">
          <div className="map" style={{width:"100%"}}>
            <h3>Map</h3>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <MapContainer center={[22.288749, 73.363841]} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={routeCoordinates} color="blue" />
                {stops.map((stop) => (
                  <Marker key={stop.stop_id} position={[stop.latitude, stop.longitude]} icon={stopIcon}>
                    <Popup>{stop.location}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
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
              <span className="info-value">Transpek Company</span>
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
            <img src={"/Public/assets/bus.svg"} alt="Bus" className="bus-image" />
            <div className="bus-details">
              <p>Bus Id: {busDetails.bus_id}</p>
              <p>Name: {driverDetails.name}</p>
              <p>Age: {driverDetails.age}</p>
              <p>Id: {driverDetails.driver_id}</p>
              <p>Phone No.: 9472393729 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
