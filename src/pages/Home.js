import React, { useRef, useEffect } from "react";
import { Typed } from "react-typed";
const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <>
      <section
        id="home"
        className=" home"
      >
        <div className="overlay w-full h-screen ">
          <div className="containers flex items-center h-screen px-2">
            <div>
              <h3 className="text-[#c3c0c0] montserrat font-semibold text-2xl">
                Hey, My Name Is
              </h3>
              <h1 className="lg:text-6xl sm:text-5xl text-[45px] font-[800] text-white md:py-7 py-5">
                Ujjwal Basnet
              </h1>
              <h3 className="text-[#c3c0c0] montserrat font-semibold text-2xl pb-7">
                <span>I'm a Web </span>
                <span ref={typedRef}> </span>
              </h3>
              <a
                href="#contact"
                className="main-theme-bg rounded-3xl uppercase text-[12px] tracking-[1px] font-[600] text-white px-9 py-4 fill-up-button"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
        <a
          href="#home"
          className="main-theme-bg p-3 fixed bottom-4 right-4 rounded-full button animate-bounce button-hover"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </span>
        </a>
      </section>
    </>
  );
};

export default Home;
