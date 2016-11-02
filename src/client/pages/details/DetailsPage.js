import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import FilmDetails from '../../components/FilmDetails'
import { getSelectedFilm } from './actions/Actions'

class DetailsPage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getSelectedFilm()
    this.forceUpdate()
  }

  render() {
    const { selectedFilm } = this.props

    return (
      <div className="film-search">
        {selectedFilm != undefined &&
          <FilmDetails film={selectedFilm} />
        }
      </div>
    )
  }
}

DetailsPage.propTypes = {
  selectedFilm: PropTypes.object.isRequired,
  getSelectedFilm: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {

  const { selectedFilmState } = state

  const {
    selectedFilm
  } = selectedFilmState || {
    selectedFilm: 'None'
  }
  return {
    selectedFilm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedFilm: () => {
      dispatch(getSelectedFilm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage)
