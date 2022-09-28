const { Router } = require('express');
const axios = require('axios');
const { Pokemon, Type } = require ('../db');
const router = Router();
const { postPokemonMiddleware, getPokemonsMiddleware, getDetailMiddleware } = require('../middlewares/pokemons')

router.get('/pokemons/:id', getDetailMiddleware)

router.get('/pokemons', (req, res, next)=>{//pokemons?name="..." pal searchbar
    
})

router.get('/', getPokemonsMiddleware)


router.get('/types', async (req, res, next)=>{
    try{
        let response = await axios.get('https://pokeapi.co/api/v2/type')
        let names = response.data.results
        let nombres = []
        await names.forEach(e=>nombres.push({name:e.name}))
        await Type.bulkCreate(nombres)
        let typesFound = await Type.findAll()
        res.send(typesFound)
    }catch(error){
        next(error)
    }
    
})

router.post('/', postPokemonMiddleware)

module.exports = router;