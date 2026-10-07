
//=====allrequire=================== 

const express = require('express')
const app = express()
const cors = require('cors')
const dbConnection = require('./dbConnection')
const route= require('./routes/routes')
const port = 8000


// ======all middleweare======
app.use(express.json())
app.use(cors())
app.use(route)

// =====db connection ======================
dbConnection()
// -------server connect====
app.listen(port, ()=>{
    console.log(`this server is running at ${port}`);
    
})