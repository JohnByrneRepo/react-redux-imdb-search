import React, { Component, PropTypes } from 'react'
// import './FilmDetails.scss'

class FilmDetails extends Component {
  render() {
    return (
      <div>
        <div className="film-details-container">
          <div className="row branding-bg-dark-cyan">
            <div>{this.props.film.Title}</div>
            <div>{this.props.film.Type}</div>
            <div>{this.props.film.Year}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmDetails
