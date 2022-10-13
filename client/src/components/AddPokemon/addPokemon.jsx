import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTypes, postPokemon } from '../../store/actions';
import validation from './validation';
import './addPokemon.css'


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

let clearTypes = ()=> {
    setPokeCreation((prevState) => {
        let newState={
            ...prevState,
            types:[]
        }
        setError(validation(newState));
        return newState
    })
}

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



return(
<div className='formContainer'>
    <div className='formbox'>
        <h2 className='Create'>Create your pokemon!</h2>
        <form onSubmit={onSubmit} id="form" className="form">
            <div className='namecontainer'>
                <label htmlFor="">Name:</label>
                <input className='inputName' onChange={handleChange} name="name" type="text" value={pokeCreation.name} autoComplete="off" autoFocus={true}/>
                <p className='error'>{error.name? `${error.name}` : ''}</p>
            </div>
            <div className='characteristicsGrid'>
            <div className='inputcontainer'>
                <label htmlFor="">Hp:</label>
                <input onChange={handleChange} name="hp" type="text" value={pokeCreation.hp} autoComplete="off"/>
                <p className='error'>{error.hp? `${error.hp}` : ''}</p>
            </div>


            <div className='inputcontainer'>
                <label htmlFor="">Attack:</label>
                <input onChange={handleChange} name="attack" type="text" value={pokeCreation.attack} autoComplete="off"/>
                <p className='error'>{error.attack? `${error.attack}` : ''}</p>
            </div>

            <div className='inputcontainer'>
                <label htmlFor="">Defense:</label>
                <input onChange={handleChange} name="defense" type="text" value={pokeCreation.defense} autoComplete="off"/>
                <p className='error'>{error.defense? `${error.defense}` : ''}</p>
            </div>


            <div className='inputcontainer'>
                <label htmlFor="">Speed:</label>
                <input onChange={handleChange} name="speed" type="text" value={pokeCreation.speed} autoComplete="off"/>
                <p className='error'>{error.speed? `${error.speed}` : ''}</p>
            </div>

            <div className='inputcontainer'>
                <label htmlFor="">Height:</label>
                <input onChange={handleChange} name="height" type="text" value={pokeCreation.height} autoComplete="off"/>
                <p className='error'>{error.height? `${error.height}` : ''}</p>
            </div>

            <div className='inputcontainer'>
                <label htmlFor="">Weight:</label>
                <input onChange={handleChange} name="weight" type="text" value={pokeCreation.weight} autoComplete="off"/>
                <p className='error'>{error.weight? `${error.weight}` : ''}</p>
            </div>


            <div className='inputcontainer'>
                <label htmlFor=''>Image:</label>
                <input onChange={handleChange} name="image" type="text" value={pokeCreation.image}/>
                <p className='error'>{error.image? `${error.image}` : ''}</p>
            </div>


            <div className='inputcontainer'>
                <label htmlFor="">Select types:</label>
                <select
                            onChange={handleTypesChange}
                            name="types"
                            value={pokeCreation.types}
                            className="formInput"
                            >
                            <option >Select</option>
                            {tipos?.map((e)=><option key={e.id}>
                                {e.name}
                            </option>)}
                        </select>
                <p className='error'>{error.types? <p className='error'>`{error.types}`</p> : <h4 className='Types'>{pokeCreation.types.toString().replace(/,/g, ", ")}</h4>}</p>
            </div>
            </div>


            <div className='inputbutton'>
                <input type="button" value="Clear types" onClick={clearTypes}/>
                <input type="submit" value="Create!"/>
            </div>

        </form>
    </div>
</div>)}