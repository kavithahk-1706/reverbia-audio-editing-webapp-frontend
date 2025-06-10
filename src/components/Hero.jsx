
import {Link} from "react-router-dom";
import HeroVisualizer from "./HeroVisualizer";
import { useRef, useState } from "react";
import MuteToggle from "./MuteToggle";

export default function Hero() {
  const [muted, setMuted]=useState(true);
  const playerRef=useRef(null);

  
  

  return (
    <div className="relative w-full h-screen bg-gradient">
      <div className="mt-4">
        <MuteToggle playerRef={playerRef} muted={muted} setMuted={setMuted} />
      </div>

  
      <div className="relative z-10 bottom-15 items-center flex gap-10 flex-col justify-center h-full text-center px-4">
        
        <h1 className="text-4xl sm:text-5xl top-0 font-bold text-gradient">
          Reverbia – Where Sound Echoes Across Dimensions
        </h1>
        <p className="top-3 not-only-of-type:text-lg font-medium normal-text">
          Step into the reverb of a concert hall. <br />
          Sink into the echo of an underwater dream. <br />
          Every preset is a portal — and with Reverbia? <br />
          You're not just tweaking audios — you're shaping your own spaces.
        </p>
       <Link to="/login" className="button px-4 py-2 text-md font-medium">
          Get Started
        </Link>
      </div>

      <div className="relative w-screen bottom-8 top-0">
       <HeroVisualizer playerRef={playerRef}/>
      </div>

    </div>
  );
}
