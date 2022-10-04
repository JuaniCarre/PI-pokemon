import axios from 'axios';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';//
export const FETCH_TYPES = 'FETCH_TYPES'
export const DETAIL_POKEMON = 'DETAIL_POKEMON'
export const CLEAR = 'CLEAR'

export function fetchPokemons(){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemon/')
        .then((pokemons)=>{
            dispatch({
                type: FETCH_POKEMONS,
                payload: pokemons.data
            })
        })
        .catch((error)=> console.log(error))
    }
}

export function fetchTypes(){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemon/types')
        .then((types) => 
        dispatch({
            type: FETCH_TYPES,
            payload: types.data
        }))
        .catch(error => console.log(error))
    }
}

export function getPokemonById(id){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemon/pokemons/' + id)
        .then(pokemon => {
            dispatch({
                type: DETAIL_POKEMON,
                payload: pokemon.data
            })
        })
        .catch(error => console.log(error))
    }
}

export function clearDetail(){
    return{
        type:CLEAR
    }
}
