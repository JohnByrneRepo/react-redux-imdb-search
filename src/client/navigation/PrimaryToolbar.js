import React, { Component } from 'react'
import { connect } from 'react-redux'

let expanded = false

class PrimaryToolbar extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    expanded = !expanded
    if (expanded) {
      document.getElementsByClassName('sidebar')[0].style.width = "200px"
    } else {
      document.getElementsByClassName('sidebar')[0].style.width = "65px"
    }
  }

  render() {
    const { onClick } = this

    return (
      <div className="primary-toolbar branding-bg-light-sea-green">
        <i onClick={onClick} className='primary-toolbar-hamburger-icon material-icons'>dehaze</i>
        <i className="primary-toolbar-user-icon material-icons branding-text-black">person</i>
        <span className="primary-toolbar-user-name">FILM SEARCH</span>
        <i className="primary-toolbar-globe-icon material-icons">language</i>
        <div className="primary-toolbar-logo-container brandingBg2">
          {/*<img src="src/client/images/logo.png" className="primary-toolbar-logo" />*/}
        </div>
      </div>
    )
  }
}

export default PrimaryToolbar
