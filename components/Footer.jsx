import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-6 w-full md:flex-row md:justify-between items-center p-3 bg-purplePrimary">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()}, Built By TheFull$tackAlchemist
      </p>
      

      <div className="flex gap-3 p-2">
        <Link href={"#"}>
          <FaFacebook className="text-purpleTint w-[30px] h-[30px] hover:text-white" />
        </Link>
        <Link href={"#"}>
          <FaSquareXTwitter className="text-purpleTint w-[30px] h-[30px] hover:text-white" />
        </Link>
        <Link href={"#"}>
          <FaLinkedin className="text-purpleTint w-[30px] h-[30px] hover:text-white" />
        </Link>
      </div>

    </div>
  );
};
export default Footer;
