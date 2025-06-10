import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import useTheme from "../hooks/useTheme";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { ListMusic, AudioLines, Sun, Moon, Upload, Download, Sliders} from "lucide-react";

export default function Features(){
    const { theme } = useTheme();
    const isLight = theme === "light";
    const features=[
        {
            icon: <Upload size={50}/>,
            title: 'Track Upload & Playback',
            desc: 'Upload your own audio and play it back seamlessly — with smooth controls ensuring a seamless experience.',
        },
        {
            icon: <ListMusic size={50} />,
            title: 'Playlist Management',
            desc: 'Create, edit, and organize custom playlists that match your mood.',
        },
        {
            icon: <AudioLines size={50}  />,
            title: 'Real-time Audio Effects',
            desc: 'Tweak pitch, tempo, reverb and more — all in real-time with instant audio feedback.',
        },
        {
            icon: <Sliders size={50} />,
            title: 'Custom Presets',
            desc: 'Save your favorite EQ and FX settings so you can dial in your sound-space instantly anytime.',
        },
        {
            icon: theme === 'light' ? <Sun size={50}  /> : <Moon size={50}  />,
            title: 'Light & Dark Themes',
            desc: 'Switch between soft purple dawn or deep midnight blue — your UI, your vibe.',
        },
        {
            icon: <Download size={50} />,
            title: 'Offline Access',
            desc: 'Download tracks with your saved presets and listen anywhere, no connection needed.',
        },
 
    ]
    return(
    
        <div className="bg-gradient flex min-h-[450px] flex-col gap-3 items-center mt-[-7rem] top-0 shadow-lg justify-center w-full relative">
            <h1 className="text-4xl text-gradient text-center font-semibold">Your Sound, Your Realm</h1>
            <h4 className='text-2xl normal-text pb-5'>Step into your own sound space – where every track is yours to mold.</h4>
            <Swiper 
            spaceBetween={10}
            modules={[Autoplay]}
            loop={true}
            speed={2000}
            autoplay={{
                delay:500,
                disableOnInteraction:false
            }}
            allowTouchMove={false}
            breakpoints={{
                320: {slidesPerView:1},
                640: {slidesPerView:3},
             
            }}

            className='w-full px-4 sm:px-10 py-10'
            centeredSlides={true}>
                {features.map(({icon, title, desc}, index)=>(
                    <SwiperSlide key={index} className="hover:scale-105">
                        <div className="card">
                            <div className={`w-6 h-6 text-4xl sm:w-8 sm:h-8 md:w-10 md:h-10 m-4 font-medium flex justify-center ${isLight ? "text-[#8b5cf6]" : "text-[#3b82f6]"}`}>{icon}</div>
                            <h2 className='text-xl font-semibold text-gradient mb-2'>{title}</h2>
                            <p className='normal-text'>{desc}</p>
                        </div>
                        
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    )
}