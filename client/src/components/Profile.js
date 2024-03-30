import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ name, userName }) => {
  const dropdown = () => {
    const box = document.querySelector(".dropdown");
    box.classList.toggle("show");
    box.classList.toggle("scale-y-0");
  };
  return (
    <div>
      <div
        className="profileBox bg-gray-300 w-10 h-10 rounded-full cursor-pointer"
        onClick={dropdown}
      >
        <div className="profilePic w-10 h-10 rounded-full">pic</div>
      </div>
      <div className="dropdown flex flex-col justify-evenly absolute origin-top -translate-x-36 translate-y-3 bg-white w-48 h-52 transition-all">
        <Link to="/profilePage" className="flex w-full h-1/5 py-1 border-2">
          <div className="profilePic w-10 h-10 rounded-full bg-gray-300">
            pic
          </div>
          <div className="user bg-gray-300 w-10 h-10 border-2">
            hello
            {name}
            {userName}
          </div>
        </Link>
        <Link to="/settings w-full h-1/5">Edit Profile</Link>
        <Link to="/settings w-full h-1/5">Settings</Link>
        Logout
      </div>
    </div>
  );
};

export default Profile;
