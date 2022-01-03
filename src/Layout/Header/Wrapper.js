import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class NavHeader extends PureComponent {
  render() {
    const { children, dark } = this.props
    const darkTheme = dark ? 'navbar-dark' : 'navbar-light'
    return (
      <nav className={`main-header navbar navbar-expand ${darkTheme}`}>
        {children}
      </nav>
    )
  }
}
NavHeader.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool
}

NavHeader.defaultProps = {
  children: null,
  dark: false
}

export default { NavHeader }
