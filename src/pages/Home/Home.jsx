import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { ToastHeader } from "react-bootstrap";

const Home = () => {
  function App() {
    const navigateToLogin = () => {
      window.location.href = '/login';
    };
  }
  return (
    <div>
     <header class="header">
        <a href="#" class="logo">Routify</a>

        <nav class="navbar">
            <a href="#" class="active">About</a>
            <a href="#">Notification</a>
            <a href="#">Profile</a>
        </nav>
    </header>
     <section className="home">
      <div className="content">
        <i><h1>YOUR JOURNEY, OUR EXPERTISE</h1></i>
        <a href="/login">Get Started</a>
        
      </div>
     </section>
    </div>
  );
};

export default Home;

