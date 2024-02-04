import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" border border-gray-50 bg-white/30 backdrop-blur-md px-12 py-6 ">
      {/* Desktop Navigation */}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={"/realTaku.jpg"}
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <ul className="flex gap-8">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-lg font-semibold text-black hover:text-purple-700"
            >
              <Link href={`/${link.href}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
