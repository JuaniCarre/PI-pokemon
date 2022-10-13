import { FILTERTYPES, FETCH_POKEMONS, FETCH_TYPES, DETAIL_POKEMON, CLEAR, POST_POKEMON, SORTATTACK, SORTNAME, FILTERORIGIN, SEARCHNAME } from "../actions";
import { API, DB, AZ, ASC, ALL, ALLTYPES } from "../../constantes/constantes";

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

        case SORTATTACK:
            let orderedAttack = action.payload === ASC? state.filteredPokemons.sort(function(a,b){
                if(a.attack > b.attack) return 1;
                if(a.attack < b.attack) return -1;
                return 0
            }) : state.filteredPokemons.sort(function(a,b){
                if(a.attack > b.attack) return -1;
                if(a.attack < b.attack) return 1;
                return 0
            });
            console.log(orderedAttack)
            return{
                ...state,
                filteredPokemons: orderedAttack
            }

        case SORTNAME:
            let orderedName = action.payload === AZ? state.filteredPokemons.sort(function(a, b){
                if (a.name.toLowerCase()>b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase()<b.name.toLowerCase()) return -1;
                return 0
            }) : state.filteredPokemons.sort(function(a, b){
                if (a.name.toLowerCase()>b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase()<b.name.toLowerCase()) return 1;
                return 0
            })
            return{
                ...state,
                filteredPokemons: orderedName
            }

        case SEARCHNAME:
            let pokefound = action.payload
            return{
                ...state,
                filteredPokemons:[pokefound]
            }

        case FILTERORIGIN:
            let filteredOrigin = []
            if(action.payload === API){
                filteredOrigin = state.pokemons.filter(el => el.id.toString().length<5)
            }
            if (action.payload === DB) {
                filteredOrigin = state.pokemons.filter(el=> el.id.length>5)
            } 
            if(action.payload === ALL) {
                filteredOrigin = state.pokemons
            }
            return{
                ...state,
                filteredPokemons: filteredOrigin
            }

        case FILTERTYPES://action.data= filterorigin(api o data)
            let filteredTypes = []//ACTION.DATA=DB/API/ALL   ACTION.PAYLOAD: ALGUN TIPO O ALLTYPES
                //if(action.payload === ALLTYPES) { filteredTypes = state.pokemons}
                if(action.data === API ){
                filteredTypes= action.payload === ALLTYPES? state.pokemons.filter(el=>el.id.toString().length <5): state.pokemons.filter(el=>el.types.includes(action.payload) && el.id.toString().length <5)
            }   else if(action.data === DB){
                filteredTypes= action.payload === ALLTYPES? state.pokemons.filter(el=>el.id.toString().length >5):state.pokemons.filter(el=>el.types.includes(action.payload)&& el.id.toString().length >5)}
                else if(action.data === ALL || action.data === undefined){filteredTypes= action.payload === ALLTYPES? state.pokemons :state.pokemons.filter(el=>el.types.includes(action.payload)) }
            return{
                ...state,
                filteredPokemons: filteredTypes
            }

        case POST_POKEMON:
            return{...state}

        default:
            return state
    }
}