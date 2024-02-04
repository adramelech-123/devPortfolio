import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section className="flex justify-between gap-3 pb-7">
      <div className="flex flex-col max-w-[950px] pt-6 pl-6">
        <p className="text-[30px] font-semibold">Hi there,</p>
        <p className="text-[30px] font-semibold">I'm Taku</p>
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purplePrimary">
          Fullstack Developer & Blockchain Enthusiast
        </h1>
        <p className="pt-4 text-[20px] font-normal text-purpleSecondary">
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

          <button className="bg-transparent font-semibold text-purplePrimary py-4 px-6 ">
            View my Github Profile
          </button>
        </div>
      </div>

      <div className="w-[600px] flex flex-1 justify-end">
        <Image
          src={"/hero-illustration.png"}
          width={500}
          height={500}
          className="rounded-full"
        />
      </div>
    </section>
  );
};
export default Home;
