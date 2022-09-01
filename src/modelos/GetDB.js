const Getdb =require('../controler/GetDB.js')


async function GetDB(req,res){
    const DB = await Getdb()
    
    if(DB){
        res.status(200).json(DB)
    }else{
        res.status(404).json({err:'no stored data found'})
    }
}


module.exports=GetDB