class ResObj {
  constructor(code, data, errId) {
    this.code = code || 0
    this.data = data || {}
    this.errId = errId || ''
  }

  putData(key, value) { 
    this.data[key] = value
    return this
  }
}

module.exports = ResObj
