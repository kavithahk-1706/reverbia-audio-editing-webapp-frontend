import { Volume2, VolumeX } from "lucide-react"; 
import useTheme from "../hooks/useTheme";


export default function MuteToggle({playerRef, muted, setMuted }) {
    const { theme } = useTheme();
    const isLight = theme === "light";
    
    function toggleMute() {
        const player = playerRef.current;
        if (player) {
            player.mute = !muted;
            setMuted(!muted);
        }
    }
    
    return (
        <button
            onClick={toggleMute}
            className={`
                p-2 rounded-full z-50
                ${isLight ? "bg-[#ebeffe]" : "bg-[#030312]"}
                hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer
                absolute top-4 left-4
            `}
        >
            {muted ? (
                <VolumeX className={`w-6 h-6 ${isLight ? "text-purple-500" : "text-blue-500"}`} />
            ) : (
                <Volume2 className={`w-6 h-6 ${isLight ? "text-purple-500" : "text-blue-500"}`} />
            )}
        </button>
    );
}
