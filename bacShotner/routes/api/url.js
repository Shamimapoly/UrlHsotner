const getUrl = require("../../controllers/getUrl")

const express = require('express')
const runUrl = require("../../controllers/runUrl")
const urlRoute = express.Router()


urlRoute.post('/getLongUrl', getUrl)
urlRoute.get('/:urlId', runUrl)


module.exports = urlRoute 