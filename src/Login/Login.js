import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { CardWrapper, CardHeader, CardBody } from '../Card'
import { LoginBox } from './LoginBox'

export function Login(props) {
  const { children, header, message, boxOnly, type } = props
  useEffect(() => {
    if (!boxOnly) {
      document.body.classList.add('login-page')
      document.body.style.removeProperty('height')
      return () => {
        document.body.classList.remove('login-page')
      }
    }
  })
  return (
    <LoginBox>
      <CardWrapper outline type={type}>
        <CardHeader center>{header}</CardHeader>
        <CardBody>
          <p className='login-box-msg'>{message}</p>
          {children}
        </CardBody>
      </CardWrapper>
    </LoginBox>
  )
}
Login.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  title: PropTypes.string,
  message: PropTypes.string,
  boxOnly: PropTypes.bool,
  type: PropTypes.string
}
Login.defaultProps = {
  children: null,
  title: '',
  message: '',
  boxOnly: false,
  header: null,
  type: 'secondary'
}
export default { Login }
