import React, { useEffect, useState } from "react";

const Logout = ({ value, setValue }) => {
  const logout = async (e) => {
    e.preventDefault();
    // const response = axios.get("/logout", {});
    // if (response) {
    //   console.log(response);
    // }
  };
  // useEffect(() => {});
  return (
    <div>
      {value && (
        <button className="logOut" onClick={logout}>
          LogOut
        </button>
      )}
    </div>
  );
};

export default Logout;
