const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonsRoutes = require("./PokemonsRoutes");
const typesRoutes = require("./TypesRoutes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemonsRoutes);
router.use("/types", typesRoutes);

module.exports = router;
