const path = require('path')
global.__base = __dirname;
global.__root = path.resolve(`${__base}/..`);

const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')
const requestIP = require('request-ip')
require('express-async-errors')

require(`${__base}/override`)
const videoSource = require(`${__root}/resources/jsons/videosource.json`)
const logger = require(`${__base}/util/log`).logger(__filename)
const locale = require(`${__base}/middlewares/locale`)
const errorHandle = require(`${__base}/middlewares/errorHandle`)
const view = require('./routes/view')
const apiV1 = require(`${__base}/routes/api/v1`)

const port = process.env.PORT || 3000
const app = next({ 
  dev: process.env.NODE_ENV !== 'production'
})

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json({limit: '2mb'}))
  server.use(bodyParser.urlencoded({ limit: '2mb', extended: false }))
  server.use(requestIP.mw()) // Get client ip
  server.use(locale) // Locale middleware
  server.use('/video', express.static(videoSource.diskPath));
  server.use('/api/v1', apiV1)
  server.use(errorHandle)

  server.use(view.getRequestHandler(app)) // react page
  
  server.listen(port, (err) => {
    if (err) throw err
    logger.info(`Server is running on port: ${port}, env: ${process.env.NODE_ENV}`)
  })
})
.catch((ex) => {
  logger.error(ex)
})
