import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ name, userName, setLogged }) => {
  const dropdown = () => {
    const box = document.querySelector(".dropdown");
    box.classList.toggle("show");
    box.classList.toggle("scale-y-0");
  };
  const logout = () => {
    setLogged(false);
  };
  return (
    <div>
      <div
        className="profileBox bg-gray-300 w-10 h-10 rounded-full cursor-pointer"
        onClick={dropdown}
      >
        <div className="profilePic w-10 h-10 rounded-full">pic</div>
      </div>
      <div className="dropdown madimi flex flex-col justify-evenly items-center absolute origin-top scale-y-0 -translate-x-36 translate-y-3 bg-white w-48 h-52 transition-all">
        <Link
          to="/profilePage"
          className="flex justify-center items-center w-full h-14 py-1"
        >
          <div className="profilePic w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="user w-36 h-10">
            hello
            {name}
            {userName}
          </div>
        </Link>
        <Link
          to="/settings"
          className="flex justify-center items-center w-full h-10 hover:bg-gray-300"
        >
          Edit Profile
        </Link>
        <Link
          to="/settings"
          className="flex justify-center items-center w-full h-10 hover:bg-gray-300"
        >
          Settings
        </Link>
        <button
          className="logout w-32 h-10 flex justify-center items-center border-2 border-gray-400 rounded-full hover:bg-gray-300 hover:border-gray-500"
          onclick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
