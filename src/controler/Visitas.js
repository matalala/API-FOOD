const {Visitas}= require('../db.js') 

async function Visitasf(ip){
    
    ip=ip.toString()
    let IP= await Visitas.findAll({
        where: {
            ip: ip
          }
    })
    //console.log(IP[0])
    if(!IP.length){
        await   Visitas.create({
            ip: ip,
            cantidad:1
        })
        console.log(IP)
    }else{
     await Visitas.update({ cantidad:IP[0].dataValues.cantidad+1}, {
            where: {
                ip: ip
            }
          });
        console.log(IP)
    }
    
}

module.exports=Visitasf