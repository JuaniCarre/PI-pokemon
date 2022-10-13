import { Link } from "react-router-dom";
import './navBar.css'

export default function navBar(){
    return(
        <div className="navContainer">
            <img src="https://fontmeme.com/permalink/221012/2d6183301fc4cc232894ff34fe239036.png" alt="pokemon-font" border="0" className="image"/>
            <button className="navbutton">
                <Link to='/home' className="navlink">Home</Link>
            </button>
            <button className="navbutton">
                <Link to='/create' className="navlink">Add Pokemon</Link>
            </button>
        </div>

)}