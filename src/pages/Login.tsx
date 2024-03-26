import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
            {/* N/A */}
            {/* 
            <div className="relative w-[1288px] h-[867px] top-[-67px]">
              {
              <div className="w-[534px] h-[467px] left-[754px] bg-[#9999ff] rounded-[267px/233.5px] absolute top-0" />
              <div className="w-[534px] h-[467px] left-[754px] bg-[#e15a97] rounded-[267px/233.5px] blur-[150px] absolute top-0" />
              <img
                className="absolute w-[830px] h-[800px] top-[67px] left-0"
                alt="Vector"
                src="vector-1.svg"
              />
              <img
                className="absolute w-[1200px] h-[800px] top-[67px] left-0"
                alt="Vector"
                src="vector-4.svg"
              />
              <img
                className="absolute w-[1200px] h-[613px] top-[67px] left-0"
                alt="Vector"
                src="vector-2.svg"
              />
              <img
                className="absolute w-[1072px] h-[800px] top-[67px] left-[128px]"
                alt="Vector"
                src="vector-3.svg"
              />
              <img
                className="absolute w-[1200px] h-[800px] top-[67px] left-0 bg-blend-overlay"
                alt="Noise"
                src="noise.png"
              /> */}
            {/* Colour Dodge */}
            <div className="colour-dodge" />
            <div className="colour-dodge2" />
            {/* </div> */}
          </div>
          {/* N/A 
          <div className="absolute w-[3370px] h-[1665px] top-0 left-0">
            N/A
            <div className="relative w-[1440px] h-[1133px] top-[25px] left-[1811px]">
            */}
          {/* Blue Oval */}
          {/*
              <div className="w-[502px] h-[351px] left-[453px] bg-[#65adedcc] rounded-[251px/175.5px] absolute top-0" />
               <img
                className="absolute w-[1056px] h-[956px] top-[177px] left-[384px]"
                alt="Vector"
                src="vector-5.svg"
              />
              <img
                className="absolute w-[206px] h-[1024px] top-[109px] left-0"
                alt="Vector"
                src="vector-8.svg"
              />
              <img
                className="absolute w-[932px] h-[519px] top-[614px] left-0"
                alt="Vector"
                src="vector-9.svg"
              /> 
            </div>
          </div>*/}
          {/* Content */}
          <section className="content">
            {/* Weclome Back Message */}
            <div className="welcome-back-message">Welcome Back!</div>
            {/* Login Flex Box */}
            <div className="login-flex-box">
              {/* Login Heading */}
              <div className="login-heading">Login</div>

              {/* Email Address */}
              <label className="email-address" for="email">
                Email Address
              </label>

              <input
                className="login-input"
                type="email"
                id="email"
                // class="form-control form-control-lg"
                placeholder="name@example.com"
              />

              {/* Password */}
              <div className="password" for="password">
                Password
              </div>

              <input
                className="login-input"
                type="password"
                id="password"
                // class="form-control form-control-lg"
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
