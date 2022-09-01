let _Api=[]
let _DB=[]
let _DIETS=[]

 function GetAPI(){
    return _Api;
}

 function GetDB(){
    return _DB;
}

 function GetDiets(){
    return _DIETS
}

 function PostAPI(API){
     _Api=[...API]
}

 function PostDB(DB){
    _DB=[...DB]
}
function PostDIETS(DIETS){
    console.log(DIETS)
    _DIETS=[...DIETS]
}
module.exports={
    GetAPI,
    GetDB,
    GetDiets,
    PostAPI,
    PostDB,
    PostDIETS,
}