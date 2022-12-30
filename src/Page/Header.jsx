import React from "react";

function Header() {
  return (
    <header className="mt-[46px]">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <span className="font-bold text-[25px]  text-[#F36B7F] ">
            Clean Cruiz
          </span>
        </div>
        <div className="menu">
          <ul className="flex gap-[40px] text-[15px] uppercase">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About Us</a>
            </li>
            <li>
              <a href="/#">Services</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>

            <li className="border-2 border-red-500 border-t-2 rounded-[30px] leading-none   px-[20px]">
              <a href="/#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
