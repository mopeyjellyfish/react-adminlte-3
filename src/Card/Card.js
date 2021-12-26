import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { CardWrapper } from './Wrapper'
import { CardHeader } from './Header'
import { CardTool } from './Tools'
import { CardBody } from './Body'
import { CardFooter } from './Footer'
import { Loading } from '../Effects/Loading'

export class Card extends PureComponent {
  render() {
    const {
      children,
      title,
      type,
      outline,
      background,
      gradient,
      maximize,
      minimize,
      removable,
      footer,
      loading,
      center
    } = this.props
    return (
      <CardWrapper
        type={type}
        outline={outline}
        background={background}
        gradient={gradient}
      >
        <CardHeader title={title} center={center}>
          <CardTool
            maximize={maximize}
            minimize={minimize}
            removable={removable}
          />
        </CardHeader>
        <CardBody>{children}</CardBody>
        {footer ? <CardFooter>{footer}</CardFooter> : null}
        {loading ? <Loading /> : null}
      </CardWrapper>
    )
  }
}
Card.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.any,
  title: PropTypes.string,
  type: PropTypes.string,
  background: PropTypes.string,
  outline: PropTypes.bool,
  gradient: PropTypes.bool,
  maximize: PropTypes.bool,
  minimize: PropTypes.bool,
  removable: PropTypes.bool,
  loading: PropTypes.bool,
  center: PropTypes.bool
}
Card.defaultProps = {
  children: null,
  title: '',
  type: '',
  background: '',
  outline: false,
  gradient: false,
  maximize: false,
  minimize: false,
  removable: false,
  loading: false,
  center: false,
  footer: null
}
export default { Card }
