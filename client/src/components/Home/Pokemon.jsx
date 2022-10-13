import { NavLink } from "react-router-dom";
import './Pokemon.css'
import notfound from "../../Images/notfound.png"

export default function Pokemon({name, image, types, attack, id}){
    if(types !== undefined){
    return <div className='card-container'><NavLink to={`home/${id}`} className="card-name">
        <div className="imageContainer">
        <img src={image} alt= "Pokemon" className='card-image'></img>
        </div>
        <h2 className="card-name">{name}</h2>
    </NavLink>
        <h4 className="card-info">Attack: {attack}</h4>
        <h4 className="card-info">Types: {types.join(', ')}.</h4>
    </div>
    } else {
        return (<div className='card-container'>
        <div className="imageContainer">
        <img src={notfound} alt= "Pokemon" className='card-image'></img>
        </div>
        <h2 className="card-name">We couldn't find that pokemon, please do another search!</h2>
    </div>)
    }
}