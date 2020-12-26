import React from 'react'; 
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <Link to="/exercises">
                for trainers
            </Link>
            &nbsp; 
            <Link to="/performances">
                for trainees
            </Link>
        </div>
    )
}

export default Landing;