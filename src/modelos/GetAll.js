const getAll =require('../controler/GetAll.js');
const Visitasf = require('../controler/Visitas.js');

async function GetAll(req,res){
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    Visitasf(ip)
    const todo=await getAll()
    const {name}=req.query
    if(name){
        let respuesta =todo.filter(f=>f.name.toLowerCase().includes(name.toLowerCase()))
        if(respuesta){
            res.status(200).json(respuesta)
        }else{
            res.status(404).json({err:'The recipes with these characteristics were not found'})
        }
    }else{
        res.status(200).json(todo)
    }

}
module.exports=GetAll