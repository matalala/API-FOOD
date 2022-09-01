const axios = require('axios')
const {GetAPI,PostAPI,  PostDIETS} =require('./Cache.js')
const {
    API_KEY
  } = process.env;

async function  GetApi(){
    let recetas =  GetAPI()
        if(!recetas.length){
        let diets=[]
        const recipes= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=60f750d1b56640798a9c8146b884989f&number=100&addRecipeInformation=true`)
        const recipe=await recipes.data.results.map(p=>{
           
            let dietas=[]
            if(p.vegetarian) dietas.push('vegetarian')
            dietas=[...dietas,...p.diets]
            dietas.forEach(e => {
                if(!diets.includes(e)){
                    diets.push(e)
                }
            });
            let obj={
                id:p.id,
                name:p.title,
                resumen:p.summary,
                nivel:p.healthScore,
                plato:p.dishTypes,
                dietas,
                pasos:p.analyzedInstructions?.map(p=>
                   { 
                    return p.steps?.map(p=>{
                        return{
                            item:p.number,
                            text:p.step
                        }
                    })
                    
                   }),
                img:p.image
            }
            return obj
        })
        PostAPI(recipe)
        PostDIETS(diets)
        recetas=[...recipe]
    }
    return recetas;

}
module.exports={
    GetApi
}