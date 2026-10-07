
const urlModels = require("../models/urlModels")
const runUrl =async (req,res)=>{


    const randomeCode =(req.params.urlId)
   const existUrl =await urlModels.findOne({randomeCode})
   if(!existUrl) return res.status(404).send('short url not found')
   res.status(200).redirect(existUrl.longUrl)
  
}


module.exports= runUrl