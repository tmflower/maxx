
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./Home";
import { Perseverance } from "./Perseverance";
import { Curiosity } from "./Curiosity";
import { Collaboration } from './Collaboration';
import { Authenticity } from './Authenticity';
import { Initiative } from './Initiative';

function App() {

  return (      
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/perseverance" element={<Perseverance />}></Route>
        <Route path="/curiosity" element={<Curiosity />}></Route>
        <Route path="/collaboration" element={<Collaboration />}></Route>
        <Route path="/authenticity" element={<Authenticity />}></Route>
        <Route path="/initiative" element={<Initiative />}></Route>
      </Routes>

    </div>
  );
}

export default App;
