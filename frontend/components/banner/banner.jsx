import React from 'react' ; 
import { Link } from 'react-router-dom'


const Banner = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="banner__auth_links">


            <Link to="/login" className="banner__auth_link">Login</Link>

            <Link to="/signup" className="banner__auth_link">Sign up!</Link>

        </nav>
    );
    const personalGreeting = () => (
        
        <button className="banner__auth_button" onClick={logout}>
            log out
        </button> 
    )
    return (
        <header className="banner">
            <hgroup className="banner__company">
                <img className="banner__logo" src={window.barbellURL} alt="barbell logo"/>
                <h1 className="banner__name">
                    TrainerX    
                </h1>
            </hgroup>

            <hgroup className="banner__auth">

                {currentUser ? personalGreeting() : sessionLinks()  }

            </hgroup>

        </header>
    )
}

export default Banner;