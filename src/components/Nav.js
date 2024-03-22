import React, { useEffect, useState } from "react";
import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";

const Nav = () => {
  const [value, setValue] = useState();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <>
      <div className="nav">
        <div className="logo">Product Checker</div>
        <div className="navs"></div>
        <div className="log">
          {!value && (
            <button className="signup" onClick={handleClick}>
              Sign In
            </button>
          )}
          {!value && <button className="login">Login</button>}
        </div>
      </div>
    </>
  );
};

export default Nav;
