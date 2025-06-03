
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
  
      <div className="absolute inset-0 z-0 mt-120">
       <HeroVisualizer playerRef={playerRef} muted={muted}/>
       
      </div>
      

     
         
     
    
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-5xl font-bold text-gradient">
          Reverbia – Where Sound Echoes Across Dimensions
        </h1>
        <p className="mt-4 text-lg normal-text">
          Step into the reverb of a concert hall. <br />
          Sink into the echo of an underwater dream. <br />
          Every preset is a portal — and with Reverbia? <br />
          You're not just tweaking audios — you're shaping your own spaces.
        </p>
        <Link to="/register" className="button mt-2">
          Get Started
        </Link>
      </div>
    </div>
  );
}
