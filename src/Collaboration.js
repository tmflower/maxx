import { NavLink } from "react-router-dom";
import head3 from "./head3.png"

export function Collaboration() {
    return (
        <div className="value-page">
            <h1>Collaboration: Team player</h1>
            <img src={head3} alt="head" />

            <div className="value-page-container">
                <p className="value-page-text">Until recently, I had only ever worked on solo technology projects. The idea of working with others and exposing the weaknesses in my skill set was intimidating, yet I felt that I could only grow so much by continuing to do solo projects. So I was fortunate to have the opportunity to join <a href="https://the-collab-lab.codes/" target="_blank" rel="noreferrer">The Collab Lab</a>, which changed everything for me.</p>

                <p className="value-page-text">The Collab Lab provides an 8-week supported experience for those new to web development to work on a team with other new developers, especially those from underrepresented groups. With my wonderful team of three other newbies, I for the first time did pair programming, code reviews, demos, pull requests and even the previously terrifying merging of code in github.</p>

                <p className="value-page-text">Through my Collab Lab experience I learned so much, and I got a taste of what I had been missing out on while working alone. Working with others to build something bigger and better than I could on my own was exhilarating. My team was able to communicate consistently and effectively, both synchronously and asynchronously, make compromises, work through problems together, learn from each other, and ultmately build a project we were proud of.</p>
            </div>

            <p>See the code for this entire project, or see a closed pull request:</p>
            <a className="project-link" href="https://github.com/the-collab-lab/tcl-47-smart-shopping-list.git" target="_blank" rel="noreferrer">Collab Lab Github</a>
            <a className="project-link" href="https://github.com/the-collab-lab/tcl-47-smart-shopping-list/pull/20" target="_blank" rel="noreferrer">Closed pull request example</a>
            <NavLink to="/"><button>Back</button></NavLink>
        </div>
    )
}