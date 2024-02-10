import Image from "next/image"
import { FaGithub } from "react-icons/fa6";

const ProjectCard = () => {
  return (
    <div className="mt-5 w-[300px] h-[400px] p-3 flex flex-col rounded-xl shadow-lg bg-white backdrop-blur-md ring-2 ring-white space-y-3">
      <Image
        src={"/jsBG.jpg"}
        width={350}
        height={350}
        className="rounded-xl"
      />
      {/* Content */}
      <div className="space-y-2">
        <h1 className="font-bold text-purplePrimary text-xl">Project Title</h1>
        <hr className="" />
        <p className="text-sm text-purpleSecondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          quidem atque fugiat culpa laudantium doloremque sint? Voluptatum
          inventore velit sed qui libero nesciunt hic quod.
        </p>
        <div className="flex gap-3 items-center pt-2">
          <button className="py-2 px-3 bg-black hover:bg-purplePrimary text-white text-sm rounded-md flex items-center gap-2">
            <span>
              <FaGithub className="text-[20px]" />
            </span>
            Github
          </button>
          <button className="py-2 px-3 bg-purpleSecondary hover:bg-purple-900 text-white text-sm rounded-md">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard