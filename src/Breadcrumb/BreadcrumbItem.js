import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class BreadcrumbItem extends PureComponent {
  render() {
    const { children, active } = this.props
    return (
      <li className={`breadcrumb-item ${active ? 'active' : ''}`}>
        {children}
      </li>
    )
  }
}
BreadcrumbItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool
}
BreadcrumbItem.defaultProps = {
  children: null,
  active: false
}
export default { BreadcrumbItem }
