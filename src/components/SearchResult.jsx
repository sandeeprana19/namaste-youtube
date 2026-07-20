import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULT_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const SearchResult = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getSearchResult();
  }, []);

  const getSearchResult = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULT_API + searchParams + "&key=" + GOOGLE_API_KEY,
    );
    const json = await data.json();
    setSearchItems(json?.items);
  };

  return (
    <div className="flex flex-wrap">
      {searchItems.map((searchItem) => (
        <Link key={searchItem?.etag} to={"/watch?v=" + searchItem?.id?.videoId}>
          <VideoCard info={searchItem} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
