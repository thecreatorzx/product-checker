import React from "react";
import GLogin from "./GLogin";
import { Link, Outlet } from "react-router-dom";
// add reflection animation to login button
const Login = (props) => {
  return (
    <div className="formLoginWindow flex justify-center items-center w-full h-screen bg-gray-200">
      <div className="formLogin w-96 h-auto bg-gray-50 rounded-xl overflow-hidden -translate-y-10">
        <h1 className="flex defaultStyle font-bold justify-center items-center h-20 uppercase text-4xl">
          Login
        </h1>
        <div className="message text-center bg-red-300 w-full h-auto mb-1 pl-2 capitalize">
          {/* {errorMessage()}
          {successMessage()} */}
          hello here is an error
          <br /> here is another error
        </div>
        <form
          onSubmit={props.handleSubmit}
          className="flex flex-col w-full h-60 justify-evenly items-center mt-3"
        >
          <input
            autoFocus
            id="email"
            type="text"
            placeholder="Email"
            required
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
            maxLength={20}
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <button
            type="submit"
            className=" border-2 font-medium p-2 px-8 rounded-full hover:bg-slate-200 hover:border-gray-300"
          >
            Login
          </button>
          <div className="flex justify-center w-2/4 pt-2 border-t-2 border-dashed border-gray-300">
            <GLogin />
          </div>
        </form>
        <div className="loginLink text-center mb-5 ">
          Don't have an account?
          <Link
            to="/signup"
            className="underline defaultStyle font-semibold text-blue-700 pl-2"
          >
            S i g n U p
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
