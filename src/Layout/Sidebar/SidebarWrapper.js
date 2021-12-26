import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class SidebarWrapper extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        {children}
      </aside>
    )
  }
}
SidebarWrapper.propTypes = {
  children: PropTypes.node
}
SidebarWrapper.defaultProps = {
  children: null
}
export default { SidebarWrapper }
