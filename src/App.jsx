// import React from 'react'

import { useContext } from "react";
import Display from "./componennts/Display";
import Player from "./componennts/Player";
import Sidebar from "./componennts/sidebar";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
