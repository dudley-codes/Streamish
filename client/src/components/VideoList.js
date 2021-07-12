import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, getAllVideosWithComments } from "../modules/videoManager";
import SearchBar from "./SearchBar";

const VideoList = ({ searchQuery, setSearchQuery }) => {
  const [ videos, setVideos ] = useState([]);

  const getVideos = () => {
    getAllVideos().then(videos => setVideos(videos));
  };

  const getVideosWithComments = () => {
    getAllVideosWithComments().then(videos => setVideos(videos));
  };

  useEffect(() => {
    getVideosWithComments();
  }, []);

  return (
    <>
      <SearchBar
        searchQuery={ searchQuery }
        setSearchQuery={ setSearchQuery }
      />
      <div className="container">
        <div className="row justify-content-center">
          { videos.map((video) => (
            <Video video={ video } key={ video.id } />
          )) }
        </div>
      </div>
    </>
  );
};

export default VideoList;
