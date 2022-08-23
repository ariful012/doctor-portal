import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Contact = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z31ujqj",
        "template_zbiqelp",
        form.current,
        "w15iQbZy-fBTknB8a"
      )
      .then(
        (result) => {
          toast.success(
            "Thanks for your report we will reply it in very soon..."
          );
          console.log(form);
        },
        (error) => {
          toast.error("Message Not Send...");
        }
      );
  };

  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="bg-primary px-10 py-4 "
    >
      <div className="text-center pb-5 text-white">
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <form
        style={{
          width: "400px",
          margin: "auto",
          padding: "20px 10px",
        }}
        ref={form}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Write your Name ..."
          required
          className="p-2"
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            borderBottom: "1px solid #3BB77E",
            margin: "10px 0",
            fontSize: "1.2vmax",
            height: "40px",
          }}
          name="name"
        />
        <input
          className="p-2"
          type="text"
          placeholder="Write a Subject ..."
          required
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            borderBottom: "1px solid #3BB77E",
            margin: "10px 0",
            fontSize: "1.2vmax",
            height: "40px",
          }}
          name="subject"
        />
        <input
          type="email"
          className="p-2"
          placeholder="write your Email ..."
          required
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            borderBottom: "1px solid #3BB77E",
            margin: "10px 0",
            fontSize: "1.2vmax",
            height: "40px",
          }}
          name="email"
        />
        <textarea
          cols="30"
          rows="5"
          required
          className="p-2"
          placeholder="write your message ..."
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            borderBottom: "1px solid #3BB77E",
            margin: "10px 0",
            fontSize: "1.2vmax",
          }}
          name="message"
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default Contact;
