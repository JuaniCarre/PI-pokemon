const {getDbPokemons, getDetailDB, searchByNameDB} = require('./queriesDB')
const {getAPIPokemons, getApiDetail, getAllTypes} = require('./queriesAPI')

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

    try{
        if(id.length<6) {//api
            let detailPokemon = getApiDetail(id)
            return detailPokemon
        } else {//DB
            let detailPokemon = getDetailDB(id)
            return detailPokemon
        }
    }
    catch(error){
        console.log(error)
    }
}

async function getByName(name){
    try{
        let db = await searchByNameDB(name) //anda
        let api = await getApiDetail(name)  //anda
        let response = db || api
        return (response || "Pokemon not found")
    }
    catch(error){
        console.log(error)
    }
}

async function getTypes(){
    try{
    let response = await getAllTypes()
    return response
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {getAllPokemons, getDetailPokemon, getByName, getTypes}/*orderByHP*/