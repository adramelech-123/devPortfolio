import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full flex-row justify-between items-center p-6 bg-purplePrimary">
      <div className="">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}, Built By TheRealTaku
        </p>
      </div>

      <div className="flex gap-3">
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
