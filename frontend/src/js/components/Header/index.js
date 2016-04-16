import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    return (
      <Navbar
        stacked
        className='top-menu'
      >
      <Link to='/'>
        <img className='leaf-logo' src={this.props.logoUrl} />
      </Link>
      </Navbar>
    )
  }
}
