import { Link } from "react-router-dom";
//import styles from './navBar.css'

export default function navBar(){
    return <><div className="navContainer">
    <button className="navbutton">
        <Link to='/home' className="navlink">Home</Link>
    </button>
    <button className="navbutton">
        <Link to='/myPokemons' className="navlink">My pokemons</Link>
    </button>
    <button className="navbutton">
        <Link to='/create' className="navlink">Add Pokemon</Link>
    </button>
    </div>
    </>
}