const  postrecepies= require('../controler/PostRecipes.js')


async function PostRecipes(req,res){
    const respuesta= await postrecepies(req.body)
    if(respuesta.err){
        res.status(400).json({err:'no se pudo crear el usuario'})
    }else if(respuesta.msj){
        res.status(201).json(respuesta)
    }else{
        res.status(500).json({error:'algo salio demasiado mal'})
    }
}

module.exports=PostRecipes