
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from "./Home";
import { Perseverance } from "./Perseverance";
import { Curiosity } from "./Curiosity";
import { Collaboration } from './Collaboration';
import { Authenticity } from './Authenticity';
import { Initiative } from './Initiative';
import { Navbar } from './Navbar';
import { useState } from 'react';
import head1 from './head1.png';

function App() {
  const location = useLocation();
  
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    setWasClicked(true);
  }

  return (   
    <div className="App">
      { location.pathname === "/maxx/" ? null : <Navbar /> }
      { !wasClicked ?  
      <div className="greeting">
        <h1>Hello!</h1>
        <p>Thanks for visiting!</p>
        <p>Please click on each face image <img className="tiny-head" src={head1} alt="head"/>on the next page to reveal an example of how I demonstrate Maxx Potential's core values.</p>
        <button className='btn' onClick={handleClick}>Let's go!</button>
      </div> 
      : 
      <div>
        <Routes>
          <Route path="/maxx/" element={<Home />}></Route>
          <Route path="/perseverance" element={<Perseverance />}></Route>
          <Route path="/curiosity" element={<Curiosity />}></Route>
          <Route path="/collaboration" element={<Collaboration />}></Route>
          <Route path="/authenticity" element={<Authenticity />}></Route>
          <Route path="/initiative" element={<Initiative />}></Route>
        </Routes>
      </div>}
    </div>
  );
}

export default App;
