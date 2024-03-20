import React from "react";
import { projects } from "../components/ProjectsArray";
const Projects = () => {
  return (
    <section id="skills" className="section-one">
      <div className="containers px-2 py-16">
        <h2 className="main-title md:text-start text-center uppercase">
          Projects
        </h2>
        <div className="grid lg:grid-cols-3 xs:grid-cols-2 md:gap-5 gap-y-10 place-items-center mt-7">
          {projects.map((project) => (
            <div className="hover-card custom-shadow lg:w-[90%] w-[87%] rounded-lg">
              <div className="w-full lg:aspect-[4/3] aspect-[4/2.5] relative">
                <div className="overlay-project overflow-hidden top-0 left-0 absolute w-full h-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <a
                    className="bg-white/90 px-5 py-2 rounded-2xl hover:rounded-3xl transition-all montserrat"
                    href={project.link}
                    target="_blank"
                  >
                    Visit Site
                  </a>
                </div>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={project.image}
                  alt="projects"
                />
              </div>
              <div className="px-2 py-5">
                <h1 className="font-[600] text-white mb-3">{project.name}</h1>
                <p className="third-color">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore tempore obcaecati temporibus non quisquam ad fuga
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
