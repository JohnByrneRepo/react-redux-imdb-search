import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import { routerReducer, UPDATE_LOCATION } from 'react-router-redux'

// Asynchronous/services state

import {
  REQUEST_FILM_DATA,
  RECEIVE_FILM_DATA } from '../pages/search/actions/ActionTypes'

// Asynchronous/services state

const filmDataState = (state = {
  isLoading: false,
  filmData: []
}, action) => {
  switch (action.type) {
    case REQUEST_FILM_DATA:
      return Object.assign({}, state, {
        isLoading: true
      })
    case RECEIVE_FILM_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        filmData: action.filmData || []
      })
    default:
      return state
  }
}

// Page state

import {
  SET_SELECTED_FILM } from '../pages/search/actions/ActionTypes'

import {
  GET_SELECTED_FILM } from '../pages/details/actions/ActionTypes'

const selectedFilmState = (state = {
  selectedFilm: 'Test'
}, action) => {
  switch (action.type) {
    case GET_SELECTED_FILM:
      return state
    case SET_SELECTED_FILM:
      return Object.assign({}, state, {
        selectedFilm: action.selectedFilm,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  // Asynchronous/services state
  filmDataState,
  // Page state
  selectedFilmState,
  // Router state
  routing: routerReducer
})

export default rootReducer
