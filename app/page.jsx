"use client"
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-between gap-3 pb-7">
      {/* Intro Card */}
      <div className="flex flex-col max-w-[950px] p-6 ring-1 ring-gray-100 rounded-lg bg-white/30 drop-shadow-lg backdrop-blur-md">
        <p className="text-[20px] font-semibold">👋Hi there,</p>
        <p className="text-[30px] md:text-[40px] w-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-purplePrimary">
          I'm Taku
        </p>
        <h1 className="text-3xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-700 to-purplePrimary">
          Fullstack Developer & Blockchain Enthusiast
        </h1>
        <p className="pt-4 md:text-[20px] font-normal text-purpleSecondary">
          From Fullstack Alchemist to Web3 Maestro, I'm building the tools to
          empower individuals and reshape the digital landscape. Fueled by a
          vision of a decentralized future, I'm also delving into the frontiers
          of blockchain, one line of code at a time.
        </p>

        <div className="pt-4 flex">
          <button className="bg-purplePrimary text-white font-semibold py-4 px-6 rounded-lg flex gap-2 items-center hover:bg-white hover:text-purplePrimary">
            <span>
              <FaDownload />
            </span>
            <span>Resume</span>
          </button>

          <Link
            href={"https://github.com/adramelech-123"}
            target="_blank"
            className="bg-transparent font-semibold text-purplePrimary py-4 px-6 hover:underline "
          >
            Visit my Github Profile
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex flex-1 justify-end">
        <Image
          src={"/programmer.gif"}
          width={500}
          height={500}
          className="rounded-full"
        />
      </div>
    </section>
  );
};
export default Home;
