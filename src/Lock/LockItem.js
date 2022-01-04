import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class LockItem extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='lockscreen-item'>{children}</div>
  }
}
LockItem.propTypes = {
  children: PropTypes.node
}
LockItem.defaultProps = {
  children: null
}
export default { LockItem }
