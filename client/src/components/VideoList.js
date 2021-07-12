import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, getAllVideosWithComments, getSearchResults } from "../modules/videoManager";
import SearchBar from "./SearchBar";
import VideoForm from './VideoForm';

const VideoList = () => {
  const [ videos, setVideos ] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get('q');

  const [ searchQuery, setSearchQuery ] = useState(query || '');

  const renderVideos = () => {
    if (searchQuery === '') {
      return getAllVideosWithComments().then(videos => setVideos(videos))
    } else {
      return getSearchResults(searchQuery).then(videos => setVideos(videos)).then(() => setSearchQuery(''))
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
      {/* <VideoForm
        renderVideos={ renderVideos }
      /> */}
      <div className="container">
        <div className="row justify-content-center">
          { videos.map((video) => (
            <Video video={ video } user={ video.userProfile } key={ video.id } />
          )) }
        </div>
      </div>
    </>
  );
};

export default VideoList;
