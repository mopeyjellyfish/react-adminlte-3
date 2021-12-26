import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class Sidebar extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='sidebar'>{children}</div>
  }
}
Sidebar.propTypes = {
  children: PropTypes.node
}
Sidebar.defaultProps = {
  children: null
}
export default { Sidebar }
