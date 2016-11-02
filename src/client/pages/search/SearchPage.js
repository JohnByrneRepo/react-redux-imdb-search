import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FilmList from '../../components/FilmList'
import { proceedToDetails, setSelectedFilm, fetchFilmData } from './actions/Actions'

class SearchPage extends Component {

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onKeyUp(inputText) {
    this.props.fetchFilmData(inputText)
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }

  onClick(index) {
    this.props.setSelectedFilm(this.props.filmData[index])
    this.props.proceedToDetails()
  }

  render() {
    const { filmData } = this.props
    const { handleChange, onClick } = this

    return (
      <div className="film-search">
        <label className="branding-text-white annotation">Search</label>
        <input className="branding-text-black" type="text" id="one" onKeyUp={(event) => { this.onKeyUp(event.target.value) }} />
        {filmData != undefined && filmData.length > 0 &&
          <FilmList data={filmData} onClick={(index) => { this.onClick(index) }} />
        }
      </div>
    )
  }
}

SearchPage.propTypes = {
  filmData: PropTypes.array.isRequired,
  setSelectedFilm: PropTypes.func.isRequired,
  proceedToDetails: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {

  const { filmDataState  } = state

  const {
    isLoading,
    filmData
  } = filmDataState || {
    isLoading: true,
    filmData: []
  }

  return {
    isLoading,
    filmData
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilmData: (inputText) => {
      dispatch(fetchFilmData(inputText))
    },
    setSelectedFilm: (filmObject) => {
      dispatch(setSelectedFilm(filmObject))
    },
    proceedToDetails: () => {
      dispatch(proceedToDetails())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
