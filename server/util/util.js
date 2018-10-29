const fs = require('fs')
const path = require('path')
const logger = require(`${__base}/util/log`).logger(__filename)

const requireFolder = function(dirname, cb) {
  try {
    for(const file of fs.readdirSync(dirname)) {
      if(file.indexOf('.js') == -1) continue
      if(file.indexOf('index.js') != -1) continue

      const filename = path.basename(file, '.js')
      if(cb)
        cb(`${dirname}/${filename}`, filename)
      else
        require(`${dirname}/${filename}`)
    }
  } catch(err) {
    logger.error(err)
  }
}

const saveParseBoolean = function(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : 
    ((value === true || value === '1') ? true : false)
}

module.exports = {
  requireFolder,
  saveParseBoolean
}
