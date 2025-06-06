import { IoLogoGithub } from "react-icons/io";
import { MdOutlineKey } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="px-6 py-3 flex justify-around items-center text-2xl cursor-pointer">
      <div className="font-[900] tracking-tighter flex items-center">
        <span className="bg-green-400 px-2 py-1 rounded-tl-md rounded-bl-md ">
          Pass
        </span>{" "}
        <span>
          <MdOutlineKey />
        </span>
        <span className="bg-black text-white py-1  rounded-tr-md rounded-br-md px-2">
          Key
        </span>
      </div>
      <a
        href="https://github.com/nikhil969rockss/password-manager"
        target="_blank"
        title="contribute to github"
        className="cursor-pointer text-3xl"
      >
        <IoLogoGithub />
      </a>
    </nav>
  );
};
export default Navbar;
