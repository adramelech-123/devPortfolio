"use client";
import ProjectCard from "@/components/projectCard";
import { pb } from "@/libs/pocketbase";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    pb.collection("projects")
      .getFullList()
      .then((res) => setProjects(res));
  }, []);

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purplePrimary">
        PROJECTS
      </h1>

      <div className="flex flex-wrap gap-5 justify-center">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              recordId={project.id}
              image={project.image}
              title={project.title}
              desc={project.description}
              repo={project.repo}
              livedemo={project.livedemo}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
