import axios from 'axios'

const processData = function(response) {
  if (response.code != 0)
    throw new Error(response.code)
  return response.data
}

const get = function(url) {
  return new Promise(function (fulfill, reject) {
    axios({
      method:'get',
      url: url
    })
    .then(rawData => {
      fulfill(processData(rawData.data))
    })
    .catch(err => {
      reject(err)
    })
  })
}

const post = function(url, data) {
  return new Promise(function (fulfill, reject) {
    axios({
      method:'post',
      url: url,
      data: data
    })
    .then(rawData => {
      fulfill(processData(rawData.data))
    })
    .catch(err => {
      reject(err)
    })
  })
}

export { get, post }