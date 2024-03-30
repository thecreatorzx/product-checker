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
      <div className="dropdown absolute origin-top -translate-x-36 translate-y-3 bg-white w-48 h-52 transition-all">
        <Link to="/profilePage" className="flex">
          <div className="profilePic w-10 h-10 rounded-full bg-gray-300">
            pic
          </div>
          <div className="user bg-gray-300 w-10 h-10">
            hello
            {name}
            {userName}
          </div>
        </Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Profile;
