import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
        <h4 className="text-xl text-white">1. Go Appointment page. </h4>
        <h4 className="text-xl text-white ">
          2. Choose the subject you need to discuss and click Book Appointment.{" "}
        </h4>
        <h4 className="text-xl text-white ">
          3. Pick a time sloat from the options available.
        </h4>
        <h4 className="text-xl text-white ">4. Enter your phone number.</h4>
        <h4 className="text-xl text-white ">
          5. On the bottom of the screen click submit button.
        </h4>
        <h4 className="text-xl text-white  mb-5">
          6. You're Appointment Done!
        </h4>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
