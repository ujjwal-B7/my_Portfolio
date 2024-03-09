import React from "react";
import { projects } from "../components/ProjectsArray";
const Projects = () => {
  return (
    <section id="skills" className="section-one">
      <div className="containers px-2 h-screen py-16">
        <h2 className="main-title md:text-start text-center uppercase">
          Projects
        </h2>
        <div>
            {projects.map((project)=>(

            <div>

            </div>
                ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
