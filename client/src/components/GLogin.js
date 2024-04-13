import React, { useEffect, useState } from "react";
import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GLogin = ({ handleGLogin }) => {
  const [value, setValue] = useState();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      handleGLogin(data);
      console.log(data);
    });
  };
  return (
    <div className="log flex flex-row">
      {!value && (
        <button
          className="signup p-2 rounded-full border-2 text-xl hover:border-gray-400"
          onClick={handleClick}
        >
          <FcGoogle />
        </button>
      )}
    </div>
  );
};

export default GLogin;
