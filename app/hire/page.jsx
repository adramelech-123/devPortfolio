import Image from "next/image";

const Hire = () => {
  return (
    <section className="flex flex-col items-center  w-3/4 mx-auto">
      <h1 className="text-5xl font-extrabold py-2 text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-purplePrimary">
        CONTACT 
      </h1>

      <div
        className={
          "flex flex-col w-full md:flex-row items-center md:gap-[100px] mt-10"
        }
      >
        <div className={"flex-1 h-[400px] relative"}>
          <Image
            src="/email.gif"
            alt=""
            fill
            className={"hidden md:block object-contain"}
          />
        </div>
        <div className={"md:flex-1 w-full"}>
          <form action="" className={"flex flex-col gap-[20px]"}>
            <input
              className="bg-white/70 text-gray-700 rounded-lg p-5 ring-1 ring-gray-200"
              type="text"
              placeholder="Name & Surname"
            />
            <input
              className="bg-white/70 text-gray-700 rounded-lg p-5 ring-1 ring-gray-200"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="bg-white/70 text-gray-700 rounded-lg p-5 ring-1 ring-gray-200"
              type="tel"
              placeholder="Phone Number (Optional)"
            />
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              placeholder="Message"
              className="bg-white/70 text-gray-700 rounded-lg p-5 ring-1 ring-gray-200"
            ></textarea>
            <button className="bg-purplePrimary hover:bg-purpleSecondary text-white p-5 font-bold rounded-md">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Hire;
