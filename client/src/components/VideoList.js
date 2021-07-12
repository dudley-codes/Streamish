import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, getAllVideosWithComments, getSearchResults } from "../modules/videoManager";
import SearchBar from "./SearchBar";

const VideoList = ({ searchQuery, setSearchQuery }) => {
  const [ videos, setVideos ] = useState([]);



  console.log('is it null', searchQuery)
  const renderVideos = () => {
    if (searchQuery === '') {
      return getAllVideosWithComments().then(videos => setVideos(videos))
    } else {
      return getSearchResults(searchQuery).then(videos => setVideos(videos))
    }
  }





  useEffect(() => {
    renderVideos();
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
