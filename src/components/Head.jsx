import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    /**
     *
     * Dry run meaning How the debouncing flow run behind the scene:
     *
     * Press key - i
     * - render the component
     * - useEffect callback() is called
     * - start timer => API call after 200ms
     *
     * Press key - ip [before 200ms]
     * - destroy or unmount the component(useEffect return method is called to clearTimer)
     * - render the component
     * - useEffect callback() is called
     * - start new timer => API call after 200ms
     *
     * setTimeout(200) is passed => make an API call
     *
     */

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

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
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowSuggestions(false);
              }, 200)
            }
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed z-50 p-2 shadow-lg border border-gray-100 w-[46rem] bg-white rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="shadow-sm hover:bg-gray-100">
                  <a
                    href={"/results?search_query=" + s}
                    className="w-full block py-2 px-3"
                  >
                    🔍 {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
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
