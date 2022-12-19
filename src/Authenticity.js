import { NavLink } from "react-router-dom";
import head4 from "./head4.png";
import values from "./maxx-values.png";
import homepage from "./my-homepage.png";

export function Authenticity() {
    return (
        <div className="value-page">
            <h1>Authenticity: Able to admit when they don't know</h1>
            <img src={head4} alt="head" />

            <div className="value-page-container">
                <p className="value-page-text">Since I decided to pursue a career in technology, I have been forced to get comfortable with living in the space of not knowing. It is a humbling experience to leave a career in which I was highly competent, well-respected, and confident in my abilities for one in which I feel like a baby learning to crawl and working my way towards my first attempt at walking. I've found that I learn the most when I just lean into that feeling of not knowing; most of the time I'm able to research my way to the answers I need, but I've also benefitted tremendously by asking others for help or even just feedback on what I've done. Sometimes my way of getting something to work is effective, but not optimal. I may not even know what factors I should consider until I get input from someone with more experience.</p>

                <p className="value-page-text">This very project, inspired of course by our web development day during Career Lab, provides a good example of my ability to admit what I don't know. First, I'm pretty sure that "the React way" of building this page would not involve creating a different component for each of the values, as I did. Instead, I believe the correct approach would be to create a single reusable Value component that would accept different props for each value, and render it five times, thus preventing code duplication. I understand this concept, but knowing how to implement it is a skill I'm still developing. On the home page, I wanted to replicate the colorful dashed line swirl that was shown on the slides.</p>

                <p className="value-page-text">On the home page, I wanted to replicate the colorful dashed line swirl that was shown on the slides, as seen below. How to create this as well as how to display it correctly with my other page elements had me stumped. My workaround for this was to download a similar image from the Maxx Potential site html, crop it to a similar shape as I desired, and use it as a background image. It's a rough approximation of the original, but not a replica. This is definitely something I would seek help on if I had to do this in a professional context.</p>

                <p className="value-page-text">Finally, my CSS skills leave much room for improvement. Although I can make things work in a simple UI such as this, when things are more complex I can quickly lose my way and make a mess. It is my goal to continue building and improving my CSS skills.</p>

                <figure>
                    <figcaption>Maxx Potential Slide:</figcaption>
                    <img className="screenshots" src={values} alt="maxx values" />                       
                </figure>
                <figure>
                    <figcaption>My Mockup:</figcaption>
                    <img className="screenshots" src={homepage} alt="homepage" />
                </figure>                    

            </div>

            <p>See the live site and code for this project:</p>
            <a className="project-link" href="" target="_blank" rel="noreferrer">Github repo</a>
            <NavLink to="/"><button>Back</button></NavLink>
        </div>
    )
}