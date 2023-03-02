import { useEffect, } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonById, clearDetail } from "../../store/actions"
import './pokemonDetail.css'

export default function PokemonDetail(){
    let { id } = useParams()
    let dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getPokemonById(id))
        return ()=>{dispatch(clearDetail())}
    }, [dispatch, id])
    let res = useSelector((state) => state.pokemonDetail)
    let tipos = res.types?.join(', ')
    return (
    <div className="detailcontainer">
        <div className="cardcontainer">
            <img src={res.image} alt="este es un pokemon" className="PokeImage"></img>
            <div className="infocontainer">
            <h2>Name: {res.name}</h2>
            <p>ID: {res.id}</p>
            <h4>HP: {res.hp}</h4>
            <h4>Attack: {res.attack}</h4>
            <h4>Defense: {res.defense}</h4>
            <h4>Speed: {res.speed}</h4>
            <h4>Height: {res.height}</h4>
            <h4>Weight: {res.weight}</h4>
            <h4>Types: {tipos}.</h4>
        </div>
        </div>
    </div>
)}