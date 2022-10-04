import { useEffect, } from "react"
import { useParams } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { getPokemonById, clearDetail } from "../../store/actions"

export default function PokemonDetail(){
    let { id } = useParams()
    let dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getPokemonById(id))
        return ()=>{dispatch(clearDetail())}
    }, [dispatch, id])
    let res = useSelector((state) => state.pokemonDetail)
    return <div>
        <img src={res.image}></img>
        <h2>{res.name}</h2>
        <p>{res.id}</p>
        <h4>{res.hp}</h4>
        <h4>{res.attack}</h4>
        <h4>{res.defense}</h4>
        <h4>{res.speed}</h4>
        <h4>{res.height}</h4>
        <h4>{res.weight}</h4>
        <h4>{res.types}</h4>
    </div>
}