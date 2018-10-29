const querystring = require('querystring')
const uuid = require('uuid/v4');

const logger = require(`${__base}/util/log`).logger(__filename)

class MyError extends Error {
  constructor (code, msg, errId) {
    super()
    this.code = code
    this.msg = msg || ''
    this.errId = errId || uuid()
    Error.captureStackTrace(this, this.constructor)
  }
}

const createError = function(code, msg, errId) {
  return new MyError(code, msg, errId)
}

const ErrorCode = {
  Success: 0,
  TokenError: 101,
  TokenExpired: 102,
  NoToken: 103,
  Unexpected: 201,
  NotFound: 202,
}

module.exports = {
  MyError,
  ErrorCode,
  createError
}
