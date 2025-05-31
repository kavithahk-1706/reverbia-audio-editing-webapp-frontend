
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
    <div className="bg-gradient h-screen">
    <Router>
      <Header/>
      <Hero/>
    </Router>  
    </div>

  )
}

export default App;