
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
    <div className="bg-gradient h-screen overflow-y-scroll overflow-x-hidden">
    <Router>
      <Header/>
      <Hero/>
      <Features/>
    </Router>  
    </div>

  )
}

export default App;