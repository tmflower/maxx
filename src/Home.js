import head1 from "./head1.png";
import head2 from "./head2.png";
import head3 from "./head3.png";
import head4 from "./head4.png";
import head5 from "./head5.png";
import logo from './maxx-logo.png';
import lines from './maxx-lines.png';
import "./Home.css";
import { NavLink } from 'react-router-dom';


export function Home() {
    return (
        <div class="home">
            <h1 className="heading">What makes a great <br/> Maxx Apprentice?</h1>
            <h3 className="subheading">The path to success is paved in actions</h3>
            <img className="lines" src={lines} alt="decorative lines" />
            <div className="values">
                <div className="value">
                <NavLink to="/perseverance"><img className="value-img" src={head1} alt="head"/></NavLink>
                    <h5 className="value-heading">PERSEVERANCE</h5>
                    <p className="value-text">Enjoys problem solving</p>
                </div>
                <div className="value">             
                    <h5 className="value-heading">CURIOSITY</h5>     
                    <p className="value-text">Needs to know why something works</p> 
                    <NavLink to="/curiosity"><img className="value-img"  src={head2} alt="head"/></NavLink>     
                </div>
                <div className="value">
                    <NavLink to="/collaboration"><img className="value-img"  src={head3} alt="head"/></NavLink>
                    <h5 className="value-heading">COLLABORATION</h5>
                    <p className="value-text">Team player</p>
                </div>
                <div className="value">          
                    <h5 className="value-heading">AUTHENTICITY</h5>        
                    <p className="value-text">Able to admit when they don't know</p>
                    <NavLink to="/authenticity"><img className="value-img"  src={head4} alt="head"/></NavLink>          
                </div>
                <div className="value">
                    <NavLink to="/initiative"><img className="value-img"  src={head5} alt="head"/></NavLink>
                    <h5 className="value-heading">INITIATIVE</h5>
                    <p className="value-text">Goes above and beyond without being asked</p>          
                </div>
            </div> 
            <footer>
                <img className="logo" src={logo} alt="Maxx logo"/>
                <p className="copyright">&copy; 2022 MAXX Potential LLC & Tina Flower &nbsp; | &nbsp;  All Rights Reserved &nbsp; | &nbsp;  Page 1</p>
            </footer>
        </div> 
    )
}