import React from "react";
import cv from "../assets/cv.jpg";
import html2pdf from "html2pdf.js";

const Nav = () => {
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
    <header className="nav">
      <nav className="container primary-color flex-pack px-2 h-16">
        <h1 className=" text-2xl font-semibold">Ujjwal Basnet</h1>
        <button
          className="section rounded-lg p-2 border-custom"
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
