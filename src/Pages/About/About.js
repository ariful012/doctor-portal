import React from "react";
import appointment from "../../assets/images/appointment.png";

const About = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="bg-primary px-10 py-14 mt-4 "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">
          ABOUT
        </p>
        <p className="text-justify text-2xl p-5 mt-5">
          The Doctors Portal provides health organizations that strive for
          excellence and quality care, with a tool that allows physicians to
          measure themselves against key performance indicators set by the
          organization. This tool helps optimize physician practices in
          compliance with the organizations guidelines, offering valuable
          statistics. Health organizations can easily get creative with this
          tool by setting targets for practices, and even promoting healthy
          competition between physicians to increase engagement in providing
          useful metrics, and overall better quality of service.
        </p>
      </div>
    </div>
  );
};

export default About;
