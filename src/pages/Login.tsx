import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    // Outer Flex Box
    <div className="bg-white flex flex-row justify-center w-full">
      {/* Screen */}
      <div className="bg-white overflow-hidden w-[1440px] h-[1024px]">
        <div className="relative w-[3370px] h-[1665px] top-[-134px] left-[-1811px]">
          {/* Purple Box */}
          <div className="absolute w-[350px] h-[550px] md:w-[1200px] md:h-[800px] top-[246px] left-[1931px] bg-[#9999ff] overflow-hidden shadow-[inset_15px_-6px_34px_#ffffff40,15px_35px_56px_#00000040]">
            {/* N/A */}
            <div className="relative w-[1288px] h-[867px] top-[-67px]">
              {/* N/A */}
              <div className="w-[534px] h-[467px] left-[754px] bg-[#9999ff] rounded-[267px/233.5px] absolute top-0" />
              <div className="w-[534px] h-[467px] left-[754px] bg-[#e15a97] rounded-[267px/233.5px] blur-[150px] absolute top-0" />
              {/* <img
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
              /> */}
              {/* <img
                className="absolute w-[1200px] h-[800px] top-[67px] left-0 bg-blend-overlay"
                alt="Noise"
                src="noise.png"
              /> */}
              {/* Colour Dodge */}
              <div className="absolute w-[121px] h-[121px] top-[129px] left-[333px] md:w-[242px] md:h-[242px] md:top-[257px] md:left-[665px] bg-[#6488d7] rotate-[28.10deg] blur-[100px] mix-blend-color-dodge" />
              <div className="absolute w-[121px] h-[121px] top-[289px] left-[50px] md:w-[242px] md:h-[242px] md:top-[578px] md:left-[99px] bg-[#6488d7] rotate-[-25.59deg] blur-[137px] mix-blend-color-dodge" />
            </div>
          </div>
          {/* N/A */}
          <div className="absolute w-[3370px] h-[1665px] top-0 left-0">
            {/* N/A */}
            <div className="relative w-[1440px] h-[1133px] top-[25px] left-[1811px]">
              {/* Blue Oval */}
              <div className="w-[502px] h-[351px] left-[453px] bg-[#65adedcc] rounded-[251px/175.5px] absolute top-0" />
              {/* <img
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
              /> */}
            </div>
          </div>
          {/* Content */}
          <section className="grid gap-8 md:grid-cols-2 md:items-center text-centermd:text-left">
            {/* Weclome Back Message */}
            <div className="absolute w-[514px] top-[340px] md:top-[392px] left-[1990px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-white text-[30px] md:text-[96px] tracking-[0] leading-[normal]">
              Welcome Back!
            </div>
            {/* Login Flex Box */}
            <div className="flex flex-col w-[350px] h-[400px] md:w-[599px] md:h-[800px] items-start justify-center gap-[16px] md:gap-[47px] pt-[100px] md:pt-[70px] pb-[109px] px-[80px] md:px-[109px] absolute top-[396px] left-[1931px] md:top-[246px] md:left-[2532px] bg-[#ffffffb2]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[24px] md:text-[96px] tracking-[0] leading-[normal]">
                Login
              </div>

              {/* Email Address */}
              <label
                className="relative w-fit [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] md:text-[24px] tracking-[0] leading-[normal]"
                for="email"
              >
                Email Address
              </label>

              <input
                className="relative w-[200px] md:w-[346px] h-[75px] p-1 text-[16px] md:text-[24px]"
                type="email"
                id="email"
                // class="form-control form-control-lg"
                placeholder="name@example.com"
              />

              {/* Password */}
              <div
                className="relative w-fit [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] md:text-[24px] tracking-[0] leading-[normal]"
                for="password"
              >
                Password
              </div>

              <input
                className="relative w-[200px] md:w-[346px] h-[75px] p-1 text-[16px] md:text-[24px]"
                type="password"
                id="password"
                // class="form-control form-control-lg"
                aria-describedby="passwordHelpBlock"
              />
              <div
                id="passwordHelpBlock"
                className="form-text w-[200px] md:w-[346px] text-[10px] md:text-[20px]"
              >
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </div>
              <Link
                to="/consultant/timesheet"
                className="btn btn-outline-primary btn-lg"
              >
                Login
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
