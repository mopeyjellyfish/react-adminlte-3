import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { LockWrapper } from './LockWrapper'
import { LockLogo } from './LockLogo'
import { LockName } from './LockName'
import { LockItem } from './LockItem'
import { LockImage } from './LockImage'
import { LockFooter } from './LockFooter'
import { LockForm } from './LockForm'

export function Lock(props) {
  const { children, header, name, image, footer, onChange, onSubmit } = props
  useEffect(() => {
    document.body.classList.add('hold-transition', 'lockscreen')
    document.body.style.removeProperty('height')
    return () => {
      document.body.classList.remove('hold-transition', 'lockscreen')
    }
  })

  return (
    <LockWrapper>
      <LockLogo>{header}</LockLogo>
      <LockName>{name}</LockName>
      <LockItem>
        <LockImage image={image} />
        <LockForm onChange={onChange} onSubmit={onSubmit} />
      </LockItem>
      {children}
      <LockFooter>{footer}</LockFooter>
    </LockWrapper>
  )
}
Lock.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  helper: PropTypes.node,
  title: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
Lock.defaultProps = {
  children: null,
  title: '',
  message: '',
  name: '',
  header: null,
  helper: null,
  image: '',
  onChange: null,
  onSubmit: null
}
export default { Lock }
