import { fromJS } from 'immutable'

import { 
  LOAD_DRAMAS,
  LOAD_DRAMAS_SUCCESS,
  LOAD_DRAMAS_ERROR,
  LOAD_DRAMA,
  LOAD_DRAMA_SUCCESS,
  LOAD_DRAMA_ERROR
} from './constants'


const initialDrama = {
  url: '',
  count: 0,
  history: {
    e: 1,
    t: 0
  }
}

const initialState = fromJS({
  dramas: [],
  error: false,
  drama: initialDrama
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
        .set('drama', fromJS(initialDrama))
    case LOAD_DRAMA_SUCCESS:
      return state
        .set('drama', fromJS(action.drama))
    case LOAD_DRAMA_ERROR:
      return state
        .set('error', action.error)
        .set('drama', fromJS(initialDrama))
    default:
      return state
  }
}
