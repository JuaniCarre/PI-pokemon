const {Pokemon, Type} = require('../db');
const axios = require('axios');

async function getAPIPokemons(){
    try{
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
        let urls = await response.data.results.map((e)=> e.url)//URL de los pokemons.
        let pokePromise = await urls.map(e=> axios.get(e))//promise de los pokemons
        let pokemons = []
        await Promise.all(pokePromise)
        .then((poke)=> poke.forEach((e) => {
            let tipos = []
            e.data.types.forEach((e)=> tipos.push(e.type.name))
            pokemons.push({
                name:e.data.name,
                id:e.data.id,
                image:e.data.sprites.other.home.front_default,
                hp:e.data.stats[0].base_stat,
                attack:e.data.stats[1].base_stat,
                defense:e.data.stats[2].base_stat,
                speed:e.data.stats[5].base_stat,
                height:e.data.height,
                weight:e.data.weight,
                types: tipos
            })
        }))
        return(pokemons)
    }
    catch(error){
        console.log(error)
    }
}

async function getApiDetail(id){
    try{
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + id)
        let tipos = response.data.types.map(e=>e.type.name)
        let foundPokemon = {
                name:response.data.name,
                id:response.data.id,
                image:response.data.sprites.other.home.front_default,
                hp:response.data.stats[0].base_stat,
                attack:response.data.stats[1].base_stat,
                defense:response.data.stats[2].base_stat,
                speed:response.data.stats[5].base_stat,
                height:response.data.height,
                weight:response.data.weight,
                types: tipos
        }
        return foundPokemon
    }
    catch(error){
        console.log(error)
    }
}



module.exports = {getAPIPokemons, getApiDetail}