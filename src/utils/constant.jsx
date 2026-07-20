export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const MAX_CACHE_SIZE = 100;

export const YOUTUBE_SEARCH_RESULT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";

export const LIVE_CHAT_COUNT = 25;
