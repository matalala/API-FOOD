const getdiets = require('../controler/GetDiets.js')

async function Getdiets(req,res){
    let dietas= await getdiets()
    if(dietas){
        res.status(200).json(dietas)
    }else{
        res.status(400).json({err:'algo salio mal con las dietas'})
    }
}

module.exports=Getdiets