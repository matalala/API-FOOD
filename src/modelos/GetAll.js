const getAll =require('../controler/GetAll.js')

async function GetAll(req,res){
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