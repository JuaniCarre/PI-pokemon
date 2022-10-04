import { NavLink } from "react-router-dom";

export default function Pokemon({name, image, types, attack, id}){
    return <div classname='card-container'><NavLink to={`home/${id}`}>
        <img src={image} alt= "Pokemon" classname='card-image'></img>
        <h2 className="card-name">{name}</h2>
    </NavLink>
        <h4 className="card-info">Types: {types}</h4>
        <h4 className="card-info">attack: {attack}</h4>
    </div>
}