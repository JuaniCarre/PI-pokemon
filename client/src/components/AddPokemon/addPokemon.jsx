import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTypes } from '../../store/actions';

export default function AddPokemon(){

    const [pokeCreation, setPokeCreation] = useState({
    name: '',
    image: '',
    hp: '0',
    attack: '0',
    defense: '0',
    speed: '0',
    height: '0',
    weight: '0',
    types: []
})
let dispatch = useDispatch()
useEffect(()=>{dispatch(fetchTypes())}, [])
let tipos = useSelector((state)=> state.types)

let pokemon = {
    name: pokeCreation.name,
    image: pokeCreation.image,
    hp: pokeCreation.hp,
    attack: pokeCreation.attack,
    defense: pokeCreation.defense,
    speed: pokeCreation.speed,
    height: pokeCreation.height,
    weight: pokeCreation.weight,
    types: pokeCreation.types
}

function onSubmit(p){
    p.preventDefalult()
    axios.post('http://localhost:3001/pokemon/', pokemon)
    console.log(pokeCreation)
    alert('Pokemon created succesfully, you can se him at My Pokemons section!')
}

return(<form onSubmit={onSubmit} id="form" className="form">
<label htmlFor="">Name:</label>
<input onChange={(e)=> setPokeCreation.name(e.target.value)} name="name" type="text" value={pokeCreation.name} autoComplete="off" autoFocus={true}/>

<label htmlFor="">Hp:</label>
<input onChange={(e)=> setPokeCreation.hp(e.target.value)} name="hp" type="text" value={pokeCreation.hp} autoComplete="off"/>

<label htmlFor="">Attack:</label>
<input name="attack" type="text" value={pokeCreation.attack} autoComplete="off"/>

<label htmlFor="">Defense:</label>
<input name="defense" type="text" value={pokeCreation.defense} autoComplete="off"/>

<label htmlFor="">Speed:</label>
<input name="speed" type="text" value={pokeCreation.speed} autoComplete="off"/>

<label htmlFor="">Height:</label>
<input name="height" type="text" value={pokeCreation.height} autoComplete="off"/>

<label htmlFor="">Weight:</label>
<input name="weight" type="text" value={pokeCreation.weight} autoComplete="off"/>

<label htmlFor="">Select types:</label>
<select
            onChange={(e)=>e}
            name="types"
            value={pokeCreation.types}
            className="formInput">
            <option>Select</option>
            {tipos?.map((e)=><option key={e.id}>
                {e.name}
            </option>)}
        </select>

</form>)
}