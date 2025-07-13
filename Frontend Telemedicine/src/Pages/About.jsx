import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium ">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12  ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="About Image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            At DigiChikitsa, we are on a mission to transform healthcare access
            through the power of technology. We believe that quality medical
            care should be just a few clicks away — no matter where you are.
            Founded with the vision to bridge the gap between patients and
            trusted healthcare providers, DigiChikitsa offers a seamless and
            secure platform for telemedicine consultations, appointment
            bookings, and digital health services. Our name — "DigiChikitsa" —
            blends "Digital" and "Chikitsa" (meaning "treatment" or "therapy" in
            Sanskrit), reflecting our commitment to combining modern innovation
            with the timeless value of compassionate care.
          </p>
          <b
            className="text-gray-800
          "
          >
            Our Vision
          </b>
          <p>
            To empower every individual with accessible, affordable, and
            reliable healthcare by leveraging digital innovation.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-gray-500 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Steamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-gray-500 cursor-pointer">
          <b>Conveniation:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-gray-500 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommedation and reminders to help you stay on top of your
            health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
