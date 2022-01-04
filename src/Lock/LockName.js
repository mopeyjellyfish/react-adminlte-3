import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class LockName extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='lockscreen-name'>{children}</div>
  }
}
LockName.propTypes = {
  children: PropTypes.node
}
LockName.defaultProps = {
  children: null
}
export default { LockName }
