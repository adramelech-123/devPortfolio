"use client";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-[30px] font-bold py-3 text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-purplePrimary">
        About
      </h1>
      <div className=" w-3/4 flex flex-col md:flex-row md:space-between gap-5 items-center ">
        <div className="">
          <Image
            src={"/glow-robo-hands.gif"}
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>

        <div>
          {/* Bio */}
          <div className="max-w-[650px] p-6 ring-1 ring-gray-100 rounded-lg bg-white/40 drop-shadow-lg backdrop-blur-md">
            <p className="text-[20px]  text-purplePrimary">
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
              <FaPhone className=" bg-purplePrimary p-1  w-[25px] h-[25px] text-white rounded-full" />
              <span>+263771326080</span>
            </div>

            <div className="flex gap-3 items-center mt-4">
              <MdEmail className=" bg-purplePrimary p-1  w-[25px] h-[25px] text-white rounded-full" />
              <span>tmamvuto6@gmail.com</span>
            </div>
          </div>

          {/* Contact Details */}
          <div></div>
        </div>
      </div>
    </section>
  );
};
export default About;
