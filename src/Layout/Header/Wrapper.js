import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class NavHeader extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
        {children}
      </nav>
    )
  }
}
NavHeader.propTypes = {
  children: PropTypes.node
}

NavHeader.defaultProps = {
  children: null
}

export default { NavHeader }
