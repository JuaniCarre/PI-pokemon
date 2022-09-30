const { Router } = require('express');
const router = Router();
const { getAllTypesDb, postPokemonMiddleware, getPokemonsMiddleware, getDetailMiddleware, getByNameMiddleware } = require('../middlewares/pokemons')

router.get('/pokemons/:id', getDetailMiddleware)

router.get('/pokemons/', getByNameMiddleware)

router.get('/', getPokemonsMiddleware)

router.get('/types', getAllTypesDb)

router.post('/', postPokemonMiddleware)

module.exports = router;