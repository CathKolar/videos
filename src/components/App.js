import "./App.css";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Footer from "./Footer";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //set default search on page load

  useEffect(() => {
    onTermSubmit("React JS");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="App ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
