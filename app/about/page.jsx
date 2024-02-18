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
        <Image
          src={"/glow-robo-hands.gif"}
          alt="robohands"
          width={550}
          height={550}
        />

        {/* Profile Card Content */}
        <div
          className={`${styles.card} lg:min-w-[500px] h-[450px] md:h-[400px] bg-white/30 rounded-xl shadow-lg ring-3 ring-white/30`}
        >
          {/* Bio */}
          <div className={`${styles.front} max-w-[800px] min-h-[400px] p-6 flex flex-col justify-center`}>
            <p className="font-bold text-[20px] mb-3 text-purplePrimary">
              🚀 Self-Taught Fullstack Developer | Web3 Explorer
            </p>
            <p className="text-[15px] md:text-[16px] font-normal  text-purplePrimary">
              Greetings! I'm a self-taught fullstack web developer on a mission
              to explore the frontiers of technology. With a fervent passion for
              emerging trends like web3 and AI, I thrive in the dynamic world of
              coding. Beyond code, I bring a robust research background to the
              table, coupled with experience in steering teams towards success.
              I'm not just about writing lines of code; I'm about crafting
              solutions that make a difference. What sets me apart? It's not
              just the syntax – it's the synthesis of technology and art. My
              artistic flair converges seamlessly with my technical prowess,
              creating a unique blend that defines my approach to
              problem-solving. Join me on this journey where innovation meets
              creativity, and let's build the future together!
            </p>

            {/* <div className="hidden md:flex md:flex-row gap-3">
              <div className="flex gap-3 items-center mt-4">
                <FaPhone className=" bg-purpleTint p-1  w-[25px] h-[25px] text-purplePrimary rounded-full" />
                <span className="text-purplePrimary">+263771326080</span>
              </div>

              <div className="flex gap-3 items-center mt-4">
                <MdEmail className=" bg-purpleTint p-1  w-[25px] h-[25px] text-purplePrimary rounded-full" />
                <span className="text-purplePrimary">tmamvuto6@gmail.com</span>
              </div>
            </div> */}
          </div>

          {/* Skills */}
          <div
            className={`${styles.back} w-full flex flex-col items-center justify-center p-6 rounded-xl`}
          >
            <h2 className="text-[20px] font-bold text-purpleSecondary mb-10">
              My Skills
            </h2>

            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
