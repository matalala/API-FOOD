const {GetApi} =require('./GetApi.js')
const GetDB =require('./GetDB.js')

async function getAll(){
    let api=await GetApi()
    let db=await GetDB()
    if(db){
         todo=[...api,...db]
    }else{
        todo=[...api]
    }
    return todo
}
module.exports=getAll