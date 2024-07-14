import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Home;
