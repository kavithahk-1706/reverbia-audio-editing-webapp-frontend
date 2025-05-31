import { useEffect, useRef, useState } from "react";
import reverbiaTheme from "../assets/reverbia_theme.mp3";
import * as Tone from "tone";


export default function HeroVisualizer({playerRef,muted}) {
    const canvasRef = useRef(null);
    const [started, setStarted] = useState(false);

    const analyserRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let analyser;
        let bufferLength;

        function draw() {
            requestAnimationFrame(draw);
            const values = analyser.getValue();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, "#8b5cf6");
            gradient.addColorStop(1, "#3b82f6");
            ctx.strokeStyle = gradient;
            ctx.shadowColor = "#8b5cf6";
            ctx.shadowBlur = 20;
            ctx.lineWidth = 4;
            ctx.beginPath();
            const sliceWidth = canvas.width / bufferLength;
            let x = 0;
            for (let i = 0; i < bufferLength; i++) {
                const v = (values[i] + 1) / 2;
                const y = v * canvas.height;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                x += sliceWidth;
            }
            ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.stroke();
        }

        const handleUserGesture = async () => {
            await Tone.start();

            const player = new Tone.Player(reverbiaTheme).toDestination();
            playerRef.current = player;
            player.mute = muted;
            player.loop = true;
            player.autostart = true;

            analyser = new Tone.Analyser("waveform", 1024);
            player.connect(analyser);
            bufferLength = analyser.size;

            draw();

            setStarted(true);
            window.removeEventListener("mousemove", handleUserGesture);
        };

        window.addEventListener("mousemove", handleUserGesture);

        return () => window.removeEventListener("mousemove", handleUserGesture);
    }, []);


    
    

    return (
        <div> 
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={200}
                className="absolute top-0 left-0 cursor-pointer z-10"
            />
        </div>
    );
}
