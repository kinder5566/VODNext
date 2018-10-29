import { call, put, all, takeLatest } from 'redux-saga/effects'


import { LOAD_DRAMAS, LOAD_DRAMA } from './constants'
import { dramasLoaded, dramasLoadingError, dramaLoaded, dramaLoadingError } from './actions'
import { get } from '../../util/request'



function* getDramas() {
  const path = `${window.location.protocol}//${window.location.host}/api/v1/video/drama`
  
  try {
    const data = yield call(get, path)
    yield put(dramasLoaded(data.dramas))
  } catch (err) {
    yield put(dramasLoadingError(err))
  }
}

function* getDrama(param) {
  const { id, episode } = param
  const path = `${window.location.protocol}//${window.location.host}/api/v1/video/drama/${id}/${episode}`
  
  try {
    const data = yield call(get, path)
    yield put(dramaLoaded(data.url, data.count))
  } catch (err) {
    yield put(dramaLoadingError(err))
  }
}

export default function* () {
  yield all([
    takeLatest(LOAD_DRAMAS, getDramas),
    takeLatest(LOAD_DRAMA, getDrama)
  ])
}
