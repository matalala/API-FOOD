const {Diet} =require('../db.js')
const {GetDiets} = require('./Cache.js')

async function getdiets(){
    const dietas =  await Diet.findAll({
        attributes: ['name']
    })
    if(!dietas.length){
        let diet=  GetDiets()
        diet=diet.map(p=>{return {name:p}})
        Diet.bulkCreate(diet)
        return diet
    }
    return dietas    
}
module.exports=getdiets