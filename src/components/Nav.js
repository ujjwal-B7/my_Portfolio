import React, { useState } from "react";
import cv from "../assets/cv.jpg";
import html2pdf from "html2pdf.js";

const Nav = () => {
  const [scroll, setScroll] = useState(0);
  const [color, setColor] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  // download pdf
  const pdfDownload = () => {
    const itemsPdf = document.getElementById("cv");
    const pdfOptions = {
      margin: 10,
      filename: "cv.pdf",
      image: {
        type: "jpeg",
        quality: 1.0,
      },
      html2canvas: {
        scale: 2,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };
    html2pdf().from(itemsPdf).set(pdfOptions).save();
  };
  return (
    <header className={`${scroll > 190 ? "nav-after" : "nav"} fixed w-full`}>
      <nav className="container primary-color flex-pack px-2 h-14">
        <h1 className="montserrat md:text-2xl text-xl font-semibold">
          <span className="main-theme-text">U</span>
          jjwal Basnet
        </h1>
        <button
          className="section rounded-lg p-2 text-sm border-custom"
          onClick={pdfDownload}
        >
          Download Resume
        </button>
        <div className="hidden h-screen w-[50%] absolute top-5">
          <img id="cv" src={cv} alt="my cv" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
