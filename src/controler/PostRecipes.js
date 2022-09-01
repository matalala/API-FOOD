const {Diet,Recipe} =require('../db.js')

async function postrecepies({name,resumen,nivel,dietas,pasos,img}){
    if(!name||!resumen||!nivel||!dietas||!pasos||!img){
        return {err:'hay campos incompletos'}
    }else{
        pasos=pasos[0].map(p=>{
            return `${p.item}:_${p.text}`
        })
        pasos=pasos.join(',_')
        
        let create={
            name,
            resumen,
            nivel,
            img,
            pasos:pasos
        }
        let createReceta= await Recipe.create({...create})
        
        let diet= await Diet.findAll({
            where:{name:dietas}
        })
        createReceta.addDiet(diet)
        return{msj:'recipe create'}
    }

}
module.exports=postrecepies