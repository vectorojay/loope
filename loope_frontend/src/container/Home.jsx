import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Sidebar, UserProfile } from "../components";
import { client } from "../client";
import Pins from "./Pins";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  useEffect(() => {}, []);
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu
          fontSize={40}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(false)}
        />
        <Link to="/">
          <span className="text-3xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block px-2">
            <span className="relative text-white">o</span>
          </span>
        </Link>
        <Link to={`user-profile/${user?._id}`}></Link>
      </div>
    </div>
  );
};

export default Home;
