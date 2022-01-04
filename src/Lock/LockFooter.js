import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class LockFooter extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='lockscreen-footer'>{children}</div>
  }
}
LockFooter.propTypes = {
  children: PropTypes.node
}
LockFooter.defaultProps = {
  children: null
}
export default { LockFooter }
