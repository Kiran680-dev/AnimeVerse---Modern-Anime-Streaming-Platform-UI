import React from "react";
import login from "../assets/loginImage.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-25 text-white ">
      <div className="flex rounded-3xl shadow-xl/30 overflow-hidden bg-gray-900 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]">
        <div className="">
          <img className="w-100 h-150 object-cover " src={login}></img>
        </div>

        <div className="px-14 py-15 ">
          <div>
            <h1 className="text-4xl font-bold text-center ">Welcome Back!</h1>
            <p className="font-sans pb-4 text-sm pt-1 text-center text-gray-300">
              Login to continue your journey
            </p>
          </div>

          <div className="">
            <div className="w-75">
              <p className="py-1 text-xl  text-white/85">Email</p>
              <input
                className="border border-gray-700 rounded px-3 py-1 w-full"
                type="email"
                placeholder="Enter a mail"
              ></input>
            </div>

            <div className="w-75 py-2">
              <p className="py-1 text-xl  text-white/85">Password</p>
              <input
                className="border border-gray-700 rounded px-3 py-1 w-full"
                type="password"
                placeholder="Enter a password"
              ></input>
            </div>

            <div className="flex justify-between py-2">
              <div className="flex gap-2">
                <input type="checkbox"></input> <p className="text-gray-300">Remember me</p>
              </div>
              <a className="text-yellow-500 hover:text-yellow-600" href="#">
                Forgot Password
              </a>
            </div>

            <button className="bg-purple-900 px-32 py-2  font-semibold text-white rounded-2xl mt-4 mb-4 hover:scale-95 shadow-lg shadow-purple-500/50 transition-transform duration-200 ease-out">
              Submit
            </button>

            <p className="text-center text-gray-300">or continue with</p>

            <button className="w-full py-2 rounded-2xl mt-4 mb-4 border border-gray-700 hover:scale-95 transition-transform duration-200 ease-out flex items-center justify-center gap-3">
              <FcGoogle size={24} />
              <span>Google</span>
            </button>

            <p className="text-center text-gray-300">
              Do not have account ?
              <a className="text-purple-400 px-1" href="#">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
