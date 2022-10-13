import { NavLink } from "react-router-dom";
import  './landing.css'

export default function landing(){
    return<div className="landingContainer">
            <h1 className="pokepedia">Pokepedia</h1>
            <div className="buttonContainer">
            <NavLink to='/home' className="startingButton">Get started!</NavLink>
            </div>
        </div>
}