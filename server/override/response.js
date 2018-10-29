const http = require('http')

const ResObj = require(`${__base}/util/ResObj`)
const logger = require(`${__base}/util/log`).logger(__filename)

http.ServerResponse.prototype.sendSuccess = function(resObj) {
  logger.info({
    url: this.req.originalUrl,
    param: this.req.body,
    data: resObj
  })
  this.json(resObj)
}

http.ServerResponse.prototype.sendError = function(err) {
  logger.error({
    url: this.req.originalUrl,
    param: this.req.body,
    errId: err.errId,
    err: err
  })
  this.json(new ResObj(err.code || 201, null, err.errId))
}
