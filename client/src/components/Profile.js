import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const dropdown = () => {
    const box = document.querySelector(".dropdown");
    box.classList.toggle("show");
    box.classList.toggle("scale-y-0");
  };

  const logout = async (e) => {
    e.preventDefault();
    const response = axios.post("/logout", {}).then(({ data }) => {
      console.log(data.msg);
      if (data.success) {
        window.location.reload();
        navigate("/login");
      } else {
        console.log("error");
      }
    });
  };
  return (
    <div>
      <div
        className="profileBox bg-gray-300 w-10 h-10 rounded-full cursor-pointer"
        onClick={dropdown}
      >
        <div className="profilePic w-10 h-10 rounded-full"></div>
      </div>
      <div className="dropdown madimi flex flex-col justify-evenly items-center absolute origin-top scale-y-0 -translate-x-36 translate-y-3 bg-white w-48 h-52 transition-all">
        <Link
          to="/profilePage"
          className="flex justify-center items-center w-full h-14 py-1"
        >
          <div className="profilePic w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="user w-36 h-10 pl-2">
            <div className="name text-lg mt-0 uppercase leading-6">
              {user && user.username}
            </div>
            <div className="username text-sm capitalize leading-3">
              {user && user.name}
            </div>
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
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
