const uuid = require('uuid/v4');

const logger = require(`${__base}/util/log`).logger(__filename)
const { MyError, createError, ErrorCode } = require(`${__base}/util/error`)

module.exports = (err, req, res, next) => {
  if(err instanceof MyError)
    res.sendError(err)
  else {
    err.errId = uuid()
    logger.error('unexpected', err)
    res.sendError(createError(ErrorCode.Unexpected))
  }
}
