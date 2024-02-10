import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiInsomnia } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiPhp } from "react-icons/si";
import { SiPython } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="grid grid-cols-6 items-center gap-6">
        <FaHtml5 className="text-[60px] text-purplePrimary" />
        <IoLogoCss3 className="text-[60px] text-purplePrimary" />
        <SiTailwindcss className="text-[60px] text-purplePrimary" />
        <IoLogoJavascript className="text-[60px] text-purplePrimary" />
        <SiTypescript className="text-[52px] text-purplePrimary" />
        <RiReactjsFill className="text-[60px] text-purplePrimary" />
      </div>

      <div className="grid grid-cols-6 items-center gap-6">
        <TbBrandNextjs className="text-[60px] text-purplePrimary" />
        <FaNodeJs className="text-[60px] text-purplePrimary" />
        <SiExpress className="text-[60px] text-purplePrimary" />
        <SiMongodb className="text-[60px] text-purplePrimary" />
        <SiMongoose className="text-[60px] text-purplePrimary" />
        <BiLogoPostgresql className="text-[60px] text-purplePrimary" />
      </div>

      <div className="grid grid-cols-6 items-center gap-6">
        <IoLogoFirebase className="text-[60px] text-purplePrimary" />
        <SiPrisma className="text-[60px] text-purplePrimary" />
        <SiInsomnia className="text-[60px] text-purplePrimary" />
        <GrGraphQl className="text-[60px] text-purplePrimary" />
        <SiPhp className="text-[60px] text-purplePrimary" />
        <SiPython className="text-[52px] text-purplePrimary" />
      </div>
    </div>
  );
};

export default Skills;
