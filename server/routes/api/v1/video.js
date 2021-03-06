const router = require('express').Router()
const querystring = require('querystring')
const fs = require('fs')
const path = require('path')

const videoSource = require(`${__root}/resources/jsons/videosource.json`)
const ResObj = require(`${__base}/util/ResObj`)
const { ErrorCode, createError } = require(`${__base}/util/error`)
const logger = require(`${__base}/util/log`).logger(__filename)

const videoPath = path.join(videoSource.diskPath, 'drama')

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

router.get('/drama', async (req, res, next) => {
  let dramas = []
  for(const file of fs.readdirSync(videoPath)) {
    const dramaPath = path.join(videoPath, file)
    if(!fs.lstatSync(dramaPath).isDirectory())
      continue

    dramas.push({
      id: file,
      title: file,
      thumb: `${videoSource.networkPath}/drama/${file}/thumb.jpg`,
      count: fs.readdirSync(dramaPath).length - 1
    })
  }

  res.json(new ResObj().putData('dramas', dramas))
})

router.get('/drama/:id/:episode', async (req, res, next) => {
  const { id, episode } = req.params
  const dramaPath = path.join(videoPath, id)
  try {
    if(!fs.lstatSync(dramaPath).isDirectory())
      throw createError(ErrorCode.NotFound)
  } catch (err) {
    throw createError(ErrorCode.NotFound)
  }
  
  res.json(new ResObj()
    .putData('count', fs.readdirSync(dramaPath).length - 1)
    .putData('url', `${videoSource.networkPath}/drama/${id}/${pad(episode, 2)}.mp4`))
})

module.exports = router
