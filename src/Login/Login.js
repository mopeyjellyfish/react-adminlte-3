import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { CardWrapper, CardHeader, CardBody } from '../Card'
import { LoginWrapper } from './Wrapper'

export class LoginBox extends PureComponent {
  render() {
    const { children, title, message } = this.props
    return (
      <LoginWrapper>
        <CardWrapper outline type='primary'>
          <CardHeader center>
            <b>{title}</b>
          </CardHeader>
          <CardBody>
            <p className='login-box-msg'>{message}</p>
            {children}
          </CardBody>
        </CardWrapper>
      </LoginWrapper>
    )
  }
}
LoginBox.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  message: PropTypes.string
}
LoginBox.defaultProps = {
  children: null,
  title: '',
  message: ''
}
export default { LoginBox }
