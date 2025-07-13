import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../Components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const fetchDocInfo = () => {
      const doc = doctors.find((doc) => doc._id === docId);
      setDocInfo(doc);
    };
    fetchDocInfo();
  }, [doctors, docId]);

  const getAvailableSlots = async () => {
    let newSlots = [];
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let startTime = new Date(currentDate);
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        const now = new Date();
        if (now.getHours() >= 21) {
          startTime = new Date(endTime); // no slots
        } else {
          startTime.setHours(now.getHours());
          startTime.setMinutes(now.getMinutes() > 30 ? 0 : 30);
          if (startTime.getMinutes() === 0)
            startTime.setHours(startTime.getHours() + 1);
        }
      } else {
        startTime.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];
      let tempTime = new Date(startTime);

      while (tempTime < endTime) {
        let formattedTime = tempTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(tempTime),
          time: formattedTime,
        });

        tempTime.setMinutes(tempTime.getMinutes() + 30);
      }

      newSlots.push(timeSlots); // push even if empty
    }

    setDocSlots(newSlots);
  };

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  if (!docInfo) return <p>Loading doctor info...</p>;

  return (
    <div>
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-[var(--primary)] w-full sm:max-w-72 rounded-lg"
            src={docInfo.image || assets.default_doc_image}
            alt={docInfo.name || "Doctor"}
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About
              <img src={assets.info_icon} alt="Info" />
            </p>
            <p className="text-sm text-gray-500 mt-1">{docInfo.about}</p>
          </div>

          <p className="text-gray-500 font-medium mt-4">
            Appointment Fee{" "}
            <span className="text-gray-600">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* Booking Slot */}
      <div className="sm:ml-72 sm:pl-4 mt-6 font-medium text-gray-700">
        <p className="text-lg mb-2">Booking Slot</p>

        {/* Day Picker */}
        <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
          {docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSlotIndex(index);
                setSlotTime("");
              }}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer whitespace-nowrap ${
                slotIndex === index
                  ? "bg-[var(--primary)] text-white"
                  : "border border-gray-300 text-gray-800"
              }`}
            >
              <p>
                {item[0]
                  ? daysOfWeek[item[0].datetime.getDay()]
                  : daysOfWeek[(new Date().getDay() + index) % 7]}
              </p>
              <p>
                {item[0]
                  ? item[0].datetime.getDate()
                  : new Date(
                      new Date().setDate(new Date().getDate() + index)
                    ).getDate()}
              </p>
            </div>
          ))}
        </div>

        {/* Time Picker */}
        <div className="flex gap-3 w-full overflow-x-auto mt-4 pb-1">
          {docSlots[slotIndex]?.length > 0 ? (
            docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`text-sm px-4 py-2 rounded-full cursor-pointer border whitespace-nowrap ${
                  slotTime === item.time
                    ? "bg-[var(--primary)] text-white"
                    : "text-gray-800 border-gray-300"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))
          ) : (
            <p className="text-sm text-red-500 whitespace-nowrap">
              No slots available for this day
            </p>
          )}
        </div>

        {slotTime && (
          <p className="mt-4 text-green-600">
            Selected slot: <strong>{slotTime}</strong> on{" "}
            <strong>
              {daysOfWeek[docSlots[slotIndex][0].datetime.getDay()]},{" "}
              {docSlots[slotIndex][0].datetime.toDateString()}
            </strong>
          </p>
        )}

        <button className="bg-[var(--primary)] mt-6 text-white text-sm font-light px-14 py-3 rounded-full cursor-pointer">
          Book an Appointment
        </button>
      </div>
      {/*--------------------------- Listing Related Doctors --------------------*/}
      <RelatedDoctors
        docId={docId}
        speciality={docInfo.speciality}
      ></RelatedDoctors>
    </div>
  );
};

export default Appointment;
