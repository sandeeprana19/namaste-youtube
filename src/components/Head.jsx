import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://e7.pngegg.com/pngimages/637/620/png-clipart-hamburger-button-computer-icons-menu-whitee-text-rectangle.png"
          alt="hamburger-icon"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://www.pngkey.com/png/full/505-5052878_youtube-chanel-youtube-logo-jpg.png"
            alt="YouTube Logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User icon"
        />
      </div>
    </div>
  );
};

export default Head;
