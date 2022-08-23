import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
        text="10:00 AM to 8:00 PM"
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        bgClass="bg-neutral"
        img={marker}
        text="Mirpur 10, Dhaka 1216."
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
        text=" +8801888796740"
      ></InfoCard>
    </div>
  );
};

export default Info;
