import AppHeader from "./components/App-Header";
import "./App.css";
import MountainItem from "./components/MountainItem";
import mountains from "./data/mountains";
import React, { useState } from "react";
import MountainPost from "./components/MountainPost";
import AppSearch from "./components/App-search";

function App() {
  const [selectedMountain, setSelectedMountain] = useState(null);
  const [searchText, setSearchText] = useState("");
  function onMountainOpenClick(theMountain) {
    setSelectedMountain(theMountain);
  }

  function onMountainCloseClick() {
    setSelectedMountain(null);
  }
  // function setSearchText(){

  // }
  const filteredMountains = mountains.filter((mountain) => {
    return mountain.title.includes(searchText);
  });
  const mountainsElements = filteredMountains.map((mountain, index) => {
    return (
      <MountainItem
        key={index}
        mountain={mountain}
        onMountainClick={onMountainOpenClick}
      />
    );
  });

  let mountainPost = null;
  if (!!selectedMountain) {
    mountainPost = (
      <MountainPost
        mountain={selectedMountain}
        onbgClick={onMountainCloseClick}
      />
    );
  }

  return (
    <div className="app">
      <AppHeader />
      <div className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{mountainsElements}</div>
          </div>
          <div>
             <h1> H1</h1>
          </div>
      </div>
      {mountainPost}
    </div>
  );
}

export default App;
