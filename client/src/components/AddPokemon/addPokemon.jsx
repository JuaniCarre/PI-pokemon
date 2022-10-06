import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTypes, postPokemon } from '../../store/actions';
import validation from './validation';

export default function AddPokemon(){

    const [pokeCreation, setPokeCreation] = useState({
    name: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: []
})



const [error, setError] = useState({name:"Name is required"});
let dispatch = useDispatch()



useEffect(()=>{dispatch(fetchTypes())}, [dispatch])
let tipos = useSelector((state)=> state.types)



let handleChange = (e) => {
    setPokeCreation((prevState) => {
        let newState = {
            ...prevState,
            [e.target.name]: e.target.value
        };
        setError(validation(newState));
        return newState
    })
}

let handleTypesChange = (e) => {
    if(pokeCreation.types.length < 2){
        setPokeCreation(prevState => {
            let newState = {
                ...prevState,
                types: [...prevState.types, e.target.value]
            };
    
            setError(validation(newState))
            return newState
        })
    } else {alert("You can't add more than two types for your pokemon.")}
}

const onSubmit=(e)=>{
    e.preventDefault()
    if(error.name || error.hp|| error.attack||error.image||error.defense||error.height||error.weight||error.speed||error.types){//hay algo mal
        alert('Please check the form, all the fields must be filled.')
    } else {
        dispatch(postPokemon(pokeCreation))
        alert('Pokemon created succesfully, you can se him at My Pokemons section!')
    }
}

// const onSubmit=(e)=>{
//     if(error.name || error.hp|| error.attack||error.image||error.defense||error.height||error.weight||error.speed||error.types[0]){
//         console.log("entre al primero")
//         e.preventDefault()
//         alert("All fields must be completed.")
//     } else {
//         e.preventDefault()
//         console.log("entre al segundo")
//         dispatch(postPokemon(pokeCreation))
//         alert('Pokemon created succesfully, you can se him at My Pokemons section!')
//     }
//     e.preventDefault()
//     console.log("me la chupa tu if")
// }


return(<div>
<form onSubmit={onSubmit} id="form" className="form">
<label htmlFor="">Name:</label>
<input onChange={handleChange} name="name" type="text" value={pokeCreation.name} autoComplete="off" autoFocus={true}/>
<p>{error.name? `${error.name}` : ''}</p>

<label htmlFor="">Hp:</label>
<input onChange={handleChange} name="hp" type="text" value={pokeCreation.hp} autoComplete="off"/>
<p>{error.hp? `${error.hp}` : ''}</p>

<label htmlFor="">Attack:</label>
<input onChange={handleChange} name="attack" type="text" value={pokeCreation.attack} autoComplete="off"/>
<p>{error.attack? `${error.attack}` : ''}</p>

<label htmlFor="">Defense:</label>
<input onChange={handleChange} name="defense" type="text" value={pokeCreation.defense} autoComplete="off"/>
<p>{error.defense? `${error.defense}` : ''}</p>

<label htmlFor="">Speed:</label>
<input onChange={handleChange} name="speed" type="text" value={pokeCreation.speed} autoComplete="off"/>
<p>{error.speed? `${error.speed}` : ''}</p>

<label htmlFor="">Height:</label>
<input onChange={handleChange} name="height" type="text" value={pokeCreation.height} autoComplete="off"/>
<p>{error.height? `${error.height}` : ''}</p>

<label htmlFor="">Weight:</label>
<input onChange={handleChange} name="weight" type="text" value={pokeCreation.weight} autoComplete="off"/>
<p>{error.weight? `${error.weight}` : ''}</p>

<label htmlFor=''>Image:</label>
<input onChange={handleChange} name="image" type="text" value={pokeCreation.image}/>
<p>{error.image? `${error.image}` : ''}</p>

<label htmlFor="">Select types:</label>
<select
            onChange={handleTypesChange}
            name="types"
            value={pokeCreation.types}
            className="formInput">
            <option multiple={true}>Select</option>
            {tipos?.map((e)=><option key={e.id}>
                {e.name}
            </option>)}
        </select>
<p>{error.types? <p>`{error.types}`</p> : <p>{pokeCreation.types.toString().replace(/,/g, ", ")}</p>}</p>


<input type="submit" value="Create!"/>

</form>
</div>)}

{/* <select ANDABA 
            onChange={(e)=>setPokeCreation({...pokeCreation, types:[...pokeCreation.types, e.target.value]})}
            name="types"
            value={pokeCreation.types}
            className="formInput">
            <option multiple={true}>Select</option>
            {tipos?.map((e)=><option key={e.id}>
                {e.name}
            </option>)}
        </select> */}