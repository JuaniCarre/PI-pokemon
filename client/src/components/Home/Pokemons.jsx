import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Pokemon from './Pokemon';
import Page from './pagination'
import { fetchPokemons, fetchTypes, filterOrigin, filtertypes, sortAttack, sortName, searchPokemonByName } from '../../store/actions';
import { ASC, DESC, AZ, ZA, DB, API, ALL, ALLTYPES } from "../../constantes/constantes"
import './Pokemons.css'

export default function Pokemons(){
    let pokemons = useSelector((state) => state.filteredPokemons)
    let dispatch = useDispatch()
    let tipos = useSelector(state=>state.types)
    const [state, setState]= useState()
    const [origin, setOrigin] = useState()
    const [search, setSearch]= useState('')
    const cards= 12
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = currentPage * cards
    const firstShown = cardsPerPage - cards
    const allShown = pokemons.slice(firstShown, cardsPerPage)
    useEffect(()=> dispatch(fetchTypes()), [dispatch])
    useEffect(()=> dispatch(fetchPokemons()), [dispatch])

    function pagination(pageNumber){
        setCurrentPage(pageNumber)
    }


    function onSelectChange(e){
        e.preventDefault()
        if(e.target.value === ASC || e.target.value === DESC){
            dispatch(sortAttack(e.target.value))
        }
        if(e.target.value === AZ || e.target.value === ZA){
            dispatch(sortName(e.target.value))
        }
        if(e.target.value === DB || e.target.value === API){
            setOrigin(e.target.value)
            dispatch(filterOrigin(e.target.value))
        }
        if(tipos.some(p=> p.name === e.target.value)||e.target.value === ALLTYPES){
            dispatch(filtertypes(e.target.value, origin))
            console.log(filtertypes(e.target.value, origin))
        }
        setCurrentPage(1)
        setState(e.target.value)
    }

    function onSearch(e){
        e.preventDefault()
        setCurrentPage(1)
        dispatch(searchPokemonByName(search))
    }

    function onSearchChange(e){
        e.preventDefault()
        setSearch(e.target.value.toLowerCase().trim())
    }


    return (
<div className='Container'>
    <div className='controlPanel'>
        <div className='SearchName'>
            <p className='textos'>Search by name</p>
            <div className='searchBar'> {/*busqueda*/} 
            <form onSubmit={onSearch}>
                <input className="searchbox" type="search" onChange={onSearchChange}/>
                <input type="submit" />
            </form>
            </div>
        </div>

        <div className='filtersBar'>
        <p className='textos'>Filters</p>
        <div className='filters'>{/*filtros y ordenamientos.*/}
            <div>
                <label for="types">Type:</label>
                <select id="types"onChange={onSelectChange}>
                    <option value = {ALLTYPES}>All</option>
                    {tipos?.map((e)=><option value={e.name} key={e.id}>
                        {e.name}
                    </option>)}
                </select>
            </div>
            <div>
                <label for="source">Source:</label>
                <select id="source" onChange={onSelectChange}>
                    <option value={ALL}>All</option>
                    <option value={DB}>My pokemons</option>
                    <option value={API}>Existing pokemons.</option>
                </select>
            </div>
            <div>
                <label for="order">Order:</label>
                <select id="order"className="OrderSelect" onChange={onSelectChange}>
                    <option disabled selected>Default</option>
                    <option value ={AZ}>A-Z</option>
                    <option value ={ZA}>Z-A</option>
                    <option value ={ASC}>Attack ᐱ</option>
                    <option value ={DESC}>Attack ᐯ</option>
                </select>
            </div>
        </div>
        </div>
    </div>
    <Page cards={cards} pokemons={pokemons.length} pagination={pagination} currentpage={currentPage} />
    <div className='cardsContainer'>
        {(((pokemons.length>0 && pokemons[0]!== 'Pokemon not found')||pokemons[0]!==[[]])? allShown.map(pokemon => <Pokemon name={pokemon.name} image={pokemon.image} types={pokemon.types} attack={pokemon.attack} id={pokemon.id} key={pokemon.id}></Pokemon>
        ): pokemons[0]!== "Pokemon not found" ? <p>cargando pokemons</p> : <p>Pokemon not found</p>)}
    </div>
    <Page cards={cards} pokemons={pokemons.length} pagination={pagination} currentpage={currentPage}/>
</div>
)}