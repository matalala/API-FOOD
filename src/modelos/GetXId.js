const getxid=require('../controler/GetXId.js')

async function GetXId(req, res){
    const {id}=req.params
    let respuesta= await getxid(id)
    console.log(respuesta)
    if(respuesta){
        res.status(200).json(respuesta)
    }else{
        res.status(404).json({err:'recipe not found'})
    }
}
module.exports= GetXId