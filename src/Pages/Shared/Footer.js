import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="p-10 mt-10"
    >
      <div className="footer">
        <div>
          <span className="footer-title text-2xl">Contact</span>
          <div className="text-xl">
            <p>Address:</p>
            <p>Mirpur 10, Dhaka 1216</p>
            <p>Email:</p>
            <p>ariful25-012@diu.edu.bd</p>
            <p>Phone:</p>
            <p>+8801888796740</p>
            <p>Opening Hours:</p>
            <p>10:00 AM to 08:00 PM</p>
          </div>
        </div>
        <div>
          <div className="text-xl list-none uppercase">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/doctor">Doctor</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </div>
        <div>
          <div className="text-xl list-none uppercase">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">sign up</Link>
            </li>
            <li>
              <Link to="/signup">registration</Link>
            </li>
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
