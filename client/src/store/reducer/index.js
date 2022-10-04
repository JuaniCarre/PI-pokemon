import { FETCH_POKEMONS, FETCH_TYPES, DETAIL_POKEMON, CLEAR } from "../actions";

const initialState = {
    pokemons:[],
    filteredPokemons:[],
    pokemonDetail:{},
    types:[]
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_POKEMONS:
            return{
                ...state,
                pokemons:action.payload,
                filteredPokemons:action.payload
            }

        case FETCH_TYPES:
            return{
                ...state, 
                types: action.payload
            }

        case DETAIL_POKEMON:
            return{
                ...state,
                pokemonDetail:action.payload
            }

        case CLEAR:
            return{
                ...state,
                pokemonDetail:{}
        }


        default:
            return state
    }
}