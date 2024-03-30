import React from "react";
import { Link, Outlet } from "react-router-dom";

const Scanner = ({ logged }) => {
  return (
    <div>
      <div className="scanner w-full h-96 text-center mb-36">
        <h1 className="pb-16 madimi text-6xl">Scanner</h1>
        <div className="flex justify-evenly items-center">
          <div className="scanpic"></div>
          <div className="defaultStyle text-2xl font-bold">
            {logged ? (
              <Link
                to="/scanPage"
                className="text-white p-5 py-2 bg-pink-600 rounded-lg border-2 border-dotted hover:bg-pink-700"
              >
                Scan Now
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-white p-5 py-2 bg-pink-600 rounded-lg border-2 border-dotted hover:bg-pink-700"
              >
                Scan Now
              </Link>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Scanner;
