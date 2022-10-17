const { Router } = require('express');
const router = Router();
const apicache = require ('apicache')
const { getAllTypesDb, postPokemonMiddleware, getPokemonsMiddleware, getDetailMiddleware, getByNameMiddleware } = require('../middlewares/pokemons')
const cache = apicache.middleware

router.get('/pokemons/:id', getDetailMiddleware)

router.get('/pokemons/', getByNameMiddleware)

router.get('/', cache('2 minutes'), getPokemonsMiddleware)

router.get('/types', getAllTypesDb)


router.post('/', postPokemonMiddleware)

module.exports = router;