const router = require('express').Router()

const accessControl = require(`${__base}/middlewares/accessControl`)
const jwtauth = require(`${__base}/middlewares/jwtauth`)
const util = require(`${__base}/util/util`)

router.use(jwtauth)
if(process.env.NODE_ENV !== 'production')
  router.use(accessControl)

util.requireFolder(__dirname, (modulePath, moduleName) => {
  router.use(`/${moduleName}`, require(modulePath))
})

module.exports = router
