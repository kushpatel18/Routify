import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { ToastHeader } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  function App() {
    const navigateToLogin = () => {
      window.location.href = "/login";
    };
  }
  return (
    <div>
      <header className="header">
        {/* <a href="#" className="logo">Routify</a>

        <nav className="navbar">
            <a href="#" className="active">About</a>
            <a href="#">Notification</a>
            <a href="#">Profile</a>
        </nav> */}
        <Navbar />
      </header>
      <section className="home">
        <div className="content">
          <i>
            <h1>YOUR JOURNEY, OUR EXPERTISE</h1>
          </i>
          <a href="/login">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
