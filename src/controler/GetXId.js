const GetAll =require('./GetAll.js')

async function getxid(id){
    let receta= await GetAll()
    
    let respuesta=receta.filter(f=>f.id==id)
    
    return respuesta
}
module.exports=getxid