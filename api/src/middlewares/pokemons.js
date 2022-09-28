const { Pokemon, Type } = require('../db');
const { getAllPokemons, getDetailPokemon } = require('../queries/queries')

const postPokemonMiddleware = async (req, res, next) => {
    const { name, id, image, hp, attack, defense, speed, height, weight, types } = req.body; 
    try {
        const newPokemon = await Pokemon.create({
            name,
            id,
            image,
            hp,
            attack,
            defense, 
            speed,
            height,
            weight
        })
        
        
        for (let i = 0; i < types.length; i++){
            typesFound = await Type.findAll({where: {name: types[i]}})
            await newPokemon.addTypes(typesFound)
        }

        res.status(200).send("Pokemon created succesfully!")
    } 

    catch(error){
        next(error)}
}

const getPokemonsMiddleware = async (req, res, next) => {
    try{
        let allPokemons = await getAllPokemons()
        res.send(allPokemons)
    }
    catch(error) {
        next(error)
    }
}

const getDetailMiddleware = async (req, res, next) => {
    const {id} = req.params
    try{
        let detailpokemon = await getDetailPokemon(id)
        res.send(detailpokemon)
    }
    catch(error){
        next(error)
    }
}


module.exports = {postPokemonMiddleware, getPokemonsMiddleware, getDetailMiddleware}