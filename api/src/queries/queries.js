const {getDbPokemons, getDetailDB} = require('./queriesDB')
const {getAPIPokemons, getApiDetail} = require('./queriesAPI')

async function getAllPokemons(){
    try{
        let pokemonDb = await getDbPokemons();
        let pokemonAPI = await getAPIPokemons();
        let allPokemons = [...pokemonAPI, ...pokemonDb]
        if(allPokemons.length){
            return allPokemons
        } else {
            alert('Sorry, something went wrong, please try again.')
        }
    } catch(error){
        console.log(error)
    }
}

async function getDetailPokemon(id){
    if(id.length<6) {//api
        let detailPokemon = getApiDetail(id)
        return detailPokemon
    } else {//DB
        let detailPokemon = getDetailDB(id)
        return detailPokemon
    }
}


module.exports = {getAllPokemons, getDetailPokemon}