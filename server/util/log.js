const log4js = require('log4js')
const path = require('path')

let filename = ''
let appenders = []
let prefix = ''
switch(process.env.NODE_ENV) {
  case 'production':
    filename = 'logs/api.log'
    prefix = ''
    appenders = [ 'out', 'app' ]
    break
  case 'development':
    filename = 'logs/api.log'
    prefix = ''
    appenders = [ 'out', 'app' ]
    break
  default:
    filename = 'logs/api.log'
    appenders = [ 'out', 'app' ]
    break
}

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { 
      type: "dateFile",
      filename: filename,
      pattern: ".yyyy-MM-dd"
    }
  },
  categories: {
    default: { 
      appenders: appenders,
      level: 'debug'
    }
  }
})

module.exports = {
  log4js,
  logger: function(name) {
    return log4js.getLogger(path.basename(name))
  }
}
