import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="Contact Image"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg  text-gray-600">Our Office</p>
          <p className="text-gray-500">
            C-512 Beta 1, Block C <br /> Greater Noida
          </p>
          <p className="text-gray-500">
            Mob: (+91) 9026776494 <br />
            Email: digichikitsa@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at DigiChikitsa
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-[var(--primary)] hover:text-white transition-all duration-400 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
