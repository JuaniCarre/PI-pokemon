const { Router } = require('express');
const pokeRouter = require ('./pokemon.js')
const router = Router();

router.use('/pokemon', pokeRouter)

module.exports = router;