const jwt = require('jsonwebtoken')
const querystring = require('querystring')

const { createError, ErrorCode } = require(`${__base}/util/error`)
const key = 'iqiyi'

module.exports = async (req, res, next) => {
  const rawToken = req.body.token || req.query.token
   || req.headers['x-access-token']

  next()
  // if(!rawToken) 
  //   throw createError(ErrorCode.NoToken)
  // try {
  //   const decoded = await jwt.verify(rawToken, key)
  //   req.uid = decoded.uid
  //   req.lid = decoded.lid
  //   next()
  // }
  // catch(err) {
  //   if(err.name == 'TokenExpiredError')
  //     throw createError(ErrorCode.TokenExpired)
  //   else 
  //     throw createError(ErrorCode.TokenError)
  // }
}
