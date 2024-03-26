import React, { useEffect, useState } from "react";

const Logout = ({ value, setValue }) => {
  const logout = () => {
    localStorage.clear();
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
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
