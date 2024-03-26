import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    // Outer Flex Box
    <div className="bg-white flex flex-row justify-center w-full">
      {/* Screen */}
      <div className="bg-white overflow-hidden w-[90rem] h-[64rem]">
        <div className="relative w-[210.625rem] h-[104.063rem] top-[-8.375rem] left-[-113.188rem]">
          {/* Purple Box */}
          <div className="relative w-[21.875rem] h-[34.375rem] md:w-[75rem] md:h-[50rem] top-[15.375rem] left-[120.688rem] bg-[#9999ff] overflow-hidden shadow-[inset_0.938rem_-0.375rem_2.125rem_#ffffff40,0.938rem_2.188rem_3.5rem_#00000040]">
            {/* N/A */}
            <div className="relative w-[80.5rem] h-[54.188rem] top-[-4.188rem]">
              {/* N/A */}
              <div className="w-[33.375rem] h-[29.188] left-[47.125rem] bg-[#9999ff] rounded-[16.688rem/14.594rem] absolute top-0" />
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
              <div className="absolute w-[7.563rem] h-[7.563rem] top-[8.063rem] left-[20.813rem] md:w-[15.125rem] md:h-[15.125rem] md:top-[16.063rem] md:left-[41.563rem] bg-[#6488d7] rotate-[28.10deg] blur-[6.25rem] mix-blend-color-dodge" />
              <div className="absolute w-[7.563rem] h-[7.563rem] top-[18.063rem] left-[3.125rem] md:w-[242px] md:h-[15.125rem] md:top-[36.125rem] md:left-[6.188rem] bg-[#6488d7] rotate-[-25.59deg] blur-[8.563rem] mix-blend-color-dodge" />
            </div>
          </div>
          {/* {N/A}
          <div className="absolute w-[210.625rem] h-[104.063rem] top-0 left-0">
            {N/A/}
            <div className="absolute w-[90rem] h-[70.813rem] top-[1.563rem] left-[113.188rem]">
              {Blue Oval}
              <div className="w-[31.375rem] h-[21.938rem] left-[28.313rem] bg-[#65adedcc] rounded-[15.688rem/10.969rem] absolute top-0" />
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
          </div> */}
          {/* Content */}
          <section className="grid gap-8 md:grid-cols-2 md:items-center text-centermd:text-left">
            {/* Weclome Back Message */}
            <div className="absolute w-[32.125rem] top-[21.25rem] md:top-[24.5rem] left-[124.375rem] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-white text-[1.875rem] md:text-[6rem] tracking-[0] leading-[normal]">
              Welcome Back!
            </div>
            {/* Login Flex Box */}
            <div className="flex flex-col w-[21.875rem] h-[25rem] md:w-[37.438rem] md:h-[50rem] items-start justify-center gap-[1rem] md:gap-[2.938rem] pt-[6.25rem] md:pt-[4.375rem] pb-[6.813rem] px-[5rem] md:px-[6.813rem] absolute top-[24.75rem] left-[120.688rem] md:top-[15.375rem] md:left-[158.25rem] bg-[#ffffffb2]">
              <div className="relative w-fit mt-[-0.063rem] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[1.5rem] md:text-[6rem] tracking-[0] leading-[normal]">
                Login
              </div>

              {/* Email Address */}
              <label
                className="relative w-fit [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[1rem] md:text-[1.5rem] tracking-[0] leading-[normal]"
                for="email"
              >
                Email Address
              </label>

              <input
                className="relative w-[12.5rem] md:w-[21.625rem] h-[4.688rem] p-1 text-[1rem] md:text-[1.5rem]"
                type="email"
                id="email"
                // class="form-control form-control-lg"
                placeholder="name@example.com"
              />

              {/* Password */}
              <div
                className="relative w-fit [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[1rem] md:text-[1.5rem] tracking-[0] leading-[normal]"
                for="password"
              >
                Password
              </div>

              <input
                className="relative w-[12.5rem] md:w-[21.625rem] h-[4.688rem] p-1 text-[1ren] md:text-[1.5rem]"
                type="password"
                id="password"
                // class="form-control form-control-lg"
                aria-describedby="passwordHelpBlock"
              />
              <div
                id="passwordHelpBlock"
                className="form-text w-[12.5rem] md:w-[21.625rem] text-[0.625rem] md:text-[1.25rem]"
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
