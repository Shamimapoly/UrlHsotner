const generateCode = require("../helpers/rendomGenaretors")
const urlModels = require("../models/urlModels")



const getUrl =async (req,res)=>{
   const {longUrl}=req.body

let randomeCode =generateCode()


const existUrl= await urlModels.findOneAndUpdate({longUrl},{$set:{randomeCode}})

if(existUrl) return res.send({yourUrl:longUrl,Shorturl:`http://localhost:8000/url/${randomeCode}`})

const saveUrl = new urlModels({
    longUrl,randomeCode
})
saveUrl.save()


   res.send({yourUrl:longUrl,Shorturl:`http://localhost:8000/url/${randomeCode}`})
}


module.exports= getUrl