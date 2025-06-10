import { Volume2, VolumeX } from "lucide-react";
import useTheme from "../hooks/useTheme";
import * as Tone from "tone";

export default function MuteToggle({ playerRef, muted, setMuted }) {
    const { theme } = useTheme();
    const isLight = theme === "light";

    async function toggleMute() {
        if (!playerRef.current) {
            const reverbiaTheme = (await import("../assets/reverbia_theme.mp3")).default;
            await Tone.start();

            const player = new Tone.Player(reverbiaTheme).toDestination();
            const analyser = new Tone.Analyser("waveform", 1024);
            player.connect(analyser);

            // attach custom fields so HeroVisualizer can pick it up
            player._analyser = analyser;
            player._enabled = true;

            player.loop = true;
            player.autostart = true;
            player.mute = false;

            playerRef.current = player;
            setMuted(false);
        } else {
            playerRef.current.mute = !muted;
            setMuted(!muted);
        }
    }

    return (
        <button
            onClick={toggleMute}
            className={`
                p-1 sm:p-2 rounded-full z-20
                ${isLight ? "bg-[#ebeffe]" : "bg-[#030312]"}
                hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer
                absolute top-4 left-4
            `}
        >
            {muted ? (
                <VolumeX className={`w-4 h-4 sm:w-5 sm:h-5 ${isLight ? "text-[#8b5cf6]" : "text-[#3b82f6]"}`} />
            ) : (
                <Volume2 className={`w-4 h-4 sm:w-5 sm:h-5 ${isLight ? "text-[#8b5cf6]" : "text-[#3b82f6]"}`} />
            )}
        </button>
    );
}
