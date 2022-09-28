const {Pokemon, Type} = require('../db')

async function getDbPokemons(){
    try{
        let pokemons = await Pokemon.findAll({include: Type})
        let response = []

        pokemons.forEach(e=> {poke={
            name: e.name,
            id:e.id,
            image: e.image,
            hp: e.hp,
            attack: e.attack,
            defense: e.defense,
            speed:e.speed,
            height: e.height,
            weight: e.weight,
            types: e.types.map(e=>e.name)
        }
        response.push(poke)})

        return response
    }
    catch(error){
        console.log(error);
    }
}

async function getDetailDB(id){
    let request = await Pokemon.findByPk(id.toString(), {include: Type, attributes:{exclude:["createdAt", "updatedAt"]}})
    let pokeFound = request.dataValues
    let filteredTypes = pokeFound.types.map(e=>e.dataValues.name)


    let wholePoke = {
        name: pokeFound.name,
        id: pokeFound.id,
        image: pokeFound.image,
        hp: pokeFound.hp,
        attack: pokeFound.attack,
        defense: pokeFound.defense,
        speed:pokeFound.speed,
        height: pokeFound.height,
        weight: pokeFound.weight,
        types: filteredTypes
    }

    return(wholePoke)
}



module.exports = {getDbPokemons, getDetailDB}

// {
//     name: pokemons.name,
//     image: pokemons.image,
//     hp: pokemons.hp,
//     attack: pokemons.attack,
//     defense: pokemons.defense,
//     speed:pokemons.speed,
//     height: pokemons.height,
//     weight: pokemons.weight,
//     types: types
// }