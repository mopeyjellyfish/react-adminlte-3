import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class LoginBox extends PureComponent {
  render() {
    const { children } = this.props
    return <div className='login-box'>{children}</div>
  }
}
LoginBox.propTypes = {
  children: PropTypes.node
}
LoginBox.defaultProps = {
  children: null
}
export default { LoginBox }
