import ThemeToggle from './ThemeToggle';
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';


export default function Header(){
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-xlg border-blue-500">
      
      
      <div className="flex items-center gap-3"> 
        <img className="rounded-full shadow-black w-10 h-10" src={logo} alt="logo" />
        <Link to="/" className="text-2xl font-bold text-gradient select-none cursor-pointer">Reverbia</Link>
      </div>
      
    <nav className="hidden md:flex gap-6 text-sm font-medium text-foreground">
        <Link to="/" className="relative normal-text text-1.5xl group">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link to="/explore" className="relative text-1.5xl normal-text group">
            Explore
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link to="/tracks" className="relative text-1.5xl normal-text group">
            Your Tracks
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
    </nav>

    <div className="flex items-center gap-4">
        <Link to="/login" className="button px-4 py-2 text-sm">
            Sign in
        </Link>
        <Link
            to="/register"
            className="button px-4 py-2 text-sm"
        >
            Sign up
        </Link>
        <ThemeToggle />
    </div>

    

    </header>
  )
}
