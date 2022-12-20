import { NavLink } from 'react-router-dom';
import { Authenticity } from './Authenticity';
import { Collaboration } from './Collaboration';
import { Curiosity } from './Curiosity';
import { Home } from './Home';
import { Initiative } from './Initiative';
import { Perseverance } from './Perseverance';

export function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink className="navbar-link" to="/maxx/" element={<Home />}>Home</NavLink>
            <NavLink className="navbar-link" to="/perseverance" element={<Perseverance />}>Perseverace</NavLink>
            <NavLink className="navbar-link" to="/curiosity" element={<Curiosity />}>Curiosity</NavLink>
            <NavLink className="navbar-link" to="/collaboration" element={<Collaboration />}>Collaboration</NavLink>
            <NavLink className="navbar-link" to="/authenticity" element={<Authenticity />}>Authenticity</NavLink>
            <NavLink className="navbar-link" to="/initiative" element={<Initiative />}>Initiative</NavLink>
        </nav>
    )
}