import React, {useState} from 'react' ; 
import { Link } from 'react-router-dom'


const Banner = ({currentUser, logout}) => {
    debugger
    console.log(React.version)
    const [searchTerm, setSearchTerm] = useState(""); 
    debugger
    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

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

    const handleSubmit = (e) => {
        e.preventDefault(); 
        //alternative formData
        // const formData = new FormData();

        const user = Object.assign({}, {username: searchTerm}); 
        this.props.searchUser(user)
    }

    return (
        <header className="banner">
            <hgroup className="banner__company">
                <img className="banner__logo" src={window.barbellURL} alt="barbell logo"/>
                <h1 className="banner__name">
                    TrainerX    
                </h1>
                <form className="search_form" onSubmit={handleSubmit}>
                    <input className="search_form__input" type="search" placeholder="search" value={searchTerm} onChange={handleChange}/>
                    <button className="search_form__button">Search</button>
                </form>
            </hgroup>

            <hgroup className="banner__auth">

                {currentUser ? personalGreeting() : sessionLinks()  }

            </hgroup>

        </header>
    )
}

export default Banner;