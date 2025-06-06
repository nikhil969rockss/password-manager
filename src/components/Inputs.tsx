import { MdOutlineKey } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import PasswordsList from "./PasswordsList";
import context, { type IContext } from "../context/store";

const Inputs = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { form, handleChange, handleAddPassword } = useContext(
    context
  ) as IContext;
  const icon = showPassword ? <FaEyeSlash /> : <FaEye />;

  return (
    <>
      <form onSubmit={handleAddPassword} className="lg:w-1/2 mx-auto px-3 flex flex-col  py-4 mt-8 items-center gap-4 ">
        <div className=" logo font-[900] tracking-tighter flex items-center">
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
        <p className="font-[600] tracking-tighter text-center ">
          <span className="text-green-600 ">Never forget a password.</span>Never
          compromise security.
        </p>
        <input
          className="px-3 py-2 focus-within:animate-pulse focus-within:border-black w-full rounded-md outline-none border border-green-300"
          type="text"
          name="site"
          value={form.site}
          onChange={handleChange}
          required
          placeholder="Enter website URL"
        />
        <div className="username-password flex w-full items-center gap-2 ">
          <input
            className="px-3 py-2 w-full focus-within:animate-pulse focus-within:border-black rounded-md outline-none border border-green-300"
            type="text"
            placeholder="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <div className="w-full pr-4  relative flex items-center focus-within:animate-pulse  border border-green-300 rounded-md focus-within:border-black">
            <input
              className="px-3 py-2  w-full   outline-none  "
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 cursor-pointer"
            >
              {icon}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="flex items-center cursor-pointer justify-between gap-1 capitalize font-[700] bg-green-400 px-2 py-1 rounded-full"
        >
          Save
          <span
            className="flex"
            dangerouslySetInnerHTML={{
              __html: `<lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover" style="width:25px;height:25px"></lord-icon>`,
            }}
          />
        </button>
      </form>
      <PasswordsList />
    </>
  );
};
export default Inputs;
