import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
import SearchBar from "./SearchBar";
import UserVideos from "./UserVideos";
import Login from "./Login";
import Register from "./Register";

const ApplicationViews = ({ isLoggedIn }) => {
  return (
    //todo add route for search bar
    <Switch>
      <Route path="/" exact>
        { isLoggedIn ? <VideoList /> : <Redirect to="/login" /> }
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

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
