import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class LockWrapper extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='lockscreen-wrapper'>{children}</div>
  }
}
LockWrapper.propTypes = {
  children: PropTypes.node
}
LockWrapper.defaultProps = {
  children: null
}
export default { LockWrapper }
