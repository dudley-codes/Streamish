import React, { useState, useEffect } from "react";
import "./App.css";
import VideoList from "./components/VideoList";

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('q');

  const [ searchQuery, setSearchQuery ] = useState(query || '');
  console.log('searchquery', searchQuery)
  return (
    <div className="App">
      <VideoList
        searchQuery={ searchQuery }
        setSearchQuery={ setSearchQuery }
      />
    </div>
  );
}

export default App;
