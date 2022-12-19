import { NavLink } from "react-router-dom";
import "./Values.css";
import head1 from "./head1.png"

export function Perseverance() {
    return (
        <div className="value-page">
            <h1>Perseverance: Enjoys problem solving</h1>
            <img src={head1} alt="head"/>

            <div className="value-page-container">
                <p className="value-page-text">My love of problem solving is one of the reasons I chose to pursue a career in technology. As soon as I learned just a little bit of code, it opened up a world of possibilities: if I can do this, then couldn't I do that? And when that doesn't work, can I try it another way? And so forth. I love digging into a problem that feels too hard to solve, grappling with it, even getting frustrated by it, and eventually feeling the deep satisfaction of solving it.</p>

                <p className="value-page-text">A recent example comes from a big project I've been working on for a while. I'm building a web app for kids, and one of the many problems I've encountered along the way so far was setting up access codes. I had this idea that a kid could only sign up if their parent first registered, got an access code, then gave it to their kid. But I didn't know how to simulataneously collect the access code entered by the kid upon registering, verify that it existed with a parent account, link that parent account to the new child account, and either create the new child account or reject it, depending on that verification.</p>
                
                <p className="value-page-text">I don't want to guess at the number of times I created and deleted database entries while testing the many efforts I made at getting this to work. Many times, I doubted that I would be able to get it to work at all, let alone without help. But finally I did. I don't know how good my solution would be outside of a personal project; there are probably many opportunities to optimize. But delving into that problem and digging my way to a solution is something I find inherently satisfying, even if my solution is ultimately just a starting point toward a better solution.</p>
            </div>


            <p>See the code for this work-in-progress project:</p>

            <a className="project-link" href="https://github.com/tmflower/critter-club.git" target="_blank" rel="noreferrer">Critter Club</a>

            <NavLink to="/"><button>Back</button></NavLink>
        </div>
    )
}