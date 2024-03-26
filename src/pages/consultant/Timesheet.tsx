import React from "react";
import { Link } from "react-router-dom";
// import { BsCalendar2Check } from "./BsCalendar2Check";
// import { PatternDiagonal } from "./PatternDiagonal";

export default function Timesheet() {
  return (
    <div className="w-[1440px] h-[1024px] bg-white">
      <div className="timesheet">
        <h1>Timesheet</h1>
      </div>
      <div className="relative h-[1133px] top-[-109px]">
        <img
          className="absolute w-[1052px] h-[534px] top-[599px] left-0"
          alt="Vector"
          src="vector-9.svg"
        />
        <img
          className="absolute w-[1056px] h-[956px] top-[177px] left-[384px]"
          alt="Vector"
          src="vector-5.svg"
        />
        <div className="absolute w-[502px] h-[351px] top-0 left-[453px] bg-[#65adedcc] rounded-[251px/175.5px]" />
        <img
          className="absolute w-[429px] h-[1024px] top-[109px] left-0"
          alt="Vector"
          src="vector-8.svg"
        />
        <img
          className="absolute w-[653px] h-[121px] top-[109px] left-[787px]"
          alt="Rectangle"
          src="rectangle-36.svg"
        />
        <div className="absolute w-[188px] h-[1024px] top-[109px] left-0 bg-[#e5e5e5b2]">
          {/* <BsSliders className="!top-[591px] !absolute !w-[75px] !h-[75px] !left-[56px]" />
          <BsTags className="!top-[445px] !absolute !w-[75px] !h-[75px] !left-[56px]" />
          <BsInbox className="!top-[153px] !absolute !w-[75px] !h-[75px] !left-[56px]" />
          <BsTable className="!top-[299px] !absolute !w-[75px] !h-[75px] !left-[56px]" /> */}
          <img
            className="absolute w-[165px] h-[87px] top-[10px] left-[14px]"
            alt="Image"
            src="image-1.png"
          />
        </div>
        <div className="absolute w-[1200px] h-[800px] top-[300px] left-[218px] bg-[#fdfdffb2] shadow-[15px_35px_56px_#00000040]">
          <div className="absolute top-[10px] left-[12px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
            Timesheet ID: TS00001
          </div>
          <div className="absolute top-[10px] left-[345px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
            Approved:
          </div>
          {/* <BsCalendar2Check className="!absolute !w-[30px] !h-[30px] !top-[11px] !left-[478px]" /> */}
          <div className="absolute top-[10px] left-[573px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
            Hours Worked: 35
          </div>
          <div className="absolute w-[65px] top-[71px] left-[160px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            11/03/24
          </div>
          <div className="w-[64px] left-[319px] absolute top-[71px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            12/03/24
          </div>
          <div className="w-[65px] left-[476px] absolute top-[71px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            13/03/24
          </div>
          <div className="w-[66px] left-[633px] absolute top-[71px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            14/03/24
          </div>
          <div className="w-[65px] left-[790px] absolute top-[71px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            15/03/24
          </div>
          <div className="w-[65px] left-[947px] absolute top-[71px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            16/03/24
          </div>
          <div className="w-[64px] left-[1104px] absolute top-[71px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            17/03/24
          </div>
          <div className="w-[39px] top-[134px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            08:00
          </div>
          <div className="w-[39px] top-[191px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            09:00
          </div>
          <div className="w-[38px] top-[248px] whitespace-nowrap absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            10:00
          </div>
          <div className="w-[37px] top-[306px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            11:00
          </div>
          <div className="w-[37px] top-[363px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            12:00
          </div>
          <div className="w-[37px] top-[420px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            13:00
          </div>
          <div className="w-[38px] top-[478px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            14:00
          </div>
          <div className="w-[38px] top-[535px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            15:00
          </div>
          <div className="w-[37px] top-[592px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            16:00
          </div>
          <div className="w-[37px] top-[650px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            17:00
          </div>
          <div className="w-[38px] top-[707px] absolute left-[31px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
            18:00
          </div>
          <div className="absolute w-[1084px] h-[576px] top-[142px] left-[85px]">
            <div className="absolute w-[140px] h-[574px] top-px left-0 bg-[#d9d9d9] shadow-[inset_15px_-6px_34px_#00000040]">
              {/* <PatternDiagonal
                className="!h-[574px] ![transform:unset] !w-[140px]"
                patternDiagonal="image.svg"
              />
            </div>
            <div className="absolute w-[140px] h-[574px] top-px left-[158px] bg-[#d9d9d9] shadow-[inset_15px_-6px_34px_#00000040]">
              <PatternDiagonal
                className="!h-[574px] ![transform:unset] !w-[140px]"
                patternDiagonal="diagonal-2.svg"
              />
            </div>
            <div className="absolute w-[140px] h-[574px] top-px left-[315px] bg-[#d9d9d9] shadow-[inset_15px_-6px_34px_#00000040]">
              <PatternDiagonal
                className="!h-[574px] ![transform:unset] !w-[140px]"
                patternDiagonal="diagonal-3.svg"
              />
            </div>
            <div className="absolute w-[140px] h-[574px] top-px left-[474px] bg-[#d9d9d9] shadow-[inset_15px_-6px_34px_#00000040]">
              <PatternDiagonal
                className="!h-[574px] ![transform:unset] !w-[140px]"
                patternDiagonal="diagonal-4.svg"
              />
            </div>
            <div className="absolute w-[140px] h-[574px] top-px left-[631px] bg-[#d9d9d9] shadow-[inset_15px_-6px_34px_#00000040]">
              <PatternDiagonal
                className="!h-[574px] ![transform:unset] !w-[140px]"
                patternDiagonal="diagonal-5.svg"
              />
            </div>
            <div className="absolute w-[140px] h-[574px] top-px left-[786px] bg-[#d9d9d9] shadow-[inset_15px_-6px_34px_#00000040]">
              <PatternDiagonal
                className="!h-[574px] ![transform:unset] !w-[140px]"
                patternDiagonal="diagonal-6.svg"
              />
            </div>
            <div className="absolute w-[140px] h-[574px] top-px left-[944px] bg-[#d9d9d9] shadow-[inset_15px_-6px_34px_#00000040]">
              <PatternDiagonal
                className="!h-[574px] ![transform:unset] !w-[140px]"
                patternDiagonal="diagonal-7.svg"
              /> */}
            </div>
            <img
              className="top-0 absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-1.svg"
            />
            <img
              className="top-[59px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-2.svg"
            />
            <img
              className="top-[116px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-3.svg"
            />
            <img
              className="top-[174px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-4.svg"
            />
            <img
              className="top-[230px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-5.svg"
            />
            <img
              className="top-[287px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-6.svg"
            />
            <img
              className="top-[344px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-7.svg"
            />
            <img
              className="top-[402px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-8.svg"
            />
            <img
              className="top-[459px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-9.svg"
            />
            <img
              className="top-[516px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-10.svg"
            />
            <img
              className="top-[574px] absolute w-[1084px] h-[2px] left-0 object-cover"
              alt="Line"
              src="line-11.svg"
            />
          </div>
          <div className="absolute w-[140px] h-[31px] top-[99px] left-[85px] bg-[#83cbffb2]">
            <div className="absolute w-[65px] top-[4px] left-[37px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Monday
            </div>
          </div>
          <div className="absolute w-[140px] h-[31px] top-[99px] left-[242px] bg-[#83cbffb2]">
            <div className="absolute w-[67px] top-[4px] left-[38px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Tuesday
            </div>
          </div>
          <div className="absolute w-[140px] h-[31px] top-[99px] left-[399px] bg-[#83cbffb2]">
            <div className="absolute w-[95px] top-[4px] left-[24px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Wednesday
            </div>
          </div>
          <div className="absolute w-[141px] h-[31px] top-[99px] left-[556px] bg-[#83cbffb2]">
            <div className="absolute w-[76px] top-[4px] left-[33px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Thursday
            </div>
          </div>
          <div className="absolute w-[140px] h-[31px] top-[99px] left-[714px] bg-[#83cbffb2]">
            <div className="absolute w-[52px] top-[4px] left-[44px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Friday
            </div>
          </div>
          <div className="absolute w-[140px] h-[31px] top-[99px] left-[871px] bg-[#83cbffb2]">
            <div className="absolute w-[73px] top-[4px] left-[34px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Saturday
            </div>
          </div>
          <div className="absolute w-[140px] h-[31px] top-[99px] left-[1029px] bg-[#83cbffb2]">
            <div className="absolute w-[61px] top-[4px] left-[39px] [font-family:'Readex_Pro-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              Sunday
            </div>
          </div>
          <div className="absolute w-[140px] h-[48px] top-[731px] left-[1029px] bg-[url(/rectangle-37.svg)] bg-[100%_100%]">
          <Link
                to="/consultant/loghours"
                className="btn btn-outline-primary btn-lg"
              >
                Log Hours
            </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
