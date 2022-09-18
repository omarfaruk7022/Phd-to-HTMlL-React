import "./App.css";
import { AiFillFacebook } from "react-icons/ai";
import insta from "../src/images/7a252de00b20.png";
import play from "../src/images/get app play.png";
import apple from "../src/images/get app.png";
import loginPic from "../src/images/login pic.png";

function App() {
  return (
    <div className="flex justify-center my-32">
      <div>
        <img src={loginPic} alt="" />
      </div>
      <div>
        <div className="w-[350px] h-96  border mx-10 bg-white">
          <img className="m-auto my-10" src={insta} alt="" />
          <input
            className="w-[267px] border h-[36px] mb-2 m-auto px-2  rounded bg-accent mt-[1px] placeholder:text-slate-400 placeholder:font-normal block shadow-sm focus:outline-none focus:border-gray-400 border-gray-300 focus:ring-gray-200 focus:ring-0 sm:text-sm"
            placeholder="Phone number, username, or email "
            type="text"
          />
          <input
            className="w-[267px] border rounded h-[36px] bg-accent  m-auto  placeholder:text-slate-400  placeholder:font-normal  block shadow-sm focus:outline-none focus:border-gray-400 focus:ring-gray-200 focus:ring-0 sm:text-sm px-2  border-gray-300"
            placeholder="Password"
            type="text"
          />

          <div>
            <button className="btn-xs ml-10 h-[30px] text-[14px] font-bold text-white bg-secondary rounded mt-[14px] w-[267px] btn-disabled opacity-30 ">
              Log in
            </button>
          </div>

          <div className="flex items-center w-full  px-10 mt-[18px]">
            <hr className="w-full dark:text-gray-400 " />
            <p className="px-3 dark:text-gray-400 text-[#8E8E8E] text-[13px]">
              OR
            </p>
            <hr className="w-full dark:text-gray-400" />
          </div>
          {/* <span className="text-[#385185] text-[14px] mt-[20px] mb-[16px] cursor-pointer"><AiFillFacebook/></span> */}
          <h1 className="text-[#385185] text-[14px] mt-[20px] mb-[16px] cursor-pointer  font-normal text-center">
            Log in with Facebook
          </h1>
          <h2 className="text-[#385185] text-[12px] cursor-pointer  font-normal text-center ">
            Forgot password{" "}
          </h2>
        </div>
        <div className="w-[350px] h-[63px]  border m-auto my-[10px] bg-white">
          <div className="my-4 text-[14px]   text-center">
            <span>Don't have an account?</span>
            <span className="text-secondary ml-2 cursor-pointer">Sign up</span>
          </div>
        </div>
        <div>
          <div className="text-[14px] my-[20px] text-center">
            <h1>Get the app.</h1>
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0  space-y-4 sm:flex-row sm:space-y-0 ">
            <button className="inline-flex items-center px-2  rounded-lg  ">
              <img className="w-[140px] h-[42px]" src={apple} alt="" />
            </button>
            <button className=" inline-flex items-center  rounded-lg ">
              <img className="w-[140px] h-[42px]" src={play} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
