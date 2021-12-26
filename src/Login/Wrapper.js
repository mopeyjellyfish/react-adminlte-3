import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class LoginWrapper extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='login-box'>{children}</div>
  }
}
LoginWrapper.propTypes = {
  children: PropTypes.node
}
LoginWrapper.defaultProps = {
  children: null
}
export default { LoginWrapper }
