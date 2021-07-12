import React, { useState, useEffect } from "react";
import "./App.css";
import VideoList from "./components/VideoList";

function App() {
  const { search } = '/api/video/search';
  console.log('window location', search)
  const query = new URLSearchParams(search).get('q');
  const [ searchQuery, setSearchQuery ] = useState(query || '');

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
