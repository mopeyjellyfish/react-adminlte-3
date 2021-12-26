import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class Nav extends PureComponent {
  render() {
    const { children, right } = this.props
    return (
      <nav className={`navbar-nav ${right ? 'ml-auto' : ''}`}>{children}</nav>
    )
  }
}
Nav.propTypes = {
  children: PropTypes.node,
  right: PropTypes.bool
}

Nav.defaultProps = {
  children: null,
  right: false
}

export default { Nav }
