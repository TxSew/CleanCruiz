import React from "react";
import { Topbarthumnail } from "../assets";
const Topbar = () => {
  return (
    <section className="Topbar pt-[70px]">
      <div className="container flex items-center">
        <div className="Topbar-left w-[50%]">
          <div className="heading-topbar">
            <h1 className="text-[50px] text-[#2B3F60] font-[800] leading-[68.09px] ">
              Let us handle your next cleaning
            </h1>
            <p className="mt-[24px] leading-[29px] text-[16px] font-[600] pr-[50px]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Thank
              you.
            </p>
            <button className="block outline-none border-none px-[42px] py-[7px] rounded-[30px] mt-[24px] text-[#fff] uppercase bg-[#F36B7F]">
              book now
            </button>
          </div>
        </div>
        {/* ttopbar right */}
        <div className="Topbar-right">
          <Topbarthumnail />
        </div>
      </div>
    </section>
  );
};
export default Topbar;
