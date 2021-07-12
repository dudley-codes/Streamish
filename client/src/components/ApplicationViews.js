import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
import SearchBar from "./SearchBar";
import UserVideos from "./UserVideos";

const ApplicationViews = () => {
  return (
    //todo add route for search bar
    <Switch>
      <Route path="/" exact>
        <VideoList />
      </Route>

      <Route path="/search">
        <VideoList />
      </Route>

      <Route path="/videos/add">
        <VideoForm />
      </Route>

      <Route path="/videos/:id">
        <VideoDetails />
      </Route>

      <Route path="/users/:id">
        <UserVideos />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
