import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class LockLogo extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='lockscreen-logo'>{children}</div>
  }
}
LockLogo.propTypes = {
  children: PropTypes.node
}
LockLogo.defaultProps = {
  children: null
}
export default { LockLogo }
