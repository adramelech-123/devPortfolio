"use client";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from './flipcard.module.css'
import Skills from "@/components/Skills";


const About = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold py-2 text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purplePrimary">
        ABOUT
      </h1>

      {/* Profile*/}
      <div className="flex flex-col h-[1000px] lg:h-[450px] lg:flex-row lg:space-between lg:w-3/4 lg:gap-5 lg:items-center">
        
        {/* Profile Image */}
        <Image src={"/glow-robo-hands.gif"} alt="robohands" width={550} height={550} />

        {/* Profile Card Content */}
        <div
          className={`${styles.card} lg:min-w-[500px] h-[450px] md:h-[400px] bg-white/30 rounded-xl shadow-lg ring-3 ring-white/30`}
        >
          {/* Bio */}
          <div className={`${styles.front} max-w-[800px] min-h-[365px] p-6`}>
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

            <Skills/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
