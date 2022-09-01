const {Recipe,Diet} = require('../db.js')
const {GetDB}= require('./Cache.js')
async function Getdb(){

    try {
        let DB= GetDB()
        if(!DB.length){
            DB= await Recipe.findAll({
                include:{
                    model:Diet,
                    attributes:['name'],
                    through:{
                        attributes:[]
                    }
                }
            })
            
        }
        
       
        if(DB[0].dataValues){
            DB=DB?.map(p=>{
                return{
                    ...p.dataValues
                }
            })
            DB=DB?.map(p=>{
                let pasos=p.pasos.split(',_')
                pasos=pasos.map(p=>{
                    obj=p.split(':_')
                    return{
                        item:obj[0],
                        text:obj[1]
                    }
                })
                pasos=[pasos]
                let dietas=p.diets.map(p=>{
                    return p.name
                })
                return{
                    id:p.id,
                    name:p.name,
                    resumen:p.resumen,
                    nivel:p.nivel,
                    img:p.img,
                    pasos,
                    dietas
                }
            })
        }
        console.log(DB)
        return DB
    } catch (error) {
        console.log(error)
    }
}
module.exports=Getdb