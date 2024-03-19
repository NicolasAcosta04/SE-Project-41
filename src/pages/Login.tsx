import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[1024px]">
        <div className="relative w-[3370px] h-[1665px] top-[-134px] left-[-1811px]">
          <div  className="absolute w-[1200px] h-[800px] top-[246px] left-[1931px] bg-[#9999ff] overflow-hidden shadow-[inset_15px_-6px_34px_#ffffff40,15px_35px_56px_#00000040]">
            <div className="relative w-[1288px] h-[867px] top-[-67px]">
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
              <div className="absolute w-[242px] h-[242px] top-[257px] left-[665px] bg-[#6488d7] rotate-[28.10deg] blur-[100px] mix-blend-color-dodge" />
              <div className="absolute w-[242px] h-[242px] top-[578px] left-[99px] bg-[#6488d7] rotate-[-25.59deg] blur-[137px] mix-blend-color-dodge" />
            </div>
          </div>
          <div className="absolute w-[3370px] h-[1665px] top-0 left-0">
            <div className="relative w-[1440px] h-[1133px] top-[25px] left-[1811px]">
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
          <div className="flex flex-col w-[599px] h-[800px] items-start justify-center gap-[47px] pt-[70px] pb-[109px] px-[109px] absolute top-[246px] left-[2532px] bg-[#ffffffb2]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[96px] tracking-[0] leading-[normal]">
              Login
            </div>
            <div className="relative w-fit [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
              Username
            </div>
            <input type="text" className="relative w-[346px] h-[75px] bg-[#dfdfff]" />
            <div className="relative w-fit [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
              Password
            </div>
            <input className="relative w-[346px] h-[75px] bg-[#dfdfff]" />
            <Link
              to="/consultant/timesheet"
              className="all-[unset] box-border relative w-[256px] h-[56px]"
            >
              <div className="relative w-[254px] h-[56px] bg-[url(/rectangle-40.svg)] bg-[100%_100%]">
                <button type="submit" className="absolute top-[9px] left-[94px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[normal]">
                  Login
                </button>
              </div>
            </Link>
          </div>
          <div className="absolute w-[514px] top-[392px] left-[1990px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-white text-[96px] tracking-[0] leading-[normal]">
            Welcome Back!
          </div>
        </div>
      </div>
    </div>
  );
}
