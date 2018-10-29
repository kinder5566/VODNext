import { fromJS } from 'immutable'

import { 
  LOAD_DRAMAS,
  LOAD_DRAMAS_SUCCESS,
  LOAD_DRAMAS_ERROR,
  LOAD_DRAMA,
  LOAD_DRAMA_SUCCESS,
  LOAD_DRAMA_ERROR
} from './constants'

const initialState = fromJS({
  dramas: [],
  error: false,
  url: '',
  count: 0
})

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_DRAMAS:
      return state
        .set('error', false)
        .set('dramas', [])
    case LOAD_DRAMAS_SUCCESS:
      return state
        .set('dramas', action.dramas)
    case LOAD_DRAMAS_ERROR:
      return state
        .set('error', action.error)
        .set('dramas', [])
    case LOAD_DRAMA:
      return state
        .set('error', false)
        .set('url', '')
        .set('count', 0)
    case LOAD_DRAMA_SUCCESS:
      return state
        .set('url', action.url)
        .set('count', action.count)
    case LOAD_DRAMA_ERROR:
      return state
        .set('error', action.error)
        .set('url', '')
        .set('count', 0)
    default:
      return state
  }
}
