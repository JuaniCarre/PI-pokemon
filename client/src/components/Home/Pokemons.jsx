import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Pokemon from './Pokemon';
import { fetchPokemons } from '../../store/actions';

export default function Pokemons(){
    let pokemons = useSelector((state) => state.filteredPokemons)
    let dispatch = useDispatch()

    useEffect(()=>
    dispatch(fetchPokemons()), [dispatch])

    return <div className='PokemonsContainer'>
        {pokemons.map(pokemon => {
            return <Pokemon name={pokemon.name} image={pokemon.image} types={pokemon.types} attack={pokemon.attack} id={pokemon.id}></Pokemon>
        })}
    </div>
}