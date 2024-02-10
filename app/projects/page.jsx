import ProjectCard from "@/components/projectCard";

const Projects = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purplePrimary">
        PROJECTS
      </h1>

      <div className="flex flex-wrap gap-5 justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
export default Projects