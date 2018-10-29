const defaultLocale = 'zh-tw'

module.exports = (req, res, next) => {
  try {
     const locale = req.body.locale || req.query.locale || req.headers['accept-language']
    if(!locale)
      req.body.locale = defaultLocale
    else 
      req.body.locale = locale.split(',')[0].replace(/(_|-)(.*(_|-))*/g, '-').toLowerCase()
  }
  catch(err) {
    req.body.locale = defaultLocale
  }
  next()
}
