import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class SidebarNav extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <nav className='mt-2'>
        <ul
          className='nav nav-pills nav-sidebar flex-column'
          data-widget='treeview'
          role='menu'
          data-accordion='false'
        >
          {children}
        </ul>
      </nav>
    )
  }
}
SidebarNav.propTypes = {
  children: PropTypes.node
}
SidebarNav.defaultProps = {
  children: null
}
export default { SidebarNav }
