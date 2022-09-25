const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getApi}=require('../modelos/GetApi')
const GetDB=require('../modelos/GetDB.js')
const GetAll =require('../modelos/GetAll.js')
const Getdiets =require('../modelos/GetDiets.js')
const GetXId =require('../modelos/GetXId.js')
const PostRecipes =require('../modelos/PostResipes.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes',GetAll)
router.get('/recipes/:id',GetXId)
router.get('/api',getApi)
router.get('/BD',GetDB)
router.get('/diets',Getdiets)
router.post('/recipes',PostRecipes)
router.get('/visitas',async (req,res)=>{
    const {Visitas}=require('../db.js')
    let IP= await Visitas.findAll({})
    res.json(IP)
})

module.exports = router;
