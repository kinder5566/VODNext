import { 
  LOAD_DRAMAS,
  LOAD_DRAMAS_SUCCESS,
  LOAD_DRAMAS_ERROR,
  LOAD_DRAMA,
  LOAD_DRAMA_SUCCESS,
  LOAD_DRAMA_ERROR
} from './constants'

export function loadDramas() {
  return {
    type: LOAD_DRAMAS,
  }
}

export function dramasLoaded(dramas) {
  return {
    type: LOAD_DRAMAS_SUCCESS,
    dramas
  }
}

export function dramasLoadingError(err) {
  return {
    type: LOAD_DRAMAS_ERROR,
    err,
  }
}

export function loadDrama(id, episode) {
  return {
    type: LOAD_DRAMA,
    id,
    episode
  }
}

export function dramaLoaded(url, count) {
  return {
    type: LOAD_DRAMA_SUCCESS,
    url,
    count
  }
}

export function dramaLoadingError(err) {
  return {
    type: LOAD_DRAMA_ERROR,
    err,
  }
}
