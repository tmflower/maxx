import { NavLink } from "react-router-dom";
import head5 from "./head5.png";

export function Initiative() {
    return (
        <div className="value-page">
            <h1>Initiative: Goes above and beyond without being asked</h1>
            <img src={head5} alt="head5"/>

            <div className="value-page-container">
                <p className="value-page-text">On the heels of my Collab Lab experience, and with a hunger for more collaborative coding experience, I signed up for a beginner-friendly hackathon with <a href="Girl Develop It" target="_blank" rel="noreferrer">Girl Develop It</a>, an organization that supports women and non-binary folks entering careers in tech. I hoped I would find a team that I could contribute to with an idea I was interested in. During the idea pitch process, I suggested building a yoga "pose of the day" app, and the idea garnered significant interest. We decided to move forward with the idea, and I became the team leader.</p>

                <p className="value-page-text">Did I know how to lead a web development team? Had I ever even been to a hackathon, let alone lead a team in one? An emphatic NO and NO, yet I felt that this was an opportunity to push beyond my comfort zone and also take advantage of some of my transferable soft skills from my previous career as a teacher. What my team lacked in experience and technical know-how, we made up for in enthusiasm, hard work, and support of one another. It was a thrilling experience to navigate building an app from start to finish over three days with strangers spread across multiple time zones.</p>

            </div>

            <p>See the code for this project:</p>
            <a className="project-link" href="https://github.com/tmflower/yoga2go.git" target="_blank" rel="noreferrer">Yoga2Go Github</a>
            <p>Note: The API we used for the yoga poses recently went down, so unfortunately there is not much to see at the live link mentioned in the README file.</p>
            <NavLink to="/"><button>Back</button></NavLink>
        </div>
    )
}