import { NavLink } from "react-router-dom";
import head2 from "./head2.png"

export function Curiosity() {
    return (
        <div className="value-page">
            <h1>Curiosity: Needs to know why something works</h1>
            <img src={head2} alt="head" />

            <div className="value-page-container">
                <p className="value-page-text">Since I started learning a bit about web development, it seems that there is no end to the questions that bubble and brew in my mind. Why didn't the background color change in that div? How can I make this text block show only after the user submits a form? This has been especially true since I began learning React. Everyone says that React is just Javascript, but I find that it sometimes responds in what I consider to be mysterious ways. My approach to dealing with this is to make myself do projects in React, and try to do things that I don't know how to do.</p>

                <p className="value-page-text">One example comes from a small project I made when learning how to create forms in React. So as a practice exercise, I made an app that takes user input from a form and turns it into a poem. There are so many inputs on the form that I was forced to repeat and understand how forms function in React. I also decided to take the opportunity to explore some other new things, like adding tooltips and Bootswatch themes.</p>

                <p className="value-page-text">When I was finished, I thought the app was kind of fun, so I wanted to deploy it. My efforts to deploy with Github Pages failed. Why? I wondered. I had previously deployed front-end apps to Github Pages easily. With a bit of Googling, I discovered that there were a few extra steps required when deploying a React app. Following those steps, I successfully deployed the app and moved on to my next challenge.</p>
            </div>

            <p>See the live site and code for this project:</p>

            <a className="project-link" href="https://tmflower.github.io/poet-bot/" target="_blank" rel="noreferrer">PoetBot Live</a>
            <a className="project-link" href="https://github.com/tmflower/poet-bot" target="_blank" rel="noreferrer">PoetBot Github</a>
            <NavLink to="/"><button>Back</button></NavLink>
        </div>
    )
}