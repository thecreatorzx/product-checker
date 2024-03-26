import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (lat) => {
    const prev = scrollY.getPrevious();
    if (lat > prev && lat > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: "0" },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="navbar defaultStyle sticky top-0 flex flex-row items-center h-16 w-full shadow-xl bg-white duration-500 z-10"
      >
        <h1 className="logo workbench text-3xl w-1/2 pl-5">
          <Link to="/">Product Checker</Link>
        </h1>
        <div className="navs text-xl flex justify-evenly items-center w-2/5 font-medium">
          <Link to="/">Home</Link>
          <Link to="/">Scan</Link>
          <Link to="/">Docs</Link>
          <Link to="/">How</Link>
        </div>
        <button className="font-bold text-xl p-2 border-2 rounded-full hover:bg-gray-100">
          <Link to="/Login">Login</Link>
        </button>
      </motion.nav>
      <Outlet />
    </>
  );
};

export default Nav;
