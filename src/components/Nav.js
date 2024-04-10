import React, { useState } from "react";

const Nav = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <header className={`${scroll > 190 ? "nav-after" : "nav"} fixed w-full`}>
      <nav className="containers primary-color flex-pack px-4 h-14">
        <a
          href="#home"
          className="montserrat md:text-2xl text-xl font-semibold"
        >
          <span className="main-theme-text">U</span>
          jjwal
          <span className="main-theme-text"> B</span>
          asnet
        </a>
        <a href="./images/Ujjwal-Basnet-cv.pdf" download>
          <button className="section rounded-lg p-2 text-sm border-custom">
            Download Resume
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
