import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class SidebarNavTree extends PureComponent {
  render() {
    const { children } = this.props
    return <ul className='nav nav-treeview'>{children}</ul>
  }
}

SidebarNavTree.propTypes = {
  children: PropTypes.node
}
SidebarNavTree.defaultProps = {
  children: null
}
export default { SidebarNavTree }
