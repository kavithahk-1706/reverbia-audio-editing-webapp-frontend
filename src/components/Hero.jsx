
import {Link} from "react-router-dom";
import HeroVisualizer from "./HeroVisualizer";
import { useRef, useState } from "react";
import MuteToggle from "./MuteToggle";

export default function Hero() {
  const [muted, setMuted]=useState(true);
  const playerRef=useRef(null);

  
  

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient">
      <div className="w-full mt-30 absolute flex flex-col items-center justify-center">
        <MuteToggle playerRef={playerRef} muted={muted} setMuted={setMuted} />
      </div>

  
      <div className="relative z-10 flex flex-col m-2 not-only:items-center justify-center h-full text-center px-4">
        
        <h1 className="text-5xl font-bold text-gradient">
          Reverbia – Where Sound Echoes Across Dimensions
        </h1>
        <p className="mt-8 mb-6 text-lg normal-text">
          Step into the reverb of a concert hall. <br />
          Sink into the echo of an underwater dream. <br />
          Every preset is a portal — and with Reverbia? <br />
          You're not just tweaking audios — you're shaping your own spaces.
        </p>
       <Link to="/login" className="button px-4 py-2 text-sm inline-block">
          Get Started
        </Link>
      </div>

      <div className="absolute w-screen h-[35%] bottom-0">
       <HeroVisualizer playerRef={playerRef}/>
      </div>

    </div>
  );
}
