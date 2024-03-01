import React, { useRef, useEffect } from "react";
import { Typed } from "react-typed";
const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["I'm a Web Developer", "I Love Software Development"],
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
      <section className="home">
        <div className="overlay w-full h-screen flex items-center">
          <div className="container px-2">
            <h3 className="text-[#c3c0c0] montserrat font-semibold text-2xl">
              Hey, My Name Is
            </h3>
            <h1 className="lg:text-6xl sm:text-5xl text-[45px] font-[800] text-white md:py-7 py-5">
              Ujjwal Basnet
            </h1>
            <h3 className="text-[#c3c0c0] montserrat font-semibold text-2xl md:pb-7 pb-5">
              <span ref={typedRef}></span>
            </h3>
            <button className="main-theme-bg rounded-3xl uppercase text-[12px] tracking-[1px] font-[600] text-white px-9 py-3 fill-up-button">
              Hire Me
            </button>
          </div>
        </div>
      </section>
      <div className="section-two h-screen"></div>
    </>
  );
};

export default Home;
