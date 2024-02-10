import Image from "next/image"
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({image, recordId, title, desc}) => {
  return (
    <div className="mt-5 w-[300px] h-[400px] p-3 flex flex-col rounded-xl shadow-lg bg-white/30 backdrop-blur-md ring-1 ring-gray-100 space-y-3">
      
      <img src={`http://127.0.0.1:8090/api/files/sq6yqjvfdqm9l4n/${recordId}/${image}`} alt="projectimage" width={350} height={450} className="rounded-xl" />

      {/* Content */}
      <div className="space-y-2">
        <h1 className="font-bold text-purplePrimary text-xl">{title}</h1>
        <hr className="" />
        <p className="text-sm text-purpleSecondary">{desc}</p>
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