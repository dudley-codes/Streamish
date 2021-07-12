import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserVideos } from "../modules/videoManager";
import Video from "./Video";

const UserVideos = () => {
  const [ user, setUser ] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUserVideos(id).then(setUser)
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="container">
      <strong>Videos for { user.name }</strong>
      <div className="row justify-content-center">
        { console.log('user', user.videos) }
        { user.videos.map((video) => (
          <Video video={ video } user={ user } key={ video.id } />
        )) }
      </div>
    </div>
  );

};

export default UserVideos;