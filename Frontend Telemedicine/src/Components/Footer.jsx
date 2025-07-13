import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*--------------------- Left Section---------------------- */}
        <div className="block">
          <img className="-mt-4 w-40" src={assets.Iconlogo} alt="Logo" />
          <p className="w-full md:w-1/2 text-gray-600 leading-6">
            We blend creativity, technology, and strategy to build solutions
            that not only meet expectations but exceed them. Our focus is on
            delivering value through innovation, collaboration, and a deep
            understanding of your goals.
          </p>
        </div>

        {/*--------------------- Center Section---------------------- */}
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>

        {/*--------------------- right Section---------------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 902676494</li>
            <li>telemedicine@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* ---------------Copyright Text-------------------- */}
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2025@TeleMedicine - All Right are Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
