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
        {/* Profile Image */}
        <Image
          src={"/glow-robo-hands.gif"}
          width={550}
          height={550}
        />

        <div>
          {/* Bio */}
          <div className="max-w-[800px] p-6  rounded-lg bg-purpleSecondary shadow-md">
            <p className="text-[20px]  text-white">
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
              <span className="text-white">+263771326080</span>
            </div>

            <div className="flex gap-3 items-center mt-4">
              <MdEmail className=" bg-purpleTint p-1  w-[25px] h-[25px] text-purplePrimary rounded-full" />
              <span className="text-white">tmamvuto6@gmail.com</span>
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
