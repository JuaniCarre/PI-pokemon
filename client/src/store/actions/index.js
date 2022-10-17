import axios from 'axios';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_TYPES = 'FETCH_TYPES'
export const DETAIL_POKEMON = 'DETAIL_POKEMON'
export const CLEAR = 'CLEAR'
export const POST_POKEMON = 'POST_POKEMON'
export const SORTATTACK = 'SORTATTACK'
export const SORTNAME = 'SORTNAME'
export const FILTERORIGIN = 'FILTER_ORIGIN'
export const FILTERTYPES = 'FILTER_TYPES'
export const SEARCHNAME= 'SEARCH_NAME'

export function fetchPokemons(){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemon')
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

export function postPokemon(input){
    return function(dispatch){
        axios.post('http://localhost:3001/pokemon/', input)
        .then(pokemon =>{
            dispatch({
                type: POST_POKEMON,
            })
        })
        .catch( error=> console.log(error))
    }
}

export function searchPokemonByName(name){ 
    return function (dispatch){
        axios.get('http://localhost:3001/pokemon/pokemons?name='+name)
        .then(pokemon => {
            dispatch({
                type: SEARCHNAME,
                payload: pokemon.data
            })
        })
    }
}


export function clearDetail(){
    return{
        type:CLEAR
    }
}

export function sortAttack(order){
    return {
        type: SORTATTACK,
        payload:order
    }
}

export function sortName(order){
    return{
        type: SORTNAME,
        payload: order
    }
}

export function filterOrigin(origin){
    return{
        type: FILTERORIGIN,
        payload: origin
    }
}

export function filtertypes(type, origin){
    return{
        type:FILTERTYPES,
        payload:type,
        data:origin
    }
}
