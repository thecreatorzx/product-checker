import React, { useState } from "react";
import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GLogin = () => {
  const [value, setValue] = useState();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      window.location.reload();
    });
  };
  return (
    <div className="log flex flex-row">
      {!value && (
        <button
          className="signup p-2 rounded-full border-2 text-xl"
          onClick={handleClick}
        >
          <FcGoogle />
        </button>
      )}
    </div>
  );
};

export default GLogin;
