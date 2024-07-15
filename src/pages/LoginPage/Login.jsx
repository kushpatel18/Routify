import React from "react";
import "./Login.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [enrollNo, setEnrollNo] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role
  const [enrollNoError, setEnrollNoError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    // Set initial error values to empty
    setEnrollNoError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === enrollNo) {
      setEnrollNoError("Please enter your Enrollment Number");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 6) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enrollNo, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        // Redirect to another page or perform another action
        try{
          navigate('/')
        }
        catch(err){
          console.log(err);
        }
        console.log("Successful");
      } else {
        console.error(data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="login">
      <div className="heading">
        <h1>Few Steps Away From Your Destination</h1>
      </div>
      <div className="login-body">
        <div className="login-container">
          <div className="login-heading">
            <h1>Login</h1>
          </div>
          <div className="login-options">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="admin"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="admin">
                Admin
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="student"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="student">
                Student
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="driver"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="driver">
                Driver
              </label>
            </div>
          </div>
          <div className="login-form">
            <form method="POST" onSubmit={onSubmit}>
              <div className="form-group mb-4">
                <input
                  value={enrollNo}
                  type="text"
                  className="form-control"
                  id="enrollment-number"
                  placeholder="Enrollment Number"
                  onChange={(e) => {
                    setEnrollNo(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-5">
                <input
                  value={password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="text-center mb-4">
                <button type="submit" className="btn  btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
