import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showError, setShowError] = useState(false);
  const form = useRef();
  const resetForm = () => {
    form.current.reset();
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_j03wbml", "template_53al1fw", form.current, {
        publicKey: "4wINF4ZUnDak_wjJT",
      })
      .then(
        () => {
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
            resetForm();
          }, 2000);
        },
        (error) => {
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 2000);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="section-one h-screen">
      <div className="containers px-2 py-10">
        <h2 className="main-title">CONTACT ME</h2>
        <div className="flex gap-5">
          <div className="border-second w-[30%] p-4">
            <div className="mb-7">
              <div className="contact-details elements-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                <h4 className="montserrat">Location</h4>
                <div className="triangle-down"></div>
              </div>
              <div className="contact-text">
                <p>Kalopul, Kathmandu</p>
                <p>Nepal</p>
              </div>
            </div>
            <div className="mb-7">
              <div className="contact-details elements-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <h4 className="montserrat">Email</h4>
                <div className="triangle-down"></div>
              </div>
              <div className="contact-text">
                <p>basnetujjwal98@gmail.com</p>
              </div>
            </div>
            <div>
              <div className="contact-details elements-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <h4 className="montserrat">Phone</h4>
                <div className="triangle-down"></div>
              </div>
              <div className="contact-text">
                <p>
                  +977 - 9814313435 <br /> +977 - 9844451004
                </p>
              </div>
            </div>
          </div>
          <div className="border-second w-[50%]">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label
                  htmlFor="user_name"
                  className="block mb-2 font-medium text-gray-300"
                >
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="user_name"
                  className="block w-80 lg:w-96 p-2.5 text-gray-300 bg-transparent border border-white/30 hover:border-white/60 focus:outline-none focus:border-white/60 rounded-lg placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="user_email"
                  className="block mb-2 font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="block w-80 lg:w-96 p-2.5 text-gray-300 bg-transparent border border-white/30 hover:border-white/60 focus:outline-none focus:border-white/60 rounded-lg placeholder-gray-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="user_number"
                  className="block mb-2 font-medium text-gray-300"
                >
                  Contact Number
                </label>
                <input
                  required
                  type="text"
                  name="user_number"
                  className="block w-80 lg:w-96 p-2.5 text-gray-300 bg-transparent border border-white/30 hover:border-white/60 focus:outline-none focus:border-white/60 rounded-lg placeholder-gray-500"
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  className="block w-80 lg:w-96 p-2.5 text-gray-300 bg-transparent border border-white/30 hover:border-white/60 focus:outline-none focus:border-white/60 rounded-lg placeholder-gray-500"
                  placeholder="Enter your message"
                />
              </div>
              {loading ? (
                <div className="button w-80 lg:w-96 text-center">
                  Sending...
                </div>
              ) : (
                <input
                  type="submit"
                  className="button w-80 lg:w-96 cursor-pointer"
                  value="Send"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
