import axios from "axios";

const KEY = "AIzaSyDveeCgWbYg9wd8QRs63Ctq1hxs8aI6uic";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
