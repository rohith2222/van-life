import aboutImage from "/src/assets/images/about-image.png"
import {Link} from "react-router"

export default function About(){
    return (
        <div className="about">
        <img src={aboutImage} alt="About Image"/>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
        Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)</p>

        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="about-explore">
            <p>Your destination is waiting.</p>
            <p>Your van is ready.</p>
            <Link to="/vans">Explore our vans</Link>
        </div>
        </div>
    )
}