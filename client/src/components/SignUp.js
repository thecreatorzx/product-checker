import React from "react";
import { Link, Outlet } from "react-router-dom";

const SignUp = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSignUp(e);
  };

  return (
    <div className="formSignWindow flex justify-center items-center w-full h-screen bg-gray-300">
      <div className="formSign w-96 h-auto bg-gray-50 rounded-xl overflow-hidden -translate-y-10">
        <h1 className="flex defaultStyle font-bold justify-center items-center h-20 uppercase text-4xl">
          Sign Up
        </h1>
        <div className="message text-center bg-red-300 w-full h-auto mb-1 pl-2 capitalize">
          hello here is an error
          <br /> here is another error
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-72 justify-evenly items-center mt-3"
        >
          <input
            autoFocus
            id="name"
            type="text"
            placeholder="Name"
            required
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          />
          <input
            id="username"
            type="text"
            placeholder="Create a Username"
            required
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
          />
          <input
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
            placeholder="Create a strong password"
            required
            maxLength={20}
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border-2 font-medium mt-1 p-2 px-8 rounded-full hover:bg-gray-200 hover:border-gray-300"
          >
            Sign Up
          </button>
        </form>
        <div className="loginLink text-center mb-5">
          Already have an account?
          <Link
            to="/login"
            className="underline defaultStyle font-bold text-blue-700 pl-2"
          >
            L O G I N
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SignUp;
