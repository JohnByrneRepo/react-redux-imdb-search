import { history, push } from 'react-router-redux'
import fetch from 'isomorphic-fetch'

// Async actions

import {
  REQUEST_FILM_DATA,
  RECEIVE_FILM_DATA } from './ActionTypes'

const mapFilmData = (filmData) => {
  return filmData
}

const requestFilmData = (inputText) => {
  return {
    type: REQUEST_FILM_DATA,
    inputText
  }
}

const receiveFilmData = (json) => {
  var filmData = []
  json.Response === 'True' ? filmData = json.Search.map(mapFilmData) : []
  return {
    type: RECEIVE_FILM_DATA,
    filmData
  }
}

export const fetchFilmData = (inputText) => {
  return (dispatch) => {
    dispatch(requestFilmData(inputText))
    return fetch(`http://www.omdbapi.com/?s=${inputText}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveFilmData(json))
      })
  }
}

// Route changes

export const proceedToDetails = (filmObject) => {
  return (dispatch, getState) => {
    const { selectedFilm } = getState()
    dispatch(push('/details'))
  }
}

// Page actions

import {
  SET_SELECTED_FILM } from './ActionTypes'

let selectedFilm = ''

export const setSelectedFilm = (selectedFilm) => {
  return {
    type: SET_SELECTED_FILM,
    selectedFilm
  }
}
