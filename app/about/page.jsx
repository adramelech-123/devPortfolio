"use client";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from './flipcard.module.css'

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


const About = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold py-3 text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purplePrimary">
        ABOUT
      </h1>

      {/* Profile*/}
      <div className="flex flex-col h-[1000px] lg:h-auto lg:flex-row lg:space-between lg:w-3/4 lg:gap-5 lg:items-center">
        {/* Profile Image */}
        <Image src={"/glow-robo-hands.gif"} width={550} height={550} />

        {/* Profile Card Content */}
        <div
          className={`${styles.card} lg:min-w-[500px] h-[450px] md:h-[400px] bg-white/30 rounded-xl shadow-lg ring-3 ring-white/30`}
        >
          {/* Bio */}
          <div className={` ${styles.front} max-w-[800px] min-h-[365px] p-6`}>
            <p className="text-[18px] font-normal  text-purplePrimary">
              A personal bio is essentially your introduction to the world,
              serving as a snapshot of who you are and what you do. It’s an
              opportunity to showcase your unique skills, interests, and
              experiences, making a lasting impression on those who come across
              them. Think about all of the places where your bio might appear;
              on your professional website, social media profiles, at networking
              events, and even on job applications. With so many eyes on your
              bio, it’s crucial that it represents you accurately and makes the
              right impact.
            </p>

            <div className="flex gap-3 items-center mt-4">
              <FaPhone className=" bg-purpleTint p-1  w-[25px] h-[25px] text-purplePrimary rounded-full" />
              <span className="text-purplePrimary">+263771326080</span>
            </div>

            <div className="flex gap-3 items-center mt-4">
              <MdEmail className=" bg-purpleTint p-1  w-[25px] h-[25px] text-purplePrimary rounded-full" />
              <span className="text-purplePrimary">tmamvuto6@gmail.com</span>
            </div>
          </div>

          {/* Skills */}
          <div
            className={`${styles.back} w-full flex flex-col items-center  p-6 rounded-xl`}
          >
            <h2 className="text-[20px] font-bold text-purpleSecondary mb-10">
              My Skills
            </h2>

            <div className="flex flex-col space-y-5">
              <div className="grid grid-cols-6 items-center gap-6">
                <FaHtml5 className="text-[60px] text-purplePrimary" />
                <IoLogoCss3 className="text-[60px] text-purplePrimary" />
                <SiTailwindcss className="text-[60px] text-purplePrimary" />
                <IoLogoJavascript className="text-[60px] text-purplePrimary" />
                <SiTypescript className="text-[53px] text-purplePrimary" />
                <RiReactjsFill className="text-[60px] text-purplePrimary" />
              </div>

              <div className="grid grid-cols-6 items-center gap-6">
                <TbBrandNextjs className="text-[60px] text-purplePrimary" />
                <FaNodeJs className="text-[60px] text-purplePrimary" />
                <SiExpress className="text-[60px] text-purplePrimary" />
                <SiMongodb className="text-[60px] text-purplePrimary" />
                <SiMongoose className="text-[53px] text-purplePrimary" />
                <BiLogoPostgresql className="text-[60px] text-purplePrimary" />
              </div>

              <div className="grid grid-cols-6 items-center gap-6">
                <IoLogoFirebase className="text-[60px] text-purplePrimary" />
                <SiPrisma className="text-[60px] text-purplePrimary" />
                <SiInsomnia className="text-[60px] text-purplePrimary" />
                <GrGraphQl className="text-[60px] text-purplePrimary" />
                <SiPhp className="text-[53px] text-purplePrimary" />
                <SiPython className="text-[53px] text-purplePrimary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
