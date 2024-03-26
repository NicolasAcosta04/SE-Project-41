import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/consultant/timesheet";
    navigate(path);
  };

  return (
    // Outer Flex Box
    <div className="outer-flex-box">
      {/* Screen */}

      <div className="screen">
        <div className="screen2">
          {/* Purple Box */}
          <div className="purple-box">
            {/* Colour Dodge */}
            <div className="colour-dodge" />
            <div className="colour-dodge2" />
          </div>
          {/* Content */}
          <section className="content">
            {/* Weclome Back Message */}
            <div className="welcome-back-message">Welcome Back!</div>
            {/* Login Flex Box */}
            <div className="login-flex-box">
              {/* Login Heading */}
              <div className="login-heading">Login</div>

              {/* Email Address */}
              <label className="email-address">Email Address</label>

              <input
                className="login-input"
                type="email"
                id="email"
                placeholder="name@example.com"
              />

              {/* Password */}
              <div className="password">Password</div>

              <input
                className="login-input"
                type="password"
                id="password"
                aria-describedby="passwordHelpBlock"
              />
              <div id="passwordHelpBlock" className="login-help-message">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>
              <Button colour="secondary" onClick={routeChange}>
                Login
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
