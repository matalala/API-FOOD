const {GetApi} =require('../controler/GetApi.js')
const {GetAPI} =require('../controler/Cache')


async function getApi(req,res){
    let api=GetAPI()
    if(api.length>0){
        res.status(200).json(api)
    }else{
       let api= await GetApi()
        if(api.length>0){
            res.status(200).json(api)
        }else{
            res.status(400).json({err:'algo salio mal'})
        }
    }

}
module.exports={
    getApi
}